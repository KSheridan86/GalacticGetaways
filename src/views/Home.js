import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import DataCard from '../components/DataCard'
import vi from '../media/plvid.png'
import vid from '../media/ggvid1.mp4'

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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fgg312.webp?alt=media&token=4cfb3dc6-eaf0-4f88-8d17-0e965d599e8f"
          alt="company logo"
          className="logo"
        />
      </div>
      <div className="full-image-container">
        <div className="full-image-overlay">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fshut.webp?alt=media&token=240f3c48-65e2-456e-ade5-3b14b47efc22"
            alt="stars"
            className="full-image"
          />
        </div>
      </div>
      <div className="intro-video">
        <video controls width="640" height="360" poster="https://i.ibb.co/r52fKxd/plvid-1.webp">
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-content">
        <img
          src="https://i.ibb.co/swY2MTr/night-sky.webp"
          alt="night-sky"
          className="bg-image"
        />
        {/* <div className="bgol"></div> */}
        {info.map((name, index) => (
          <DataCard key={index} name={name} link={data.link} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Home
