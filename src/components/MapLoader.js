import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // Code to create and display the map
    const mapOptions = {
      center: { lat: 37.4220656, lng: -122.0840897 },
      zoom: 10,
    };
    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
