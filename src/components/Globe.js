import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Globe from 'globe.gl';

const Glober = () => {
  useEffect(() => {
    fetch('../datasets/ne_110m_populated_places_simple.geojson')
      .then(res => res.json())
      .then(places => {
        const globe = Globe()
          .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
          .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
          .labelsData(places.features)
          .labelLat(d => d.properties.latitude)
          .labelLng(d => d.properties.longitude)
          .labelText(d => d.properties.name)
          .labelSize(d => Math.sqrt(d.properties.pop_max) * 4e-4)
          .labelDotRadius(d => Math.sqrt(d.properties.pop_max) * 4e-4)
          .labelColor(() => 'rgba(255, 165, 0, 0.75)')
          .labelResolution(2);

        const container = document.getElementById('globeViz');
        if (container) {
          globe(container);
        }
      });
  }, []);

  return (
    <div>
      <div id="globeViz" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Glober;
