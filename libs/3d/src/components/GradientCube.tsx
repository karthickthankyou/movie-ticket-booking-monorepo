import { Plane, GradientTexture, Float } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { randInt } from 'three/src/math/MathUtils'
import { ImagePlane } from './ImagePlane'

type Plane = {
  rotation: [number, number, number]
  position: [number, number, number]
  colors: string[]
  side: string
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const GradientCube = ({
  width = 10,
  length = 10,
  height = 1,
  position = new THREE.Vector3(0, 0, 0),
}: {
  width?: number
  length?: number
  height: number
  position: THREE.Vector3
}) => {
  const stops = [0, 1]
  const { x, y, z } = position
  const color = height * 10
  const getColors = (offset: number) => [`hsl(0, 0%, 30%)`, `hsl(0, 0%, 0%)`]
  const planes: Plane[] = [
    {
      rotation: [0, 0, 0],
      position: [0, 0, 0.4],
      colors: getColors(0),
      side: 'front',
    }, // Front
    {
      rotation: [0, -Math.PI / 2, 0],
      position: [-0.4, 0, 0],
      colors: getColors(10),
      side: 'left',
    }, // Left
    {
      rotation: [0, Math.PI / 2, 0],
      position: [0.4, 0, 0],
      colors: getColors(20),
      side: 'right',
    }, // Right
    {
      rotation: [0, Math.PI, 0],
      position: [0, 0, -0.4],
      colors: getColors(30),
      side: 'back',
    }, // Back
    {
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, 0.4, 0],
      colors: [`hsl(0, 0%,20%)`, `hsl(0, 0%,25%)`],
      side: 'top',
    }, // Top
  ]

  const videoRef = useRef<HTMLVideoElement>(null)
  const textureRef = useRef<THREE.VideoTexture>()

  useEffect(() => {
    if (videoRef.current) {
      textureRef.current = new THREE.VideoTexture(videoRef.current)
      textureRef.current.wrapS = textureRef.current.wrapT = 1000 // set the wrap mode to repeat
      textureRef.current.needsUpdate = true // update the texture when the video is played
      videoRef.current.play()
    }
  }, [])

  return (
    <>
      <group position={[x, y + height / 2, z]} scale={[width, height, length]}>
        {planes.map(({ rotation, colors, position, side }, index) => (
          <Plane
            key={index}
            args={[0.8, 0.8]}
            rotation={rotation}
            position={position}
          >
            <meshBasicMaterial>
              <GradientTexture stops={stops} colors={colors} />
            </meshBasicMaterial>
          </Plane>
        ))}
      </group>
    </>
  )
}
