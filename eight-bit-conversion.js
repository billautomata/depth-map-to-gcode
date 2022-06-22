const getPixels = require('get-pixels')
const fs = require('fs')

(async () => {
  const d3 = await import('d3')
  const png = fs.readFileSync('./public/1to1-section.png')
  getPixels(png, 'image/png', (err, pixels) => {
    console.log(err)
    console.log(pixels)

    const reduced = new Uint8Array(pixels.shape[0] * pixels.shape[1])
    for (let i = 0; i < pixels.data.length; i += 4) {
      reduced[Math.floor(i / 4)] = pixels.data[i]
    }
    generateGcode(reduced, pixels.shape[0], pixels.shape[1])
  })

  function generateGcode(pixels, x, y) {
    const lines = []
    lines.push('F1000')

    function moveTo(x, y, z, fastOrSlow) {
      lines.push([fastOrSlow ? 'G1' : 'G0', `X${x.toFixed(2)}`, `Y${y.toFixed(2)}`, `Z${z.toFixed(2)}`].join(' '))
    }

    const skip = 4

    const depth_mm = 20
    const px_to_mm = 0.05
    const scaleDepth = d3.scaleLinear().domain([0, 255]).range([-depth_mm,0])
    const scalePosition = d3.scaleLinear().domain([0, x]).range([0, skip * x * px_to_mm])
    const pos = scalePosition

    let xPos = 0
    let yPos = 0
    let yDirection = skip

    while (xPos < x) {
      if (yDirection > 0) {
        while (yPos < y) {
          moveTo(pos(xPos), pos(yPos), scaleDepth(pixels[(xPos * y) + yPos]), )
          yPos += yDirection
        }
      } else {
        while (yPos > 0) {
          moveTo(pos(xPos), pos(yPos), scaleDepth(pixels[(xPos * y) + yPos]))
          yPos += yDirection
        }
      }
      yDirection = yDirection > 0 ? -skip : skip
      xPos += skip
    }
    console.log('toolpaths length', lines.length)
    fs.writeFileSync('./public/lines.gcode', lines.join('\n'))
  }

})().catch(err => { console.error(err) })

