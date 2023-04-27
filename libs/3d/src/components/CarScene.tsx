import { Canvas } from '@react-three/fiber'
import {
  Plane,
  OrbitControls,
  Float,
  Text,
  PerformanceMonitor,
} from '@react-three/drei'
import React, { useRef, useEffect, useState } from 'react'
import { Car } from './Car'

import * as THREE from 'three'
import { Spawner } from './Spawner'
import { BuildingSet } from './MovingPlane3'

const carSpeed = 2 // Speed in units per second between positions
const carPositions: [number, number][] = [
  [0, 0],
  [1, 0],
]

const radians = (degrees: number) => degrees * (Math.PI / 180)

export const CarScene = () => {
  const carRef = useRef<THREE.Mesh>(null)
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0)

  useEffect(() => {
    if (carRef.current) {
      const interval = setInterval(() => {
        setCurrentPositionIndex(
          (currentPositionIndex + 1) % carPositions.length,
        )
      }, (1000 / carSpeed) * carPositions.length)
      return () => {
        clearInterval(interval)
      }
    }
  }, [carRef])

  const [dpr, setDpr] = useState(1.5)

  return (
    <Canvas
      style={{ height: 'calc(100vh - 4rem)', background: 'hsl(0, 0%, 5%)' }}
      className="rounded"
      camera={{
        fov: 60,
        near: 0.1,
        far: 1000,
        position: [10, 100, 10],
        rotation: [0, 0, 0],
      }}
    >
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
      />

      {/* <Plane
        args={[400, 400]}
        position={[0, -0.2, 0]}
        rotation={[radians(-90), 0, 0]}
      >
        <meshBasicMaterial color="white" />
      </Plane> */}

      <Plane
        args={[800, 20]}
        position={[-270, 0.01, 0]}
        rotation={[radians(-90), 0, 0]}
      >
        <meshBasicMaterial color="black" />
      </Plane>

      <OrbitControls
        minPolarAngle={radians(0)}
        maxPolarAngle={radians(45)}
        minAzimuthAngle={radians(30)}
        maxAzimuthAngle={radians(150)}
        minDistance={45}
        maxDistance={100}
      />
      <Spawner
        spawnInterval={3.4}
        startPosition={new THREE.Vector3(-250, 0.1, 40)}
        endPosition={new THREE.Vector3(150, 0.1, 40)}
        duration={20}
        childrenFactory={() => <BuildingSet />}
      />
      <Spawner
        spawnInterval={3.4}
        startPosition={new THREE.Vector3(-250, 0.1, -40)}
        endPosition={new THREE.Vector3(150, 0.1, -40)}
        duration={20}
        childrenFactory={() => <BuildingSet />}
      />

      <Spawner
        spawnInterval={1.8}
        startPosition={new THREE.Vector3(-250, 0.1, -6)}
        endPosition={new THREE.Vector3(150, 0.1, -6)}
        duration={5}
        childrenFactory={() => <Car />}
      />
      <Spawner
        spawnInterval={4.3}
        startPosition={new THREE.Vector3(-250, 0.1, -8)}
        endPosition={new THREE.Vector3(150, 0.1, -8)}
        duration={8}
        childrenFactory={() => <Car />}
      />
      <Spawner
        spawnInterval={10.3}
        endPosition={new THREE.Vector3(-250, 0.1, -2)}
        startPosition={new THREE.Vector3(150, 0.1, -2)}
        duration={20}
        childrenFactory={() => <Car />}
      />
      {/* <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0.1, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Plane
          args={[20, 20]}
          position={[0, 0.01, 0]}
          rotation={[radians(-90), 0, 0]}
        >
          <meshBasicMaterial color="white" />
        </Plane>
      </Float> */}
      <Car />
    </Canvas>
  )
}
