import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
// import ThreeGlobe from 'three-globe';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import logo from '../media/gg312.png'
import spaceStationIcon from '../media/space-station.png'


import InteractiveGlobe from '../components/InteractiveGlobe'
// import Glober from '../components/Globe'

const Tours = () => {
  const mapContainerRef = useRef(null)
  const [issData, setIssData] = useState({})
  const [speed, setSpeed] = useState(0)
  const [altitude, setAltitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    if (!mapContainerRef.current) return
    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false,
    }).setView([0, 0], 2)
    const accessToken =
      'pk.eyJ1Ijoia2Vuc2hlcmlkYW4iLCJhIjoiY2xrMzVzOWV2MGhuZDNtb3l6d3NsbXZ2NiJ9.Vpu3VEdqd0SXcsk7FrrDMA'

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors',
        maxZoom: 24,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(map)

    const markerIcon = L.icon({
      iconUrl: spaceStationIcon,
      iconSize: [30, 30],
      iconAnchor: [10, 25],
    })

    const marker = L.marker(map.getCenter(), { icon: markerIcon }).addTo(map)

    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          'https://api.wheretheiss.at/v1/satellites/25544'
        )
        const data = await response.json()
        setIssData(data)
        setAltitude(data.altitude)
        setSpeed(data.velocity)
        setLatitude(data.latitude)
        setLongitude(data.longitude)
        const { latitude, longitude } = data
        const latLng = L.latLng(latitude, longitude)
        map.panTo(latLng)
        marker.setLatLng(map.getCenter())
      console.log(data)
      } catch (error) {
        console.error('Error fetching coordinates:', error)
      }
    }

    fetchCoordinates()
    const intervalId = setInterval(fetchCoordinates, 1000)

    return () => {
      clearInterval(intervalId)
      map.remove()
      
    }
  }, [])


  console.log(issData)
  const tourData = [
    {
      title: 'ISS Experience Tour',
      name: 'ISS',
      id: 'basic',
      description:
        "Embark on a once-in-a-lifetime journey to the International Space Station (ISS), orbiting high above Earth. Join a select group of adventurous travelers as you experience life as an astronaut. Launch aboard a state-of-the-art spacecraft and rendezvous with the ISS, where you'll spend several days in microgravity, floating effortlessly through the space station's modules. Witness breathtaking views of our planet from orbit and participate in scientific experiments under the guidance of seasoned astronauts. This awe-inspiring tour will redefine your perspective on Earth and humanity's place in the cosmos.",
    },
    {
      title: 'Earth Orbit Odyssey',
      name: "Earth Orbit",
      id: 'earth-orbit',
      description:
        "Buckle up for an unforgettable adventure as you venture into the cosmos on our Earth Orbit Odyssey tour. Leave the bounds of gravity behind and soar into space aboard our cutting-edge space vessel. Once in orbit around Earth, you'll witness the incredible curvature of our planet and gaze upon awe-inspiring landscapes from above. Experience weightlessness as you float freely within the spacecraft, capturing incredible photographs and memories to cherish forever. This thrilling journey is the perfect choice for those seeking a taste of space travel without leaving the safety of Earth's orbit.",
    },
    {
      title: 'Moon Landing Expedition',
      name: "Moon Landing",
      id: 'moon-landing',
      description:
        "Join Galactic Getaways on an extraordinary voyage to the Moon, following in the footsteps of legendary astronauts. This epic expedition begins with a majestic launch from Earth and a journey across the vastness of space. Touch down on the lunar surface and feel the lunar regolith beneath your feet. Marvel at the stark beauty of the Moon's landscape and take in the breathtaking Earthrise. Participate in simulated moonwalks, plant the Galactic Getaways flag, and create memories that will be etched into history. The Moon Landing Expedition is the ultimate adventure for space enthusiasts and history buffs alike.",
    },
    {
      title: 'Deluxe Celestial Sojourn',
      name: "Deluxe",
      id: 'deluxe',
      description:
        "Indulge in the height of luxury and exploration with our Deluxe Celestial Sojourn. Experience a carefully crafted itinerary that combines the best of space travel. Begin your odyssey with an immersive Earth Orbit experience, witnessing the beauty of our planet from space. Next, journey to the Moon, walking in the footsteps of astronauts who made history. Cap off your adventure with a rendezvous at the International Space Station, where you'll live like an astronaut, conducting experiments and enjoying the thrill of space living. Throughout this all-inclusive tour, enjoy the finest accommodations, gourmet space cuisine, and expert guidance from seasoned astronauts.",
    },
    {
      title: 'All-in-One Galactic Adventure',
      name: "All-in-One",
      id: 'all-in-one',
      description:
        "Experience the complete spectrum of space travel with our All-in-One Galactic Adventure. This comprehensive tour allows you to embark on each of our signature journeys in one incredible package. Start by orbiting Earth, witnessing its majesty from afar. Continue with a thrilling Moon Landing Expedition, stepping foot on the lunar surface. Finally, cap off your adventure with an extended stay at the International Space Station, where you'll gain unique insights into life in space. This all-inclusive odyssey is designed for the most daring and adventurous souls, offering a seamless and unforgettable experience of the cosmos.",
    },
  ]

  return (
    <div className="tours-container">
      <div className="logo-container">
        <img src={logo} alt="company logo" className="logo" />
      </div>
      <div className="tour-menu">
      <li className="navbar-dropdown tour-pack">
          <a classname="drop-tour" href="#" className=" drop-arrow">
            Tour Packages <HiChevronDown />
          </a>
          <ul className="dropdown-menu tour-list">
            <li className="drop-item">
              <a href="/tours#basic">Basic</a>
            </li>
            <li className="drop-item">
              <a href="/tours#earth-orbit">Earth Orbit</a>
            </li>
            <li className="drop-item">
              <a href="/tours#moon-landing">Moon Landing</a>
            </li>
            <li className="drop-item">
              <a href="/tours#deluxe">Deluxe</a>
            </li>
            <li className="drop-item">
              <a href="/tours#all-in-one">All in One</a>
            </li>
          </ul>
        </li>
        
      </div>
     <InteractiveGlobe lat={issData.latitude} long={issData.longitude} />
      <div className="star-image outer-container ">
        <div className="glass-box" id="box">
          <div className="tours-info-box">
            {issData ? (
              <div>
                <h2 className="nasa con-link">International Space Station</h2>
                <div>
                  Step into the shoes of astronauts and witness Earth from the
                  vantage point of the ISS as it orbits our planet at incredible
                  speeds.
                  <hr />
                  Brace yourself for an awe-inspiring adventure, watch
                  breathtaking sunrises and sunsets from space, and observe
                  captivating views of our beautiful blue planet from above.
                  <hr />
                </div>

                <p>Current status of the space station:</p>
                <div className="nasa">Altitude: </div>
                <div> {altitude.toFixed(2)} Km</div>
                <br />
                <div className="nasa">Ground Speed: </div>
                <div>{speed.toFixed(2)} Km/h</div>
                <br />
                <div className="nasa">Latitude: </div>
                <div>{latitude}</div>
                <br />
                <div className="nasa">Longitude: </div>
                <div>{longitude}</div>
              </div>
            ) : (
              <div>
                <h2 className="data-title">International Space Station</h2>
                <div>
                  Step into the shoes of astronauts and witness Earth from the
                  vantage point of the ISS as it orbits our planet at incredible
                  speeds.
                  <hr />
                  Brace yourself for an awe-inspiring adventure, watch
                  breathtaking sunrises and sunsets from space, and observe
                  captivating views of our beautiful blue planet from above.
                  <hr />
                </div>
                <p>Loading Data......</p>
              </div>
            )}

            {/* <MapContainer lat={issData.latitude} long={issData.longitude} /> */}
          </div>
        </div>
        <div className='tour-packages'>
          <h1>Choose the right tour for you:</h1>
          {tourData.map((tour, index) => (
            <div className='packages' id={tour.id} key={index}>
              <h2>{tour.title}</h2>
              <p>{tour.description}</p>
              <Link to="/contact">
                <button className="package-btn">
                  Request {tour.name} Info
                </button></Link> 
            </div>
          ))}
          <p className='tour-cont'>
            Embark on the space tour that suits your dreams and aspirations with
            Galactic Getaways, where we make the cosmos accessible and
            unforgettable for all space enthusiasts.
          </p>{' '}
        </div>
        <Link to="/contact">
          <button className="btn-spacing"> Book Your Tour</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Tours
