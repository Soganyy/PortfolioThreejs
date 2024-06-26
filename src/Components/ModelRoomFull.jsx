import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CustomCamera from "./CustomCamera";
import ModelGltf from "./ModelGltf";

function ModelRoomFull() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollTop < 200
        ? setScrollPosition(0)
        : scrollTop < 400
        ? setScrollPosition(3)
        : setScrollPosition(6);
    };

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate lookAt position based on mouse position
  const lookAtX = (mousePosition.x / window.innerWidth - 0.5) * 2;
  const lookAtY = -(mousePosition.y / window.innerHeight - 0.5) * 2;

  return (
    <Canvas
      style={{
        position: "fixed",
        zIndex: "-1",
        width: window.innerWidth - (window.innerWidth * 1) / 100,
        height: window.innerHeight - (window.innerHeight * 3) / 100,
        backgroundColor: "#2E2521",
      }}
    >
      <CustomCamera
        position={[0, 3, scrollPosition]}
        lookAt={[lookAtX, 3 + lookAtY, -4]}
        active={"camera1"}
      />
      <spotLight
        position={[0, 10, 0]}
        angle={1}
        penumbra={1}
        intensity={200}
        castShadow={1}
        color="#EADBC8"
      />
      <spotLight
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
          position={[0, -0.5, 3]}
          rotation={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
}

export default ModelRoomFull;
