import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
// import cloudinary from '../optimize/Cloud';
// import { AdvancedImage } from '@cloudinary/react';
import DataCard from '../components/DataCard'
import logo from '../media/gg312.png'
import fullImage from '../media/shut.png'
// import Wireframe from '../components/Wireframe';
import vi from '../media/plvid.png'
import image2 from '../media/gghanger.png'
import image3 from '../media/ggint.png'
import image5 from '../media/bridge.png'
import image6 from '../media/ggs.png'
import image7 from '../media/hang22.png'
import image8 from '../media/int2.png'
import image9 from '../media/int3M.png'
import image1 from '../media/shut.png'
import image11 from '../media/shut3.png'
import vid from '../media/ggvid1.mp4'
import dataBg from '../media/dlaunch.jpg'
import background from '../media/stars-mobile.webp'

const data = {
  link: '/contact',
}

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
    <div className="star-image home-container pg-wrap">
      <div className="logo-container">
        <img src=  'https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fgg312.webp?alt=media&token=4cfb3dc6-eaf0-4f88-8d17-0e965d599e8f' alt="company logo" className="logo" />
      </div>
      <div className="full-image-container">
        <div className="full-image-overlay">
          <img src={image1} className="full-image" />
          {/* <img src='https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fshut.webp?alt=media&token=240f3c48-65e2-456e-ade5-3b14b47efc22' alt="stars" className="full-image" /> */}
        </div>
      </div>
      <div className="intro-video">
        <video controls width="640" height="360" poster={vi}>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-content">
        <img src="//unpkg.com/three-globe/example/img/night-sky.png" alt="star pic" className="bg-image" />
        {/* <div className="bgol"></div> */}
        {info.map((name, index) => (
          
         
          <DataCard key={index} name={name} link={data.link} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Home
