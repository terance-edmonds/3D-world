import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

const PlainText = ({text, size, ...props}) => {
    const font = useLoader(THREE.FontLoader, "/fonts/Alumni_Sans/Alumni Sans_Bold.json");
    const fontOps = {
        font,
        size: size || 0.6,
        height: 0,
        curveSegments: 12
    };

    return (
        <mesh rotation={[ - Math.PI / 2, 0, 0]} {...props} >
            <textGeometry args={[text, fontOps]}  />
            <meshPhysicalMaterial color="#F5F5F5"  />
        </mesh>
    )
}

export default PlainText;