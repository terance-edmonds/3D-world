import * as THREE from 'three';
import { PerspectiveCamera } from "@react-three/drei"
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Camera({chassis, light}) {
    const camera = useRef()

    let currentPosition = new THREE.Vector3()
    let currentLookat = new THREE.Vector3()

    useFrame(async () => {
      if(chassis.current){
        let position = new THREE.Vector3(chassis.current.position.x, 0.6998926212452083, chassis.current.position.z)
        let idealOffSet = CalculateIdealOffset(position)
        let idealLookAt = CalculateIdealLookAt(position)
        
        currentPosition.copy(idealOffSet)
        currentLookat.copy(idealLookAt)

        if(light){
          light.current.target = chassis.current
          //light.current.position.set(currentPosition)
        }
        
        camera.current.position.copy(currentPosition)
        camera.current.lookAt(currentLookat)
        camera.current.updateProjectionMatrix()
      }
    })
    

    const CalculateIdealOffset = (position) => {
      let idealOffSet = new THREE.Vector3(4, 10, 14)
      idealOffSet.add(position)
      return idealOffSet
    }
    
    const CalculateIdealLookAt = (position) => {
      let idealLookAt = new THREE.Vector3(0, 0, 0)

      idealLookAt.add(position)
      return idealLookAt
    }

    return (
        <PerspectiveCamera 
            ref={camera} 
            makeDefault 
            position={[4, 0.7, 12]}
            fov={60}
            aspect={1920 / 1080}
            near={1.0}
            far={1000.0}
            />
    );
}
