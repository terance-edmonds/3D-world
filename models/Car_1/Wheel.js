/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCylinder } from '@react-three/cannon'

const Wheel = forwardRef(({ radius = 0.7, leftSide, ...props }, ref) => {

  const { nodes, materials } = useGLTF('/models/Car/wheel.glb')
  useCylinder(() => ({ mass: 1, type: 'Kinematic', material: 'wheel', collisionFilterGroup: 0, args: [radius, radius, 0.7, 16], ...props }), ref)

  return (
    <group ref={ref} >
      <group rotation={[ 0, 0, ((leftSide ? 1 : -1) * Math.PI) / 2]} scale={[0.32, 0.11, 0.32]} >
        <mesh geometry={nodes.Cylinder021.geometry} material={materials.wheel} />
        <mesh geometry={nodes.Cylinder021_1.geometry} material={materials.nuts} />
        <mesh geometry={nodes.Cylinder021_2.geometry} material={materials['wheel-middle']} />
        <mesh geometry={nodes.Cylinder021_3.geometry} material={materials['wheel-middle-1']} />
      </group>
    </group>
  )

})

useGLTF.preload('/models/Car/wheel.glb')

export default Wheel