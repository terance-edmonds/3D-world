import { Debug } from "@react-three/cannon"
import Brick from "../../components/Brick/Brick"

export const Wall_LB = () => {
    return (
        <group>
            <Debug color="black" scale={1.1}>
                
            </Debug>
                <Brick position={[-20, 0.5, 14.8]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[-20, 1.1, 15]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[-20, 1.7, 15]}  rotation={[0, Math.PI / 2, 0]} />
                
                <Brick position={[-20, 0.5, 16.4]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[-20, 1.1, 16.6]}  rotation={[0, Math.PI / 2, 0]} />
                
                <Brick position={[-20, 0.5, 18]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[-20, 1.1, 18.3]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[-20, 1.7, 17.6]}  rotation={[0, Math.PI / 2, 0]} />
        </group>
    )
}