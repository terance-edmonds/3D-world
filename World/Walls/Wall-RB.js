import { Debug } from "@react-three/cannon"
import Brick from "../../components/Brick/Brick"

export const Wall_RB = () => {
    return (
        <group>
            <Debug color="black" scale={1.1}>
                
            </Debug>
                <Brick position={[20, 0.5, 16.8]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 17]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.7, 17]}  rotation={[0, Math.PI / 2, 0]} />
                
                <Brick position={[20, 0.5, 18.4]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 18.6]}  rotation={[0, Math.PI / 2, 0]} />
                
                <Brick position={[20, 0.5, 20]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 20.3]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.7, 19.6]}  rotation={[0, Math.PI / 2, 0]} />
        </group>
    )
}