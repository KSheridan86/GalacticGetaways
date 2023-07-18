import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
// import cloudinary from '../optimize/Cloud';
// import { AdvancedImage } from '@cloudinary/react';
import logo from '../media/gg312.png'
import fullImage from '../media/shut.png'

import image1 from '../media/gg3.png'
import vi from '../media/plvid.png'
import image2 from '../media/gghanger.png'
import image3 from '../media/ggint.png'
import image4 from '../media/gg3.png'
import image5 from '../media/bridge.png'
import image6 from '../media/ggs.png'
import image7 from '../media/hang22.png'
import image8 from '../media/int2.png'
import image9 from '../media/int3M.png'
import image10 from '../media/shut.png'
import image11 from '../media/shut3.png'
import vid from '../media/ggvid1.mp4'

const images = [
  { id: 1, src: image1, alt: 'Image 1', location: 'section1' },
  { id: 2, src: image2, alt: 'Image 2', location: 'section2' },
  { id: 3, src: image3, alt: 'Image 3', location: 'section1' },
  { id: 4, src: image4, alt: 'Image 4', location: 'section1' },
  { id: 5, src: image5, alt: 'Image 5', location: 'section2' },
  { id: 6, src: image6, alt: 'Image 6', location: 'section1' },
  { id: 7, src: image7, alt: 'Image 7', location: 'section1' },
  { id: 8, src: image8, alt: 'Image 8', location: 'section2' },
  { id: 9, src: image9, alt: 'Image 9', location: 'section1' },
  { id: 10, src: image10, alt: 'Image 10', location: 'section1' },
  { id: 11, src: image11, alt: 'Image 11', location: 'section1' },
]
const Home = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    async function getInfo() {
      try {
        const nameCollectionRef = collection(db, 'Home-Info')
        const querySnapshot = await getDocs(nameCollectionRef)
        const data = querySnapshot.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setInfo(data)
      } catch (error) {
        console.log('Error getting info:', error)
      }
    }
    getInfo()
  }, [])

  return (
    <div className="home-container pg-wrap">
      <div className="logo-container">
        <img src={logo} alt="logo Image" className="logo" />
      </div>
      <div className="full-image-container">
        <div className="full-image-overlay">
          <img src={fullImage} alt="Full Image" className="full-image" />
        </div>
      </div>
      <div className="intro-video">
        <video controls width="640" height="360" poster={vi}>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="button-container">
        <button>Start Your Space Adventure</button>
      </div>
      {info.map((name, index) => (
         <div key={index} className={`point ${index === info.length - 1 ? 'last-item' : ''}`}>
          <div className="intro">
            <img
              src={images[index].src}
              alt={images[index].alt}
              className='images-home gradient-border rounded-image btn-home'
            />
            <h2 className="intro-head">{name.data.Header}</h2>
            <p className="intro-content">{name.data.Body}</p>
            <div className="button-container mapbtn">
        <button>Start Your Space Adventure</button>
      </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Home
