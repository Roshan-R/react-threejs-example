// import React from "react";
import React, { Suspense, useRef, useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import Model from './Logo.jsx'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'


import "./styles.css";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 50;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

export default function App() {
  return (
    <div className="App">
      <Canvas style={{ background: "#171717" }} camera={{ fov: 15, position: [6, 22, 18], rotation: [-0.7, 0.1, 0.1] }} >
        <CameraController />
        <ambientLight intensity={0.75} />
        <directionalLight intensity={0.25} position={[30, 100, 100]} />
        <directionalLight intensity={0.25} position={[-30, 100, -100]} />
        <Suspense fallback={null}>
          {/* <ScrollControls pages={5}> */}
          <Model />
          {/* </ScrollControls> */}

        </Suspense>
      </Canvas>
    </div>)
};

