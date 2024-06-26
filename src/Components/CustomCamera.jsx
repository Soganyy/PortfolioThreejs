import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

function CustomCamera({ position, lookAt, active, transitionDuration = 2 }) {
  const { set, camera, gl, scene } = useThree();
  const lookAtTarget = useRef(new THREE.Vector3(...lookAt));

  useEffect(() => {
    if (active) {
      const newPosition = new THREE.Vector3(...position);
      
      // Animate the camera position
      gsap.to(camera.position, {
        x: newPosition.x,
        y: newPosition.y,
        z: newPosition.z,
        duration: transitionDuration,
        onUpdate: () => {
          // Update the lookAt target position
          lookAtTarget.current.lerp(new THREE.Vector3(...lookAt), 0.1);
          
          // Update camera lookAt direction
          camera.lookAt(lookAtTarget.current);
          camera.updateProjectionMatrix();
          
          // Render the scene (you may need to access the renderer and scene from context)
          // gl.render(scene, camera);
        },
        onComplete: () => {
          // Set the active camera after the animation
          set({ camera });
          gl.render(scene, camera);
        }
      });
    }
  }, [active, position, lookAt, camera, set, gl, scene, transitionDuration]);

  return null;
}

export default CustomCamera;
