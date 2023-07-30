import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';


const LazyThreeGlobe = React.lazy(() => import('./LazyThreeGlobe'));

const InteractiveGlobe = ({long, lat}) => {
 
  const [globeLoaded, setGlobeLoaded] = useState(false);

  useEffect(() => {
   
    setTimeout(() => {
      setGlobeLoaded(true);
    }, 2000); 
  }, []);

  return (
    <div style={{ width: '100%', height: '80vh', marginTop: '-100px', zIndex: '1' }}>
    
      {!globeLoaded ? (
        <div style={{ width: '100%', height: '100%' }}>
         <img src="https://i.ibb.co/WHwvpRn/Screenshot-2023-07-28-at-13-26-27.png" alt="loading..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (

        <React.Suspense fallback={null}>
          <LazyThreeGlobe long={long} lat={lat} />
        </React.Suspense>
      )}
    </div>
  );
};

export default InteractiveGlobe;
