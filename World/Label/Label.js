import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";

const Intro = ({text = "default", label, labelPosition, textPosition=[1, 0.7, 0], fontSize = 0.4, sizeX = 3.5, sizeY = 1.7, width = 0.2, position, ...props}) => {
    
    let shape = new THREE.Shape([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(sizeX, 0),
      new THREE.Vector2(sizeX, sizeY),
      new THREE.Vector2(0, sizeY)
    ]);
    
    let hole = new THREE.Path([
      new THREE.Vector2(width, width),
      new THREE.Vector2(width, sizeY - width),
      new THREE.Vector2(sizeX - width, sizeY - width),
      new THREE.Vector2(sizeX - width, width)
    ]);

    shape.holes.push(hole);

    const font = useLoader(THREE.FontLoader, "/fonts/Alumni_Sans/Alumni Sans_Bold.json");
    const fontOps = {
        font,
        size: fontSize,
        height: 0,
        curveSegments: 12
    };

    return (
        <mesh rotation={[ - Math.PI / 2, 0, 0]} position={position} {...props} >
            <mesh position={textPosition} >
              <textGeometry args={[text, fontOps]}  />
              <meshPhysicalMaterial color="#F5F5F5" />
            </mesh>
            {
              label ? 
              <mesh position={[ sizeX + 0.5 ,textPosition[1], 0]} >
                <textGeometry args={[label, fontOps]}  />
                <meshPhysicalMaterial color="#F5F5F5" />
              </mesh> : null
            }
            <shapeBufferGeometry args={shape} />
            <meshPhysicalMaterial color="#F5F5F5" />
        </mesh>
    )
}

export default Intro;