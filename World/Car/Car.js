import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRaycastVehicle } from '@react-three/cannon'
import { useControls } from '../../controls/useControls'
import CarBody from './Car_body'
import Wheel from './Wheel'

function Car({ chassis, radius = 0.6, width = 1.2, height = -0.1, front = 0.85, back = -0.8, force= 80, steer = 0.75, maxBrake = 1e2, ...props }) {

  const wheel1 = useRef()
  const wheel2 = useRef()
  const wheel3 = useRef()
  const wheel4 = useRef()
  const controls = useControls()
  const [Velocity, setVelocity] = useState(0)
  const [PrevMovementState, setPrevMovementState] = useState({
    forward: false,
    backward: false
  })
  const [MaxVelocityReached, setMaxVelocityReached] = useState(false)

  const maxVelocity = 15;
  const maxBoostVelocity = 25;
  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 25, //30
    suspensionRestLength: 0.1, //0.3
    maxSuspensionForce: 1e7,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 1.8, //10
    dampingCompression: 1.5, //4.4
    rollInfluence: 0.01,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: true,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 35
  }

  const wheelInfo1 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-width / 2, height, front] }
  const wheelInfo2 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [width / 2, height, front] }
  const wheelInfo3 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [-width / 2, height, back] }
  const wheelInfo4 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [width / 2, height, back] }

  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1
  }))

  useFrame(() => {
    const { forward, backward, left, right, brake, reset , boost } = controls.current;

    //movement balance
    if(forward || backward || brake){
      if(!right && !left) chassis.current.api.angularVelocity.set(0, 0, 0)
    }

    //movement
    for (let a = 2; a < 4; a++) api.applyEngineForce(((forward || backward) && !MaxVelocityReached) ? force * ((forward && !backward) ? -1 : 1) : 0 , a)

    //steer
    for (let s = 0; s < 2; s++) !boost ? api.setSteeringValue(left || right ? steer * (left && !right ? 1 : -1) : 0, s) : api.setSteeringValue(0, s)

    //brake
    if((!left && !right)) {
      for (let b = 0; b < 4; b++) api.setBrake(brake ? 3 : 0, b)
    }else{
      for (let b = 2; b < 4; b++) api.setBrake(brake ? 2 : 0, b)
    }

    //reset
    if (reset) {
      chassis.current.api.position.set(4, 12, 4)
      chassis.current.api.velocity.set(0, -15, 0)
      chassis.current.api.angularVelocity.set(0, 0, 0)
      chassis.current.api.rotation.set(0, -Math.PI / 4, 0)
    }else{
      SetCarProperties()
    }

    //control velocity
    ControlVelocity(controls.current)

  })

  const ControlVelocity = async (controls) => {
    const { forward, backward, left, right, brake, reset , boost } = controls;

    if(forward && boost) {
      Velocity > maxBoostVelocity ? setMaxVelocityReached(true) : setMaxVelocityReached(false)
    }else{
      Velocity > maxVelocity ? setMaxVelocityReached(true) : setMaxVelocityReached(false)
    }
    
    if(!forward && !backward){
      let reverseForce = Velocity * (2.5)
      
      if(Velocity > 0.01){
        reverseForce = PrevMovementState.forward ? reverseForce : (PrevMovementState.backward ? reverseForce * (-1) : 0)
      }else{
        reverseForce = 0
      }

      if(reverseForce != 0) chassis.current.api.angularVelocity.set(0, 0, 0)

      for (let a = 2; a < 4; a++) api.applyEngineForce(reverseForce, a)
    }

    if(forward || backward || brake){
      setPrevMovementState({
        forward: forward,
        backward: backward
      })
    }
  }

  const SetCarProperties = async () => {
    //update position
    chassis.current.api.position.subscribe((v) => {
        chassis.current.position.set(v[0], v[1], v[2])
    })
      
    //update rotation
    chassis.current.api.rotation.subscribe((v) => {
      chassis.current.rotation.set(v[0], v[1], v[2])
    })

    //update velocity
    chassis.current.api.velocity.subscribe((v) => {
        let velocity = Math.sqrt((v[0] ** 2) + (v[2] ** 2))
        setVelocity(velocity)
    })

    // Updise down
    if(chassis.current.rotation.x > 3.1 || chassis.current.rotation.x == 0){
      carReset()
    }
      
  }


  function carReset() {
    let rotation = chassis.current.rotation

    setTimeout(() => {
      if(rotation.x == 0 || rotation.x > 3.1) chassis.current.api.rotation.set(0, rotation.y, 0)
    }, 1000);

  }

  return (
    <group ref={vehicle} position={[0, -0.4, 0]} >
      <CarBody ref={chassis} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />
      <Wheel ref={wheel1} radius={radius} leftSide />
      <Wheel ref={wheel2} radius={radius} />
      <Wheel ref={wheel3} radius={radius} leftSide />
      <Wheel ref={wheel4} radius={radius} />
    </group>
  )
}

export default Car
