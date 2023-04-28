import { useState, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'
import { LowPolySphere } from './LowPolySphere'

export const IcoScene = () => {
  return (
    <Canvas
      style={{ height: 'calc(100vh - 4rem)', background: 'hsl(0, 0%, 45%)' }}
      className="rounded"
      camera={{
        fov: 60,
        near: 0.1,
        far: 1000,
        position: [10, 100, 10],
        rotation: [0, 0, 0],
      }}
    >
      <OrbitControls />{' '}
      <LowPolySphere
        imageUrls={[
          'https://images.unsplash.com/photo-1643175836446-0d66848d9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        ]}
        radius={10}
        detail={1}
      />
    </Canvas>
  )
}
