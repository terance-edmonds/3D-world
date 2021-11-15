import { usePlane } from "@react-three/cannon"
import { Plane } from "@react-three/drei"

export default function Floor(props) {
    const [ref] = usePlane(() => ({ mass: 0, type: 'Static', material: "ground" , ...props }))

    return (
        <Plane args={[0, 0]} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
          <meshPhysicalMaterial attach="material" color="#F29191" />
        </Plane>
    )
}