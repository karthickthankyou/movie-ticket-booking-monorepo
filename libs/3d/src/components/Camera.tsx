import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Box, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

interface CameraProps {}
export const radians = (degrees: number) => degrees * (Math.PI / 180)

export const Camera: React.FC<CameraProps> = () => {
  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.rotation.set(-radians(30), radians(45), 0)
      camera.updateProjectionMatrix()
    }
  }, [camera])
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      near={0.1}
      far={1000}
      position={[0, 5, 10]}
    />
  )
}
