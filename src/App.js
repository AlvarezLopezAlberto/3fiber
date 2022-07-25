import { Canvas, useFrame } from '@react-three/fiber';
import {PresentationControls} from '@react-three/drei'
import React, { Suspense } from 'react';
import Room from './assets/Room';
import Wifi from './assets/Wifi'
import Lights from './assets/Lights';

function WifiAnimation() {
  const mesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.y = a;
  });

  return (
    <mesh ref={mesh}>
      <Wifi scale={[0.25,0.25,0.25]} rotation={[0,Math.PI/2,0]} position={[0,2,0]}/>
    </mesh>
  );
}


function App() {
  return (
    <div
    className='Container'
    style={{width: "100%", height:"100vh"}}>
      <Canvas flat camera={{fov:35, position:[6,4,10]}}>
      <PresentationControls global cursor={false}  polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <Lights/>
          <Suspense fallback={null}>
            <Room scale={[0.25,0.25,0.25]} rotation={[0,Math.PI/2,0]} position={[-0.2,-1,0]}/>
            <WifiAnimation position={[1,0,0]}/>
          </Suspense>
          </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
