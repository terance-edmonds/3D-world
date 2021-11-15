/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

const ArrowKey = ({args = [1, 0.5, 1], ...props}) => {
  const { nodes, materials } = useGLTF('/models/ArrowKey/arrowKey.glb')
  const [ref] = useBox(() => ({mass: 0.1, args, ...props }))

  return (
    <group scale={2.5} ref={ref}>
      <group scale={[0.19, 0.13, 0.19]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.arrow} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ArrowKey/arrowKey.glb')

export default ArrowKey;
