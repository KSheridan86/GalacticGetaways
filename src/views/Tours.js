import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import spaceStationIcon from '../images/space-station.png';

const Tours = () => {
    const mapContainerRef = useRef(null);
    const [issData, setIssData] = useState({});

    useEffect(() => {
        if (!mapContainerRef.current) return;
        const map = L.map(
            mapContainerRef.current, 
            {zoomControl: false, attributionControl: false,}
            ).setView([0, 0], 18);
        const accessToken = 'pk.eyJ1Ijoia2Vuc2hlcmlkYW4iLCJhIjoiY2xrMzVzOWV2MGhuZDNtb3l6d3NsbXZ2NiJ9.Vpu3VEdqd0SXcsk7FrrDMA'; // Replace with your Mapbox access token

        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors',
            maxZoom: 24,
            id: 'mapbox/satellite-v9', // Replace with your desired map style
            tileSize: 512,
            zoomOffset: -1
            }).addTo(map);

        const markerIcon = L.icon({
            iconUrl: spaceStationIcon,
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        });

        const marker = L.marker(map.getCenter(), { icon: markerIcon }).addTo(map);

        const fetchCoordinates = async () => {
        try {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            setIssData(data);
            const { latitude, longitude } = data;
            const latLng = L.latLng(latitude, longitude);
            map.panTo(latLng);
            marker.setLatLng(map.getCenter());
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
        };

        fetchCoordinates();
        const intervalId = setInterval(fetchCoordinates, 1500000);

        return () => {
        clearInterval(intervalId);
        map.remove();
        };
    }, []);

    return (
        <div className="outer-container">
            <div id="box">
                <div ref={mapContainerRef} id="map-container" />
                <div>
                {Object.entries(issData).map(([key, value]) => (
                    <p key={key}>
                    {key}: {value}
                    </p>
                ))}
                </div>
            </div>
        </div>
    );
    };

    export default Tours;