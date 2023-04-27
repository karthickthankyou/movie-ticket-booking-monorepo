import { DoubleSide, Vector3 } from 'three'
import { useGradientTexture } from '@react-three/drei'

const LightBeam = ({ position = new Vector3(0, 0, 0) }) => {
  const [texture] = useGradientTexture([
    { stop: 0, color: 'white' },
    { stop: 1, color: 'transparent' },
  ])

  return (
    <mesh position={position}>
      <planeBufferGeometry args={[20, 40]} />
      <meshBasicMaterial map={texture} side={DoubleSide} transparent />
    </mesh>
  )
}

export default LightBeam
