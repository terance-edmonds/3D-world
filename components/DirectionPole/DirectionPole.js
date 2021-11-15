import { useBox, useCylinder } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import * as THREE from 'three'

const DirectionPole = ({text="default", offset, rotation, extend = 0, boardArgs = [1.6, 0.6, 0.1], position, ...props}) => {

    return (
        <mesh rotation={rotation} {...props}>
            <Board offset={offset} rotation={rotation} text={text} extend={extend} args={boardArgs} position={[position[0] + ((boardArgs[0] + extend) / 2), 3.5, position[2]]} />
            <Pole rotation={rotation} position={position}/>

            <Stone args={[0.2, 0.2, 0.2]} position={[position[0] - 0.6, 0, position[2]]} />
            <Stone args={[0.3, 0.3, 0.3]} position={[position[0] + 0.2, -0, position[2] - 0.5]} />
            <Stone args={[0.1, 0.1, 0.1]} position={[position[0], -0, position[2] + 0.2]} />
        </mesh>
    )
}

function Stone({args, ...props}) {
    const [ref] = useBox(() => ({type: 'Static', args, ...props}))

    return (
        <mesh ref={ref} {...props} >
            <boxGeometry args={args}/>
            <meshPhysicalMaterial color="#F5F5F5"/>
        </mesh>
    )
    
}

function Pole({args = [0.1, 0.1, 3.8], ...props}) {

    const [ref] = useCylinder(() => ({type: 'Static', args, ...props}))

    return (
        <mesh ref={ref} {...props} >
            <cylinderGeometry args={args} />
            <meshPhysicalMaterial color="#9E7777" />
        </mesh>
    )
}

function Board({text, offset, extend, args, ...props}) {
    args = [args[0] + extend, args[1], args[2]]
    let textPostion = [-0.6, -0.1, 0]

    const [ref] = useBox(() => ({type: 'Static', args, ...props}))


    const font = useLoader(THREE.FontLoader, "/fonts/Roboto/Roboto Medium_Regular.json");
    const fontOps = {
        font,
        size: 0.25,
        height: 0.1,
        curveSegments: 12
    };

    textPostion = [textPostion[0] - offset , textPostion[1], textPostion[2]]

    return (
        <mesh ref={ref} {...props} >
            <mesh position={textPostion} >
                <textGeometry args={[text, fontOps]} />
                <meshPhysicalMaterial color="#F5F5F5"/>
            </mesh>
            <boxGeometry args={args} />
            <meshPhysicalMaterial color="#9E7777"/>
        </mesh>
    )
}

export default DirectionPole