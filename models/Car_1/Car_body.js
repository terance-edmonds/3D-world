/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

const CarBody = forwardRef(({ args = [1.8, 1.8, 4.3], mass = 900, ...props }, ref) => {

  const { nodes, materials } = useGLTF('/models/Car/car_body.glb')
  const [, api] = useBox(() => ({ mass, args, ...props }), ref)
  //const [, api] = useBox(() => ({ mass, args, allowSleep: false, onCollide: (e) => console.log('bonk', e.body.userData), ...props }), ref)

  return (
    <group ref={ref} api={api} >
      <group position={[0, -0.05, 0.2]} rotation={[0, Math.PI / 2, 0]} scale={[0.76, 0.21, 1]}>
        <mesh geometry={nodes.CarBody002_1.geometry} material={materials.car} />
        <mesh geometry={nodes.CarBody002_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.CarBody002_3.geometry} material={materials['tail-lights']} />
        <mesh geometry={nodes.CarBody002_4.geometry} material={materials['head-lighs']} />
        <mesh geometry={nodes.CarBody002_5.geometry} material={materials['wind-intake']} />
        <mesh geometry={nodes.CarBody002_6.geometry} material={materials['car-front']} />
        <mesh geometry={nodes.CarBody002_7.geometry} material={materials['car-back']} />
        <mesh geometry={nodes.CarBody002_8.geometry} material={materials.InWheelBay} />
        <mesh geometry={nodes.CarBody002_9.geometry} material={materials.SideMirrors} />
      </group>
    </group>
  )
})

useGLTF.preload('/models/Car/car_body.glb')

export default CarBody
