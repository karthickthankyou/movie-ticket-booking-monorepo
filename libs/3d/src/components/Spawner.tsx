import { useState, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MoverProps {
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  progress: number
  children: ReactNode
}

export const Mover: React.FC<MoverProps> = ({
  startPosition,
  endPosition,
  progress,
  children,
}) => {
  const position = new THREE.Vector3().lerpVectors(
    startPosition,
    endPosition,
    progress,
  )

  return <group position={position}>{children}</group>
}

interface SpawnerProps {
  spawnInterval: number
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  duration: number
  childrenFactory: () => JSX.Element
}

export const Spawner: React.FC<SpawnerProps> = ({
  spawnInterval,
  startPosition,
  endPosition,
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
          progress={elem.progress}
        >
          {childrenFactory()}
        </Mover>
      ))}
    </>
  )
}
