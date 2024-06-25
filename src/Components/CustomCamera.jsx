import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

function CustomCamera({ position, lookAt, active }) {
  const { set, camera, gl, scene } = useThree();

  useEffect(() => {
    if (active) {
      camera.position.set(position.x, position.y, position.z);
      camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
      camera.updateProjectionMatrix();
      set({ camera }); // Update the active camera
      gl.render(scene, camera); // Re-render the scene with the active camera
    }
  }, [active, camera, position, lookAt, set, gl]);

  return null;
}

export default CustomCamera;
