import React from "react";
import { useGLTF } from "@react-three/drei";

function ModelGltf({ url, scale, position, rotation }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export default ModelGltf;
