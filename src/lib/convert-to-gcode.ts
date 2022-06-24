import * as d3 from 'd3'
import { Vector3 } from 'three'
// import * as moment from 'moment'
// import { hasData } from 'jquery'
import * as async from 'async'
import * as isOdd from 'is-odd'

const angleDistanceMultiplier = new Map<number, number>()
angleDistanceMultiplier.set(30, Math.sqrt(3))
angleDistanceMultiplier.set(45, Math.sqrt(2))
angleDistanceMultiplier.set(60, 0.57735)
angleDistanceMultiplier.set(75, 0.26795)
angleDistanceMultiplier.set(90, 0)

export default function (callback: Function, options: any, info: any) {
  getPixels('./1to1-section.png', (err: any, pixels: any) => {
    console.log(err)
    console.log(pixels)

    const reduced = new Uint8Array(pixels.shape[0] * pixels.shape[1])
    for (let i = 0; i < pixels.data.length; i += 4) {
      reduced[Math.floor(i / 4)] = pixels.data[i]
    }
    generateGcode(reduced, pixels.shape[0], pixels.shape[1], callback)
  })

  function getPixels(url: string, callback: Function) {
    const img = new Image()
    img.src = url
    img.onload = () => {
      const pixels = {
        shape: [img.width, img.height],
        data: new Uint8ClampedArray(0)
      }
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      info.px.x = img.width
      info.px.y = img.height
      info.dimensions.x = canvas.width * options.px_to_mm
      info.dimensions.y = canvas.height * options.px_to_mm
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        if (imgData) {
          pixels.data = imgData.data
          callback(null, pixels)
        }
      }
    }
  }

  function generateGcode(pixels: Uint8Array, width: number, height: number, callback: Function) {
    const simulatedSpace = new Uint8Array(pixels.length).fill(255)
    console.log(simulatedSpace.slice(0, 100))
    const lines = []

    lines.push('( gcode generated by depth-map-to-gcode )')
    lines.push('( settings )')
    Object.keys(options).forEach(option_name => {
      const option_value = options[option_name]
      lines.push(`( ${option_name} ${option_value} )`)
    })

    console.log(lines.join('\n'))

    lines.push('G17 G54 G40 G49 G80 G90')
    lines.push(`F${options.plunge_rate}`)

    let distanceTraveled = 0
    const runningVector = new Vector3(0, 0, 0)
    const compareVector = new Vector3(0, 0, 0)

    function moveTo(x: number, y: number, z: number, fastOrSlow: boolean) {
      compareVector.set(x, y, z)
      distanceTraveled += runningVector.distanceTo(compareVector)
      runningVector.set(x, y, z)
      lines.push([fastOrSlow ? 'G1' : 'G0', `X${x.toFixed(4)}`, `Y${y.toFixed(4)}`, `Z${z.toFixed(4)}`].join(' '))
    }

    const skipX = options.skipX
    const skipY = options.skipY

    const scaleDepth = d3.scaleLinear().domain([0, 255]).range([-options.depth_mm, 0])
    const pos = d3.scaleLinear().domain([0, width]).range([0, width * options.px_to_mm])

    const searchSpace = Math.ceil(pos.invert(options.tool_width_mm))
    console.log('search space', searchSpace)

    const searchMatrix = generate_tool_depths(searchSpace)
    console.log(searchMatrix)
    let xPos = 0
    let yPos = -skipY
    let yDirection = skipY

    let v = 0
    let i = 0
    let cummulativeBackOff = 0

    const fns = []
    fns.push((done: Function) => {
      console.log('starting system')
      done()
    })

    const xPositionsToCheck = Math.floor(width / skipX)

    for (let i = 0; i < xPositionsToCheck; i++) {
      fns.push((done: Function) => {
        if (yDirection > 0) {
          while (yPos < height - skipY) {
            yPos += yDirection
            testPoint(xPos, yPos)
          }
        } else {
          while (yPos > skipY) {
            yPos += yDirection
            testPoint(xPos, yPos)
          }
        }
        yDirection = yDirection > 0 ? -skipY : skipY
        xPos += skipX
        info.process.percent_complete = ((xPos / width) * 100).toFixed(1) + '%'
        // console.log(info.process.percent_complete)
        // done()
        setTimeout(done, 0)
      })
    }

    fns.push((done:Function)=>{
      lines.push('M5')
      lines.push('G17 G54 G40 G49 G80 G90')
      lines.push('M2')
  
      console.log('lines length', lines.length)
      info.lines.length = 0
      lines.forEach((line, lineIdx) => {
        if (lineIdx === 3 + Object.keys(options).length + 2) {
          info.lines.push(`F${options.feed_rate}`)
        }
        info.lines.push(line)
      })
      info.bytes.value = info.lines.join('\n').length
      console.log('distanceTraveled', distanceTraveled)
      console.log('cumulativebackoff', cummulativeBackOff)
      info.cutting.distance_mm = distanceTraveled
      info.cutting.time = convert_to_hms((info.cutting.distance_mm / 100) / (options.feed_rate / 60))
      info.bit.backoff = cummulativeBackOff / info.lines.length
      info.bit.overlap = (((options.tool_width_mm / 2) - (options.px_to_mm * skipX)) / (options.tool_width_mm / 2)) * 100
  
      callback(lines.join('\n'))
      done()
    })

    async.series(fns)

    function testPoint(x: number, y: number) {
      i = (x * height) + y
      v = pixels[i]

      // console.log(x,y,v)

      const searchMatrixIdxOffset = Math.floor(searchMatrix.length / 2)
      let testOffsetX = 0
      let testOffsetY = 0
      let testSampleIdx = 0
      let testSample = 0
      let offsetCompareSample = 0

      let backoffValue = 0

      for (let i = 0; i < searchMatrix.length; i++) {
        testOffsetX = (i - searchMatrixIdxOffset) + x
        for (let j = 0; j < searchMatrix[i].length; j++) {
          testOffsetY = (j - searchMatrixIdxOffset) + y
          offsetCompareSample = searchMatrix[i][j]
          if (offsetCompareSample !== -1) {
            testSampleIdx = (testOffsetX * height) + testOffsetY
            if (checkBounds(testOffsetX, testOffsetY, info.px.x, info.px.y)) {   // check to see if the search is within the bounds of the image
              testSample = pixels[testSampleIdx]
              if (v + offsetCompareSample > testSample) {
                // win
              } else {
                // FAIL
                backoffValue = testSample - (v + offsetCompareSample)
              }
            } else {
              // out of bounds, don't check
            }
          }
        }
      }
      cummulativeBackOff += backoffValue
      if (x === 0 && y === 0) console.log('first backoff value', backoffValue)
      moveTo(pos(x), pos(y), scaleDepth(v) - scaleDepth(255 - backoffValue), true)
    }

    function convert_to_hms(v: number): string {
      let seconds = v
      const hours = Math.floor(seconds / 3600)
      seconds -= hours * 3600
      const minutes = Math.floor(seconds / 60)
      seconds -= minutes * 60
      return `${hours.toFixed(0)}h ${minutes.toFixed(0)}m ${seconds.toFixed(0)}s`
    }

    function generate_tool_depths(searchSpace: number): number[][] {
      const nudge = isOdd(searchSpace) ? 0 : 1
      const matrix = new Array(searchSpace + nudge).fill(0).map((o, i) => { return new Array(searchSpace + nudge).fill(0) })
      const centerIdx = Math.floor((searchSpace + nudge) / 2)
      const centerPoint = new Vector3(0, 0, 0)
      const testPoint = new Vector3(0, 0, 0)
      matrix.forEach((row: number[], row_idx: number) => {
        const y = row_idx
        row.forEach((col: number, col_idx: number) => {
          const x = col_idx
          testPoint.set(pos(centerIdx - x), pos(centerIdx - y), 0)
          if (testPoint.length() > options.tool_width_mm / 2) {
            col = -1
          } else {
            col = Math.floor(scaleDepth.invert(testPoint.length() * angleDistanceMultiplier.get(Number(options.tool_angle_deg)))) - 255
          }
          matrix[row_idx][col_idx] = col
        })
      })
      matrix.forEach(row => console.log(row.join('\t')))
      return matrix
    }
  }
}

function checkBounds(x: number, y: number, w: number, h: number): boolean {
  return (x >= 0) && (x < w - 1) && (y > 0) && (y < h - 1)
}