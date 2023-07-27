import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const InteractiveGlobe = () => {
  const globeRef = useRef(null);
  const controlsRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const arcsDataRef = useRef([]);

  useEffect(() => {
    const N = 20;
    arcsDataRef.current = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['blue', 'pink', 'purple'][Math.floor(Math.random() * 3)],
    }));

    const colorScale = color => {
      if (color === 'blue') return '#4682B4';
      if (color === 'pink') return '#FF69B4';
      if (color === 'purple') return '#800080';
      return 'gray';
    };

    const globeInstance = new ThreeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      
      .arcsData(arcsDataRef.current)
      .arcColor(d => colorScale(d.color))
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000);

    globeInstanceRef.current = globeInstance;

    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    globeRef.current.appendChild(renderer.domElement);

    
    const scene = new THREE.Scene();
    scene.add(globeInstance);
    scene.add(new THREE.AmbientLight(0xcccccc));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

    
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 500;

    
    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 0.5; 
    tbControls.zoomSpeed = 0.8;
    controlsRef.current = tbControls;

    
    const animate = () => {
      
      const currentTime = Date.now();

      
      arcsDataRef.current = arcsDataRef.current.map(arc => ({
        ...arc,
        startLng: arc.startLng + Math.sin(currentTime * 0.001) * 0.1,
        endLng: arc.endLng + Math.cos(currentTime * 0.001) * 0.1,
      }));

      globeInstanceRef.current.arcsData(arcsDataRef.current);

      
      globeInstanceRef.current.rotateY(0.01); 

      controlsRef.current.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    
    return () => {
      
      renderer.dispose();
      controlsRef.current.dispose();
    };
  }, []);

  return <div ref={globeRef} style={{ width: '100%', height: '100vh' }} />;
};

export default InteractiveGlobe;
