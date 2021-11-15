import { Debug } from "@react-three/cannon"
import Text from "../../components/Text/Text"

export const World = () => {
    return (
        <group>
            <Debug color="black" scale={1.1}>
            </Debug>
                <Text size={0.9} text="3D World" args={[4.2, 1, 0.4]}  position={[0.6, 0.5, -3]} />
        </group>
    )
}