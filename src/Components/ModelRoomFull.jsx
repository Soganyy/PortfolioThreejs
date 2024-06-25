import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import CustomCamera from "./CustomCamera";
import ModelGltf from "./ModelGltf";

function ModelRoomFull() {
  const [activeCamera, setActiveCamera] = useState("camera1");

  const toggleCamera = () => {
    setActiveCamera(activeCamera === "camera1" ? "camera2" : "camera1");
  };
  return (
    <div>
      <button onClick={toggleCamera}>Toggle Camera</button>
      <Canvas
        style={{
          height: window.innerHeight - (window.innerHeight * 3) / 100,
          backgroundColor: "#724D37",
        }}
      >
        // Camera
        <CustomCamera
          position={{ x: 0, y: 4, z: 2 }}
          lookAt={{ x: 1, y: 1, z: 5 }}
          active={activeCamera === 'camera1'}
        />
        <CustomCamera
          position={{ x: 0, y: 7, z: 2 }}
          lookAt={{ x: 1, y: 1, z: 5 }}
          active={activeCamera === 'camera2'}
        />
        // Lighting
        {/* <Box scale={[0.1, 0.1, 0.1]} position={[-4, 2, -4]} /> */}
        <spotLight
          position={[0, 5, 0]}
          angle={2}
          penumbra={1}
          intensity={10}
          castShadow={1}
          color="#EADBC8"
        />
        <spotLight
          direction={[]}
          position={[4, 2, -4]}
          angle={1}
          penumbra={1}
          intensity={10}
          castShadow={1}
          color="#874CCC"
        />
        <spotLight
          position={[-4, 2, -4]}
          angle={1}
          penumbra={1}
          intensity={20}
          castShadow={1}
          color="#874CCC"
        />
        <Suspense fallback={null}>
          <ModelGltf
            url="/models/Room1.glb"
            scale={[1, 1, 1]}
            position={[0, -0.5, 0]}
            rotation={[0, 0, 0]}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelRoomFull;
