import React from 'react'
import { Box } from '@react-three/drei'
import { radians } from './Camera'
import { Headlights } from './Headlights'

interface CarProps {}

export const Car: React.FC<CarProps> = ({}) => {
  return (
    <>
      <Headlights />
      <Box
        position={[0, 0, 5]}
        rotation={[radians(0), radians(90), 0]}
        args={[2, 0.1, 4]}
      >
        <meshBasicMaterial color="red" />
      </Box>
    </>
  )
}
