import * as d3 from 'd3'
import { Vector3 } from 'three'
import * as moment from 'moment'

export default function (callback: Function, options: any, info: any) {
  getPixels('./1to1-section.png', (err: any, pixels: any) => {
    console.log(err)
    console.log(pixels)

    const reduced = new Uint8Array(pixels.shape[0] * pixels.shape[1])
    for (let i = 0; i < pixels.data.length; i += 4) {
      reduced[Math.floor(i / 4)] = pixels.data[i]
    }
    callback(generateGcode(reduced, pixels.shape[0], pixels.shape[1]))
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

  function generateGcode(pixels: Uint8Array, width: number, height: number) {
    const lines = []
    lines.push(`F${options.plunge_rate}`)

    let distanceTraveled = 0
    const runningVector = new Vector3(0, 0, 0)
    const compareVector = new Vector3(0, 0, 0)

    function moveTo(x: number, y: number, z: number, fastOrSlow: boolean) {
      // console.log(x, y, z)
      compareVector.set(x, y, z)
      distanceTraveled += runningVector.distanceTo(compareVector)
      // console.log(distanceTraveled)
      runningVector.set(x, y, z)
      lines.push([fastOrSlow ? 'G1' : 'G0', `X${x.toFixed(4)}`, `Y${y.toFixed(4)}`, `Z${z.toFixed(4)}`].join(' '))
    }

    const skipX = options.skipX
    const skipY = options.skipY

    // const depth_mm = options.depth_mm
    // const px_to_mm = options.px_to_mm
    const scaleDepth = d3.scaleLinear().domain([0, 255]).range([-options.depth_mm, 0])
    const pos = d3.scaleLinear().domain([0, width]).range([0, width * options.px_to_mm])

    let xPos = 0
    let yPos = -skipY
    let yDirection = skipY

    let v = 0
    let i = 0

    while (xPos < width) {
      if (yDirection > 0) {
        while (yPos < height - skipY) {
          yPos += yDirection
          i = (xPos * height) + yPos
          v = scaleDepth(pixels[i])
          // console.log({xPos, yPos, v, yDirection, i})
          moveTo(pos(xPos), pos(yPos), v, true)
        }
      } else {
        while (yPos > skipY) {
          yPos += yDirection
          i = (xPos * height) + yPos
          v = scaleDepth(pixels[i])
          // console.log(xPos, yPos, v, yDirection, i)
          moveTo(pos(xPos), pos(yPos), v, true)
        }
      }
      yDirection = yDirection > 0 ? -skipY : skipY
      xPos += skipX
    }
    console.log('lines length', lines.length)
    console.log(info)
    info.lines.length = 0
    lines.forEach((line, lineIdx) => {
      if (lineIdx === 2) {
        info.lines.push(`F${options.feed_rate}`)
      }
      info.lines.push(line)
    })
    info.bytes.value = info.lines.join('\n').length
    console.log('distanceTraveled', distanceTraveled)
    info.cutting.distance_mm = distanceTraveled

    // const duration = moment.duration(
    //   info.cutting.distance_mm / options.feed_rate,
    //   "seconds"
    // );
    // info.cutting.time = `${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds`
    info.cutting.time = convert_to_hms((info.cutting.distance_mm/100) / (options.feed_rate/60))
    return lines.join('\n')
  }
}

function convert_to_hms(v: number) {
  let seconds = v
  const hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  return `${hours.toFixed(0)}h ${minutes.toFixed(0)}m ${seconds.toFixed(0)}s`
}