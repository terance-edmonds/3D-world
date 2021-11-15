import { Debug } from "@react-three/cannon"
import Brick from "../../components/Brick/Brick"

export const Wall_RT = () => {
    return (
        <group>
            <Debug color="black" scale={1.1}>
                
            </Debug>
                <Brick position={[18.5, 0.5, 0.5]}  rotation={[0, 0, 0]} />
                <Brick position={[18, 1.1, 0.5]}  rotation={[0, 0, 0]} />
                <Brick position={[16.8, 0.5, 0.5]}  rotation={[0, 0, 0]} />

                <Brick position={[20, 0.5, 0.7]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 1.1]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.7, 1.5]}  rotation={[0, Math.PI / 2, 0]} />
                
                <Brick position={[20, 0.5, 2.4]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 2.7]}  rotation={[0, Math.PI / 2, 0]} />

                <Brick position={[20, 0.5, 4]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 4.3]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.7, 5]}  rotation={[0, Math.PI / 2, 0]} />

                <Brick position={[20, 0.5, 5.7]}  rotation={[0, Math.PI / 2, 0]} />
                <Brick position={[20, 1.1, 5.9]}  rotation={[0, Math.PI / 2, 0]} />
        </group>
    )
}