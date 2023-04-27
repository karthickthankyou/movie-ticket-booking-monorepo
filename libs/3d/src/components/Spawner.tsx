import { useFrame } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { MovingPlane } from './MovingPlane3'

interface PlaneSpawnerProps {
  spawnInterval: number
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  duration: number
}

export const PlaneSpawner: React.FC<PlaneSpawnerProps> = ({
  spawnInterval,
  startPosition,
  endPosition,
  duration,
}) => {
  const [planes, setPlanes] = useState<Array<JSX.Element>>([])
  const [nextSpawnTime, setNextSpawnTime] = useState<number>(0)

  useEffect(() => {
    setNextSpawnTime(spawnInterval)
  }, [spawnInterval])

  const handlePlaneReachedEnd = (id: string) => {
    setPlanes((prevPlanes) => prevPlanes.filter((plane) => plane.key !== id))
  }

  useFrame((_, delta) => {
    if (nextSpawnTime === null) return

    setNextSpawnTime((prevTime) => prevTime - delta)

    if (nextSpawnTime <= 0) {
      const id = `${Date.now()}`
      setPlanes((prevPlanes) => [
        ...prevPlanes,
        <MovingPlane
          key={id}
          startPosition={startPosition}
          endPosition={endPosition}
          duration={duration}
          onReachedEnd={() => handlePlaneReachedEnd(id)}
        />,
      ])
      setNextSpawnTime(spawnInterval)
    }
  })

  console.log('planes ', planes.length)

  return <>{planes}</>
}
