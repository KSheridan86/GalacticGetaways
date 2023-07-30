import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const LazyThreeGlobe = React.memo(({ lat, long }) => {
  const globeRef = useRef(null);
  const controlsRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const issModelRef = useRef(null);

  useEffect(() => {
    
    
    const globeInstance = new ThreeGlobe().globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg');
    globeInstanceRef.current = globeInstance;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    
    if (globeRef.current) {
      globeRef.current.appendChild(renderer.domElement);
    }

    const scene = new THREE.Scene();
    scene.add(globeInstance);
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0c0c0c, 0.5);
    scene.add(hemisphereLight);
    
    scene.add(new THREE.AmbientLight(0xffffff)); 
    scene.add(new THREE.DirectionalLight(0xffffff, 0.9));

    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 500;

    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 0.5;
    tbControls.zoomSpeed = 2;
    controlsRef.current = tbControls;

    
    const loader = new OBJLoader();
    loader.load(
      '../models/iss.obj',
      (object) => {
        issModelRef.current = object;
        object.scale.set(0.3, 0.3, 0.3); 
        scene.add(object);
        console.log('ISS model loaded successfully!');
        updateISSPosition(lat, long);
      },
      
    );

    

    const handleScroll = event => {
      event.preventDefault();
      event.stopPropagation();
    };

    globeRef.current.addEventListener('wheel', handleScroll, { passive: false });

    const animate = () => {
      globeInstanceRef.current.rotateX(0.00002);
      globeInstanceRef.current.rotateY(0.00005);

      controlsRef.current.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      controlsRef.current.dispose();
      if (globeRef.current) {
        globeRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, []); 

  
  const updateISSPosition = (lat, long) => {
    if (issModelRef.current) {
      const rad = Math.PI / 180;
      const centerLat = 5.641073400806375;
      const centerLong = 0.06973907530181123;
      const x = 200 * Math.cos((lat - centerLat) * rad) * Math.cos((long - centerLong) * rad);
      const y = 200 * Math.sin((lat - centerLat) * rad);
      const z = 200 * Math.cos((lat - centerLat) * rad) * Math.sin((long - centerLong) * rad);
      issModelRef.current.position.set(x, y, z);
      issModelRef.current.rotation.y = -(long - centerLong) - Math.PI / 2;
    }
  };

  
  useEffect(() => {
    updateISSPosition(lat, long);
  }, [lat, long]);

  return <div ref={globeRef} />;
});

export default LazyThreeGlobe;
