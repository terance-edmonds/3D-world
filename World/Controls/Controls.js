import { Debug } from "@react-three/cannon"
import ArrowKey from "../../components/ArrowKey/ArrowKey"
import PlainText from "../../components/PlainText/PlainText"
import Label from "../Label/Label"

export const Controls = ({...props}) => {
   
    return(
        <mesh {...props}>
            <Debug color="black" scale={1.1}>
            </Debug>
                <ArrowKey position={[-10, 0.5, 6.8]} />
                <ArrowKey rotation={[0, Math.PI / 2, 0]} position={[-11.5, 0.5, 8]} />
                <ArrowKey rotation={[0, -Math.PI / 2, 0]} position={[-8.5, 0.5, 8]} />
                <ArrowKey rotation={[0, Math.PI, 0]} position={[-10, 0.5, 8]} />
                <PlainText position={[-7, -0.1, 7]} text="USE YOUR KEYS" />
                <PlainText position={[-7, -0.1, 8]} text="TO MOVE AROUND" />

                <mesh position={[-11, -0.2, 11]} >
                    <Label 
                        position={[0.2, 0, 0]} 
                        text="SHIFT" 
                        label="BOOST"
                        textPosition={[0.2, 0.3, 0]} 
                        fontSize={0.5}  
                        sizeX={1.5} 
                        sizeY={1}
                        width={0.05} 
                        />
                    <Label 
                        position={[0, 0, 1.5]} 
                        text="SPACE" 
                        label="BRAKE"
                        textPosition={[0.2, 0.3, 0]} 
                        fontSize={0.5}  
                        sizeX={1.7} 
                        sizeY={1}
                        width={0.05} 
                        />
                </mesh>
        </mesh>
    )
}