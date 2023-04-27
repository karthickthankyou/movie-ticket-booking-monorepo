import { Plane, GradientTexture, Float } from '@react-three/drei'
import * as THREE from 'three'
import { Vector3 } from 'three'
import { radians } from './Camera'

interface HeadlightsProps {
  position?: THREE.Vector3
  topWidth?: number
  bottomWidth?: number
  height?: number
  color?: string
}

export const Headlights: React.FC<HeadlightsProps> = ({
  position = new Vector3(-4, 0.01, 2.5),
  topWidth = 5,
  bottomWidth = 1,
  height = 2,
  color = 'white',
}) => {
  const vertices = [
    new THREE.Vector3(-topWidth / 2, height / 2, 0),
    new THREE.Vector3(topWidth / 2, height / 2, 0),
    new THREE.Vector3(-bottomWidth / 2, -height / 2, 0),
    new THREE.Vector3(bottomWidth / 2, -height / 2, 0),
  ]

  const geometry = new THREE.BufferGeometry().setFromPoints(vertices)
  geometry.setIndex([0, 1, 2, 1, 3, 2])

  return (
    <mesh position={position}>
      <Plane
        // geometry={geometry}
        args={[2, 10]}
        rotation={[radians(-90), 0, radians(-90)]}
        position={position}
      >
        <meshBasicMaterial side={THREE.DoubleSide}>
          <GradientTexture stops={[0, 1]} colors={['gray', 'black']} />
        </meshBasicMaterial>
      </Plane>
    </mesh>
  )
}
