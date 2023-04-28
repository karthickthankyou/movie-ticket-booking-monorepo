import { useState, ReactNode, useEffect, useRef } from 'react'
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

type SpawnedElement = { id: number; progress: number }

interface SpawnerProps {
  spawnInterval: number
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  initialRotation?: THREE.Vector3
  finalRotation?: THREE.Vector3
  duration: number
  childrenFactory: (id: number) => JSX.Element
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
  // State to hold spawned elements
  const [elements, setElements] = useState<Array<SpawnedElement>>([])

  // Store last spawn time.
  const lastSpawnTime = useRef<number>(Date.now())

  useFrame((_, delta) => {
    // Check if it's time to spawn a new element
    if (Date.now() - lastSpawnTime.current >= spawnInterval * 1000) {
      const id = Date.now()

      lastSpawnTime.current = id
      setElements((prevElements) => [...prevElements, { id, progress: 0 }])
    }

    // Update the progress of each element and remove elements that have completed their movement
    setElements((prevElements) =>
      prevElements
        .map((elem) => {
          const progress = elem.progress + delta / duration
          if (progress >= 1) {
            return null
          }
          return { ...elem, progress }
        })
        .filter((elem): elem is SpawnedElement => elem !== null),
    )
  })

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
