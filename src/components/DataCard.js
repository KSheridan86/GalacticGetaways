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

const images = [
  // { id: 1, src: image1, alt: 'Image 1', location: 'section1' },
  { id: 1, src: image1, alt: 'Image 1', location: 'section2' },
  
  { id: 2, src: image7, alt: 'Image 2', location: 'section1' },
  { id: 3, src: image3, alt: 'Image 3', location: 'section1' },
  { id: 6, src: image6, alt: 'Image 6', location: 'section1' },
  { id: 9, src: image9, alt: 'Image 9', location: 'section1' },
  { id: 11, src: image11, alt: 'Image 11', location: 'section1' },
  { id: 7, src: image2, alt: 'Image 7', location: 'section1' },
  { id: 8, src: image8, alt: 'Image 8', location: 'section2' },
  { id: 5, src: image5, alt: 'Image 5', location: 'section2' },
  { id: 9, src: image9, alt: 'Image 9', location: 'section1' },
  { id: 10, src: image5, alt: 'Image 10', location: 'section2' },
  { id: 4, src: image6, alt: 'Image 4', location: 'section1' },
]

const DataCard = ({ data, link, index, name }) => {
  return (
    <div className="data-card">
      <img
        src={images[index].src}
        alt={images[index].alt}
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
