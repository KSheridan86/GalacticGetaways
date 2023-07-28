// LazyThreeGlobe.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const LazyThreeGlobe = () => {
  const globeRef = useRef(null);
  const controlsRef = useRef(null);
  const globeInstanceRef = useRef(null);

  useEffect(() => {
    const globeInstance = new ThreeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg');

    globeInstanceRef.current = globeInstance;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer's DOM element to the globeRef
    if (globeRef.current) {
      globeRef.current.appendChild(renderer.domElement);
    }

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
    tbControls.zoomSpeed = 2;
    controlsRef.current = tbControls;

    const animate = () => {
      globeInstanceRef.current.rotateX(0.0002);
      globeInstanceRef.current.rotateY(0.0005);

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
     
    };
  }, []);

  return <div ref={globeRef} />;
};

export default LazyThreeGlobe;
