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

interface BuildingSetProps {}

const angles = [90, 180, 270, 0]

export const BuildingSet = React.memo(() => {
  return (
    <group>
      <ImagePlane
        position={new THREE.Vector3(0, 10, 30.1)}
        src="/poster1.jpeg"
      />

      <mesh
        rotation={[
          radians(0),
          radians(angles[randInt(0, angles.length - 1)]),
          0,
        ]}
      >
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
      </mesh>
    </group>
  )
})

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
