import * as fs from 'node:fs'
import GeoTIFF, { fromUrl, fromUrls, fromArrayBuffer, fromBlob } from "geotiff";

const tiff = fs.readFileSync('./public/cropped-area-no-processing.tiff')

console.log(tiff.length)

  ; (async () => {
    try {
      // const b = new ArrayBuffer(tiff.toA)
      // console.log(b)
      const img = await fromArrayBuffer(tiff)
      console.log('img', img)
    } catch (e) {
      console.log('error', e)
    }
    // console.log(img)
  })()

// ;(async ()=>{
//   const response = await fromUrl('http://localhost:8000/public/cropped-area-no-processing.tiff');
//   // console.log(response)
//   const img = await response.getImage()
//   console.log(img)
//   img.littleEndian = false
//   console.log(Object.keys(img))
//   const arr = img.getArrayForSample(0,2048*2048)
//   console.log(arr)
//   let zeroes = 0
//   for(let i = 0; i < arr.length; i++) {
//     if(i % 100000 === 0) console.log(arr[i])
//     if(arr[i] === 0) zeroes++
//   }
//   console.log(zeroes)

//   const [red, green, blue] = await img.readRasters();
//   console.log(red)
//   // const arrayBuffer = await response.arrayBuffer();
//   // const tiff = await fromArrayBuffer(arrayBuffer);
//   // console.log(tiff)  
// })()