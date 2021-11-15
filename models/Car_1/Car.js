import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRaycastVehicle } from '@react-three/cannon'
import { useControls } from '../../controls/useControls'
import CarBody from './Car_body'
import Wheel from './Wheel'

function Car({ chassis, radius = 0.7, width = 1.6, height = -0.4, front = 1.52, back = -1.27, steer = 0.75, maxBrake = 1e2, ...props }) {

  const wheel1 = useRef()
  const wheel2 = useRef()
  const wheel3 = useRef()
  const wheel4 = useRef()
  const controls = useControls()

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    maxSuspensionForce: 1e7,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 10,
    dampingCompression: 4.4,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: true,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 10
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

    let force = 2500

    for (let a = 2; a < 4; a++) api.applyEngineForce(forward || backward ? force * (forward && !backward ? -1 * (boost ? 1.6 : 1) : 1) : 0, a)
    for (let s = 0; s < 2; s++) !boost ? api.setSteeringValue(left || right ? steer * (left && !right ? 1 : -1) : 0, s) : api.setSteeringValue(0, s)
    for (let b = 2; b < 4; b++) api.setBrake(brake ? maxBrake : 0, b)

    if (reset) {
      chassis.current.position.set(0, 0.5, 0)
      chassis.current.api.velocity.set(0, 0, 0)
      chassis.current.api.angularVelocity.set(0, 0.5, 0)
      chassis.current.api.rotation.set(0, -Math.PI / 4, 0)
    }else{
      SetPosition()
    }

  })

  const SetPosition = () => {
      return new Promise ((resolve) => {
          chassis.current.api.position.subscribe((v) => {
              chassis.current.position.set(v[0], v[1], v[2])
          })
      })
  }

  return (
    <group ref={vehicle} position={[0, -0.4, 0]} receiveShadow castShadow >
      <CarBody ref={chassis} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />
      <Wheel ref={wheel1} radius={radius} leftSide />
      <Wheel ref={wheel2} radius={radius} />
      <Wheel ref={wheel3} radius={radius} leftSide />
      <Wheel ref={wheel4} radius={radius} />
    </group>
  )
}

export default Car
