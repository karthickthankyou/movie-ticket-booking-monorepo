import { useState, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'

const vertexShader = `
precision mediump float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec3 normal;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vNormal = normal;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision mediump float;

uniform sampler2D images[6];

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 position = normalize(vPosition);

  vec4 color = vec4(0.0);
  for (int i = 0; i < 6; i++) {
    vec2 uv = position.xy * 0.5 + 0.5;
    color += texture2D(images[i], uv);
  }

  color /= 6.0;

  gl_FragColor = color;
}
`

export const LowPolySphere = ({
  imageUrls,
  radius,
  detail,
}: {
  imageUrls: string[]
  radius: number
  detail: number
}) => {
  const textures = useLoader(TextureLoader, imageUrls)
  const uniforms = useMemo(() => {
    const images = { type: 't', value: textures }
    return { images }
  }, [textures])

  return (
    <mesh>
      <icosahedronGeometry args={[radius, detail]} />
      {/* <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      /> */}
    </mesh>
  )
}
