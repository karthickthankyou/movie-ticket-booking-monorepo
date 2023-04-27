import { useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'
import { radians } from './Camera'
import { GradientCube } from './GradientCube'
import { randInt } from 'three/src/math/MathUtils'
import React from 'react'
import { Float } from '@react-three/drei'
import { ImagePlane } from './ImagePlane'

interface MovingPlaneProps {
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  duration: number
  onReachedEnd: () => void
}

const random = (min: number, max: number) => Math.random() * (max - min) + min

// const Building: React.FC<{ position: THREE.Vector3 }> = ({ position }) => {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[5, random(1, 4), 5]} />
//       <meshBasicMaterial />
//     </mesh>
//   )
// }

export const MovingPlane: React.FC<MovingPlaneProps> = ({
  startPosition,
  endPosition,
  duration,
  onReachedEnd,
}) => {
  const planeRef = useRef<THREE.Group>(null)
  const elapsedTime = useRef(0)

  useEffect(() => {
    if (!planeRef.current) return

    planeRef.current.position.copy(startPosition)
  }, [startPosition])

  useFrame((_, delta) => {
    if (!planeRef.current) return

    elapsedTime.current += delta
    const progress = Math.min(elapsedTime.current / duration, 1)
    planeRef.current.position.lerpVectors(startPosition, endPosition, progress)

    if (progress === 1) {
      onReachedEnd()
    }
  })

  const buildings = useMemo(() => {
    const numBuildings = 5
    const buildingPositions: THREE.Vector3[] = []

    for (let i = 0; i < numBuildings; i++) {
      const x = random(-20, 20)
      const z = random(-20, 20)
      buildingPositions.push(new THREE.Vector3(x, 0, z))
    }

    return buildingPositions
  }, [])

  return (
    // <group ref={planeRef} position={startPosition}>
    //   {buildings.map((position, index) => (
    //     <GradientCube key={index} position={position} height={randInt(2, 10)} />
    //   ))}
    // </group>
    <BuildingSet ref={planeRef} position={startPosition} />
  )
}

interface BuildingSetProps {
  position: THREE.Vector3
}

const angles = [90, 180, 270, 0]

const BuildingSetNotForwaded: React.ForwardRefRenderFunction<
  THREE.Group,
  BuildingSetProps
> = ({ position }, ref) => {
  return (
    <group
      ref={ref}
      position={position}
      rotation={[radians(0), radians(angles[randInt(0, angles.length - 1)]), 0]}
    >
      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[0.1, 0.5]}
      >
        <ImagePlane
          position={new THREE.Vector3(0, 14, 0)}
          src="/poster1.jpeg"
        />
      </Float>
      {buildingSets[randInt(0, buildingSets.length - 1)].map(
        ({ length, position, width }) => (
          <GradientCube
            position={position}
            height={randInt(4, 16)}
            width={width}
            length={length}
          />
        ),
      )}
    </group>
  )
}

export const BuildingSet = React.forwardRef(BuildingSetNotForwaded)

const buildingSet1 = [
  { position: new THREE.Vector3(20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, -20), width: 20, length: 20 },
]
const buildingSet2 = [
  { position: new THREE.Vector3(10, 0, 20), width: 45, length: 20 },
  { position: new THREE.Vector3(-20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, -20), width: 20, length: 20 },
]

const buildingSet3 = [
  { position: new THREE.Vector3(0, 0, 20), width: 70, length: 20 },

  { position: new THREE.Vector3(20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, -20), width: 20, length: 20 },
]
const buildingSet4 = [
  { position: new THREE.Vector3(0, 0, 20), width: 70, length: 20 },

  { position: new THREE.Vector3(20, 0, 0), width: 20, length: 20 },

  { position: new THREE.Vector3(-20, 0, 0), width: 20, length: 20 },

  { position: new THREE.Vector3(0, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, -20), width: 20, length: 20 },
]
const buildingSet5 = [
  { position: new THREE.Vector3(-10, 0, 0), width: 45, length: 45 },
  { position: new THREE.Vector3(-20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, -20), width: 20, length: 20 },
]

const buildingSet2x2_1x1 = [
  { position: new THREE.Vector3(10, 0, 10), width: 45, length: 45 },
  { position: new THREE.Vector3(-20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, -20), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, -20), width: 20, length: 20 },
]

const buildingSetLShape = [
  { position: new THREE.Vector3(20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(-20, 0, 20), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(0, 0, 0), width: 20, length: 20 },
  { position: new THREE.Vector3(20, 0, -20), width: 20, length: 20 },
]
const buildingSetWhole = [
  { position: new THREE.Vector3(0, 0, 0), width: 70, length: 70 },
]
const buildingSetWhole2 = [
  { position: new THREE.Vector3(0, 0, -10), width: 70, length: 45 },
]
const buildingSetWhole3 = [
  { position: new THREE.Vector3(0, 0, -20), width: 70, length: 20 },
]

export const buildingSets = [
  buildingSet1,
  buildingSet2x2_1x1,
  buildingSet4,
  buildingSetWhole,
  buildingSetWhole2,
  buildingSetWhole3,
]
