import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

// Lazy load the ThreeGlobe component
const LazyThreeGlobe = React.lazy(() => import('./LazyThreeGlobe'));

const InteractiveGlobe = () => {
  // State to track whether the globe is loaded
  const [globeLoaded, setGlobeLoaded] = useState(false);

  useEffect(() => {
    // Simulate some async task like loading data or resources
    setTimeout(() => {
      setGlobeLoaded(true);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    <div style={{ width: '100%', height: '80vh', marginTop: '-100px', zIndex: '1' }}>
    
      {!globeLoaded ? (
        <div style={{ width: '100%', height: '100%' }}>
         <img src="https://i.ibb.co/WHwvpRn/Screenshot-2023-07-28-at-13-26-27.png" alt="loading..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (

        <React.Suspense fallback={null}>
          <LazyThreeGlobe />
        </React.Suspense>
      )}
    </div>
  );
};

export default InteractiveGlobe;
