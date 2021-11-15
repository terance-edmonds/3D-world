import { Debug } from "@react-three/cannon"
import Text from "../../components/Text/Text"

export const Name = () => {
    return(
    <group>
        <Debug color="black" scale={1.1}>

        </Debug>
        <Text text="T" height={0.9} size={2} args={[1.5, 2, 1]} position={[-13, 1, -6]} />
        <Text text="E" height={0.9} size={2} args={[1.45, 2, 1]} position={[-11.2, 1, -6]} />
        <Text text="R" height={0.9} size={2} args={[1.5, 2, 1]} position={[-9.4, 1, -6]} />
        <Text text="A" height={0.9} size={2} args={[1.6, 2, 1]} position={[-7.5, 1, -6]} />
        <Text text="N" height={0.9} size={2} args={[1.6, 2, 1]} position={[-5.5, 1, -6]} />
        <Text text="C" height={0.9} size={2} args={[1.6, 2, 1]} position={[-3.6, 1, -6]} />
        <Text text="E" height={0.9} size={2} args={[1.5, 2, 1]} position={[-1.7, 1, -6]} />

        <Text text="E" height={0.9} size={2} args={[1.45, 2, 1]} position={[2, 1, -6]}  />
        <Text text="D" height={0.9} size={2} args={[1.55, 2, 1]} position={[3.8, 1, -6]}  />
        <Text text="M" height={0.9} size={2} args={[2, 2, 1]} position={[5.9, 1, -6]}  />
        <Text text="O" height={0.9} size={2} args={[1.6, 2, 1]} position={[8, 1, -6]}  />
        <Text text="N" height={0.9} size={2} args={[1.6, 2, 1]} position={[9.9, 1, -6]} />
        <Text text="D" height={0.9} size={2} args={[1.55, 2, 1]} position={[11.8, 1, -6]} />
        <Text text="S" height={0.9} size={2} args={[1.6, 2, 1]} position={[13.7, 1, -6]} />
    </group>
    )
}