import { useState, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MoverProps {
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  initialRotation: THREE.Vector3
  finalRotation: THREE.Vector3
  progress: number
  children: ReactNode
}

export const Rotator: React.FC<
  Omit<MoverProps, 'startPosition' | 'endPosition'>
> = ({ initialRotation, finalRotation, progress, children }) => {
  const rotation = new THREE.Euler().setFromVector3(
    new THREE.Vector3().lerpVectors(initialRotation, finalRotation, progress),
  )

  return <group rotation={rotation}>{children}</group>
}
export const Mover: React.FC<MoverProps> = ({
  startPosition,
  endPosition,
  initialRotation,
  finalRotation,
  progress,
  children,
}) => {
  const position = new THREE.Vector3().lerpVectors(
    startPosition,
    endPosition,
    progress,
  )

  const rotation = new THREE.Euler().setFromVector3(
    new THREE.Vector3().lerpVectors(initialRotation, finalRotation, progress),
  )

  return (
    <group position={position} rotation={rotation}>
      {children}
    </group>
  )
}

interface SpawnerProps {
  spawnInterval: number
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  initialRotation?: THREE.Vector3
  finalRotation?: THREE.Vector3
  duration: number
  childrenFactory: (id: string) => JSX.Element
}

export const Spawner: React.FC<SpawnerProps> = ({
  spawnInterval,
  startPosition,
  endPosition,
  initialRotation = new THREE.Vector3(0, 0, 0),
  finalRotation = new THREE.Vector3(0, 0, 0),
  duration,
  childrenFactory,
}) => {
  const [elements, setElements] = useState<
    Array<{ id: string; progress: number }>
  >([])
  const [nextSpawnTime, setNextSpawnTime] = useState<number>(spawnInterval)

  useFrame((_, delta) => {
    setNextSpawnTime((prevTime) => prevTime - delta)

    if (nextSpawnTime <= 0) {
      setElements((prevElements) => [
        ...prevElements,
        { id: `${Date.now()}`, progress: 0 },
      ])
      setNextSpawnTime(spawnInterval)
    }

    setElements((prevElements) =>
      prevElements
        .map((elem) => {
          const progress = elem.progress + delta / duration
          if (progress >= 1) {
            return null
          }
          return { ...elem, progress }
        })
        .filter(
          (elem): elem is { id: string; progress: number } => elem !== null,
        ),
    )
  })

  console.log('elements ', elements.length)

  return (
    <>
      {elements.map((elem) => (
        <Mover
          key={elem.id}
          startPosition={startPosition}
          endPosition={endPosition}
          initialRotation={initialRotation}
          finalRotation={finalRotation}
          progress={elem.progress}
        >
          {childrenFactory(elem.id)}
        </Mover>
      ))}
    </>
  )
}
