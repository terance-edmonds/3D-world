import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Debug, Physics } from '@react-three/cannon'
import { Environment } from '@react-three/drei'

import Vehicle from '../World/Car/Car'
import Floor from '../components/Floor/Floor'
import { Camera } from '../components/Camera/Camera';
import { Name } from '../World/Text/Name'
import { Wall_LT } from '../World/Walls/Wall-LT'
import { Wall_LB } from '../World/Walls/Wall-LB'
import { Wall_RT } from '../World/Walls/Wall-RT'
import { Wall_RB } from '../World/Walls/Wall-RB'
import { World } from '../World/Text/World'
import { Controls } from '../World/Controls/Controls'
import DirectionPole from '../components/DirectionPole/DirectionPole'
import TheMan from '../World/Statues/TheMan/TheMan'

export default function Projects() {
    const chassis = useRef()
    const light = useRef()
    
    return (
      <div id="projects" >
        <Canvas dpr={[1, 1.5]}>

          <ambientLight intensity={0.1}/>
          <spotLight ref={light} decay={0.7} penumbra={0.59} angle={1.05} position={[4, 12, 4]} distance={1000} intensity={0.2} color="0xffffff" />

          <Suspense fallback={null}>
            <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
              {/* plane start */}
              <Floor rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} />
              {/* plane end */}

              {/* car start */}
              {/* <Debug color="black" scale={1.1}></Debug> */}
              <Vehicle position={[4, 12, 4]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0, 0]} wheelRadius={0.5} chassis={chassis} />
              {/* car end */}
              
              <Wall_LT/>
              <Wall_RT/>

              <Name/>
              <World/>

              <Wall_LB/>
              <Wall_RB/>

              <Controls/>
              
              {/* <Debug color="black" scale={1.1}></Debug> */}
              <TheMan position={[0, 0, 25]} />

              <DirectionPole text="DIRECTION" position={[20, 2, 29]} offset={0.4} extend={1.3} />
              <DirectionPole text="DIRECTION" position={[0, 2, 45]} offset={0.4} extend={1.3} rotation={[0, 0, 0]} />

            </Physics>

            <Environment files="/hdr.hdr" />

          </Suspense>

          <Camera light={light} chassis={chassis} />
        
        </Canvas>
      </div>
    )
}
