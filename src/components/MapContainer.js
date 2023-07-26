import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '5px',
  margin: '10px 0',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.5)'
};



const MapContainer = ({ lat, long }) => {
    const center = {
        lat: lat,
        lng: long, 
      };
  return (
    <LoadScript  googleMapsApiKey="AIzaSyBQlC4UabIeuKI4239cckHSqh5wouPW248">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
        <Marker position={{ lat: lat, lng: long }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
