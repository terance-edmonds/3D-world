import { useBox } from '@react-three/cannon';
import { Box } from '@react-three/drei';

function Brick({ text, size, height, args = [1.5, 0.6, 1], ...props }) {

    const [ref] = useBox(() => ({ mass: 0.1, args, ...props }))
  
    return (
        <mesh ref={ref}>
            <Box args={args} radius={0.1} smoothness={4} >
                <meshPhysicalMaterial color="#FFFFFF"  />
            </Box>
        </mesh>
    )
}

export default Brick