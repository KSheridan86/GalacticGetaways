import React from 'react'
import { Link } from 'react-router-dom'
import image2 from '../media/gghanger.png'
import image3 from '../media/ggint.png'
import image5 from '../media/bridge.png'
import image6 from '../media/ggs.png'
import image7 from '../media/hang22.png'
import image8 from '../media/int2.png'
import image9 from '../media/int3M.png'
import image1 from '../media/dlaunch.jpg'
import image11 from '../media/shut3.png'
import image12 from '../media/intkid.png'

const images3 = [
  // { id: 1, src: image1, alt: 'Image 1', location: 'section1' },
  { id: 1, src: image1, alt: 'Image 1', location: 'section2' },
  
  { id: 2, src: image7, alt: 'Image 2', location: 'section1' },
  { id: 3, src: image3, alt: 'Image 3', location: 'section1' },
  { id: 6, src: image6, alt: 'Image 6', location: 'section1' },
  { id: 9, src: image9, alt: 'Image 9', location: 'section1' },
  { id: 12, src: image12, alt: 'Image 12', location: 'section1' },
  { id: 7, src: image2, alt: 'Image 7', location: 'section1' },
  { id: 7, src: image2, alt: 'Image 7', location: 'section1' },
  { id: 8, src: image8, alt: 'Image 8', location: 'section2' },
  { id: 5, src: image5, alt: 'Image 5', location: 'section2' },
  { id: 9, src: image9, alt: 'Image 9', location: 'section1' },
  { id: 10, src: image5, alt: 'Image 10', location: 'section2' },
  { id: 4, src: image6, alt: 'Image 4', location: 'section1' },
]
const images = [
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fdlaunch.webp?alt=media&token=4bb4dfd8-f799-48b3-a9b8-dd2935f34a80',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fhang22.webp?alt=media&token=d11278e0-23ff-4b46-9586-b8f729688adf',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fggint.webp?alt=media&token=a1859b19-7e6c-44e3-9c47-c481205a9f8a',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fggs.webp?alt=media&token=83c9f431-b23f-4a48-80b4-3cd7859e18f7',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fint3M.webp?alt=media&token=5b0d1974-8bd2-4d8f-8d7a-d57eae6b16bd',
  "https://i.ibb.co/cTMRyX4/intkid.png",
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fstars-mobile.webp?alt=media&token=a037265f-4214-48cb-9fad-faf13b3731bd',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fcolsky.webp?alt=media&token=094e7463-d950-47ad-8c03-cd56a2a3858d',

  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fgg312.webp?alt=media&token=4cfb3dc6-eaf0-4f88-8d17-0e965d599e8f',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fgghanger.webp?alt=media&token=ba7111a3-79b3-4794-8813-9e5e3e26c477',
  
  
  
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fint2.webp?alt=media&token=d11278e0-23ff-4b46-9586-b8f729688adf',
  
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Flaunch.webp?alt=media&token=10776abf-e46a-418c-a6ce-28a2110ad99d',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fmw.webp?alt=media&token=c4fbdec6-63af-4bb3-9007-52d7565b71a2',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fplvid.webp?alt=media&token=52bcca08-e02f-4136-89cf-04141100c0d5',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fshut.webp?alt=media&token=240f3c48-65e2-456e-ade5-3b14b47efc22',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fstar-image.webp?alt=media&token=8a1baa0c-bc1e-469f-a3e4-91c6a32f3f8d',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fstargb.webp?alt=media&token=e2117b8c-43dc-4ec0-a167-8c694e2d5eea',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fstars-mobile.webp?alt=media&token=a037265f-4214-48cb-9fad-faf13b3731bd',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fstars.webp?alt=media&token=5d5dce17-bea4-4c16-b453-affcb889c92d',
  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fstarsbg.webp?alt=media&token=ea51c518-f373-4589-bb1c-6c57a0bf2e03',
]

const DataCard = ({ data, link, index, name }) => {
  return (
    <div className="data-card">
      <img
        src={images[index]}
        alt={`space image ${index}`}
        className="data-image"
      />
      <div className="data-content">
        <h2 className="data-title">{name.data.Header}</h2>
        <p className="data-description">{name.data.Body}</p>
        <Link to={link}>
          <button className="data-button">Learn More</button>
        </Link>
      </div>
    </div>
  )
}

export default DataCard
