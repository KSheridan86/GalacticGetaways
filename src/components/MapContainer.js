
import React, { useState, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';

const MapContainer = () => {
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const mapStyles = {
    height: '200px',
    width: 'calc(400px - 10vh)',
    borderRadius: '5px',
    boxShadow: ' 4px 4px 10px rgba(0,0,0,0.6)', 
    marginTop: '20px' 
  };

  const center = {
    lat: 28.57422,
    lng: -80.5556,
  };

  // Your custom map style JSON
  const customMapStyle = [
   

    // Paste the JSON representation of your custom map style here
    // Example: { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] }
  ];

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBm894ESaPOe_4itvb3d87zhEzMUVQn9x8&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.onload = () => setIsApiLoaded(true);
    // googleMapScript.onload = initializeMap;
    document.body.appendChild(googleMapScript);

    return () => {
      document.body.removeChild(googleMapScript);
    };
  }, []);

  const initializeMap = () => {
    if (!isApiLoaded) return;
    // Now that the Google Maps API is loaded, you can create the map
    new window.google.maps.Map(document.getElementById('map'), {
      center: center,
      referrerpolicy: "no-referrer-when-downgrade",
      zoom: 10,
      options: {
        mapId: 'c115b3afa6cb63f6', 
      },
    });
  };
  useEffect(() => {
    initializeMap();
  }, [isApiLoaded]);


  return <div id="map" style={mapStyles}></div>;
};

export default MapContainer;
