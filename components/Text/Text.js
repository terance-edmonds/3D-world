import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

function Text({ text, size, height, args = [0.8, 1, 0.6], ...props }) {

    const [ref] = useBox(() => ({ mass: 0.1, args, ...props }))
  
    const font = useLoader(THREE.FontLoader, "/fonts/Roboto_Condensed/Roboto Condensed_Bold.json");
    const fontOps = {
        font,
        size: size || 1,
        height: height || 0.3,
        curveSegments: 12
    };
  
    return (
        <mesh ref={ref}>
          <mesh position={[-(args[0] / 2), -(args[1] / 2), -(args[2] / 2)]} >
            <textGeometry args={[text, fontOps]} />
            <meshPhysicalMaterial color="#FFFFFF"  />
          </mesh>
        </mesh>
    )
}

export default Text