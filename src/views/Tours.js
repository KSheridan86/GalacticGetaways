import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import '../App.css'
// import MapContainer from '../components/MapContainer'
import logo from '../media/gg312.png'
import spaceStationIcon from '../media/space-station.png'

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
  

  return (
    <div className="tours-container">
      <div className="logo-container">
        <img src={logo} alt="company logo" className="logo" />
      </div>
      <div className="star-image outer-container">
        <div className="outer-map">
          <div ref={mapContainerRef} id="map-container" />
        </div>

        <div className="glass-box" id="box">
          <div className="tours-info-box">
          { issData ? 
          <div>
            <h2 className="nasa con-link">International Space Station</h2>
            <div>Step into the shoes of astronauts and witness Earth from the vantage point of the 
              ISS as it orbits our planet at incredible speeds. 
              <hr />
              Brace yourself for an awe-inspiring adventure, 
              watch breathtaking sunrises and sunsets from space, and observe captivating views of our 
              beautiful blue planet from above.
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
            
          </div>: 
          <div>
            <h2 className="data-title">International Space Station</h2>
            <div>Step into the shoes of astronauts and witness Earth from the vantage point of the 
              ISS as it orbits our planet at incredible speeds. 
              <hr />
              Brace yourself for an awe-inspiring adventure, 
              watch breathtaking sunrises and sunsets from space, and observe captivating views of our 
              beautiful blue planet from above.
              <hr />
            </div>
            <p>Loading Data......</p>
          </div> }

            {/* <MapContainer lat={issData.latitude} long={issData.longitude} /> */}
          </div>
      
          
        </div>
        <Link to="/contact">
          <button className="btn-spacing"> Book Your Tour</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Tours
