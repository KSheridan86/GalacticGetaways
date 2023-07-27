import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const InteractiveGlobe = () => {
  const globeRef = useRef(null);
  const controlsRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const arcsDataRef = useRef([]);

  // Create a separate ref for the marker
  const markerRef = useRef(null);

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
    tbControls.zoomSpeed = 0; // Disable zoom on scrolling
    controlsRef.current = tbControls;

    // Create the marker
    const markerGeometry = new THREE.PlaneGeometry(20, 20);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    scene.add(marker);

    markerRef.current = marker;

    const animate = () => {
      const currentTime = Date.now();

      arcsDataRef.current = arcsDataRef.current.map(arc => ({
        ...arc,
        startLng: arc.startLng + Math.sin(currentTime * 0.00005) * 0.0001,
        endLng: arc.endLng + Math.cos(currentTime * 0.00005) * 0.0001,
      }));

      globeInstanceRef.current.arcsData(arcsDataRef.current);

      // Update rotation along both X and Y axes
      globeInstanceRef.current.rotateX(0.0002);
      globeInstanceRef.current.rotateY(0.0005);

      // Update the marker position every few seconds
      const phi = (90 - 25) * (Math.PI / 180); // Example latitude
      const theta = (180 - 80) * (Math.PI / 180); // Example longitude
      const markerX = 500 * Math.sin(phi) * Math.cos(theta);
      const markerY = 500 * Math.cos(phi);
      const markerZ = 500 * Math.sin(phi) * Math.sin(theta);

      marker.position.set(markerX, markerY, markerZ);

      controlsRef.current.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleScroll = event => {
      event.preventDefault();
      event.stopPropagation();
    };

    globeRef.current.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      renderer.dispose();
      controlsRef.current.dispose();
      globeRef.current.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      ref={globeRef}
      style={{ width: '100%', height: '80vh', marginTop: '-100px', zIndex: '1' }}
    />
  );
};

export default InteractiveGlobe;
