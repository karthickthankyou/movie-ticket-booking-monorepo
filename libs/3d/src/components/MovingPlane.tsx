import { useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { radians } from './Camera'

interface MovingPlaneProps {
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  duration: number
  onReachedEnd: () => void
}

export const MovingPlane: React.FC<MovingPlaneProps> = ({
  startPosition,
  endPosition,
  duration,
  onReachedEnd,
}) => {
  const planeRef = useRef<THREE.Mesh>(null)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    if (!planeRef.current) return

    planeRef.current.position.copy(startPosition)
  }, [startPosition])

  useFrame((_, delta) => {
    if (!planeRef.current) return

    setElapsedTime((prev) => prev + delta)
    const progress = Math.min(elapsedTime / duration, 1)
    planeRef.current.position.lerpVectors(startPosition, endPosition, progress)

    if (progress === 1) {
      onReachedEnd()
    }
  })

  return (
    <mesh ref={planeRef} rotation={[radians(-90), 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  )
}
