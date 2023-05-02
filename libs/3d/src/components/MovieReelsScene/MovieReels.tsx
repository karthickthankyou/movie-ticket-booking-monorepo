import { PerspectiveCamera, Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Rotator, Spawner } from '../Spawner'
import { RandomImagePlane } from '../ImagePlane'
import { radians } from '../Camera'
import { useRef } from 'react'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import * as THREE from 'three'

export const moviePosters = [
  'https://upload.wikimedia.org/wikipedia/en/d/d0/Nayakan_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/ta/c/c0/Kannathilfrontbig.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a6/Sarpatta_Parambarai.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/83/Subramaniapuram.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/38/Viduthalai_Part_1.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/61/Soorarai_Pottru.JPG?20220329062623',
  'https://upload.wikimedia.org/wikipedia/en/8/84/Aayirathil_Oruvan_%282010%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/7f/Pudhupettai_movie_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/79/Kaithi_2019_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4c/Theeran_Adhigaaram_Ondru_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/46/Kaala_Poster.jpg?20180607220444',
  'https://upload.wikimedia.org/wikipedia/en/b/b3/Thalapathi_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg?20230330063441',
  'https://upload.wikimedia.org/wikipedia/en/c/c4/%2796_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6a/Iruvar_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/78/Asuran_2019_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pariyerum_Perumal.jpg/220px-Pariyerum_Perumal.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/f5/Aaranyakaandam.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Kadaisi_Vivasayi.jpg/220px-Kadaisi_Vivasayi.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Vikram_Vedha_poster.jpg/220px-Vikram_Vedha_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d7/Roja_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e3/Bombay_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Vaaranam_Aayiram.jpg/220px-Vaaranam_Aayiram.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Peranbu_poster.jpg/220px-Peranbu_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Anbe_Sivam.jpg/220px-Anbe_Sivam.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Vada_Chennai.jpg/220px-Vada_Chennai.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Ratsasan_poster.jpg/220px-Ratsasan_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Super_Deluxe_film_poster.jpg/220px-Super_Deluxe_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/01/Visaranai_film_release_poster.jpg',
]

const square = [
  {
    position: new THREE.Vector3(-10, 0, 0),
    rotation: new THREE.Euler(radians(0), radians(-90), 0),
  },
  {
    position: new THREE.Vector3(10, 0, 0),
    rotation: new THREE.Euler(radians(0), radians(90), 0),
  },
  {
    position: new THREE.Vector3(0, 0, 10),
    rotation: new THREE.Euler(radians(0), radians(0), 0),
  },
  {
    position: new THREE.Vector3(0, 0, -10),
    rotation: new THREE.Euler(radians(0), radians(180), 0),
  },
]
const octagonSide1 = 17
const octagonSide2 = 24

const octagon = [
  {
    position: new THREE.Vector3(octagonSide1, 0, -octagonSide1),
    rotation: new THREE.Euler(0, radians(-225), 0),
  },
  {
    position: new THREE.Vector3(0, 0, -octagonSide2),
    rotation: new THREE.Euler(0, radians(-180), 0),
  },
  {
    position: new THREE.Vector3(-octagonSide1, 0, -octagonSide1),
    rotation: new THREE.Euler(0, radians(-135), 0),
  },
  {
    position: new THREE.Vector3(-octagonSide2, 0, 0),
    rotation: new THREE.Euler(0, radians(-90), 0),
  },
  {
    position: new THREE.Vector3(-octagonSide1, 0, octagonSide1),
    rotation: new THREE.Euler(0, radians(-45), 0),
  },
  {
    position: new THREE.Vector3(0, 0, octagonSide2),
    rotation: new THREE.Euler(0, radians(0), 0),
  },
  {
    position: new THREE.Vector3(octagonSide1, 0, octagonSide1),
    rotation: new THREE.Euler(0, radians(45), 0),
  },
  {
    position: new THREE.Vector3(octagonSide2, 0, 0),
    rotation: new THREE.Euler(0, radians(90), 0),
  },
]
const octagonInner = [
  {
    position: new THREE.Vector3(18, 0, -18),
    rotation: new THREE.Euler(0, radians(-45), 0),
  },
  {
    position: new THREE.Vector3(0, 0, -24),
    rotation: new THREE.Euler(0, radians(0), 0),
  },
  {
    position: new THREE.Vector3(-18, 0, -18),
    rotation: new THREE.Euler(0, radians(45), 0),
  },
  {
    position: new THREE.Vector3(-24, 0, 0),
    rotation: new THREE.Euler(0, radians(90), 0),
  },
  {
    position: new THREE.Vector3(-18, 0, 18),
    rotation: new THREE.Euler(0, radians(135), 0),
  },
  {
    position: new THREE.Vector3(0, 0, 24),
    rotation: new THREE.Euler(0, radians(180), 0),
  },
  {
    position: new THREE.Vector3(18, 0, 18),
    rotation: new THREE.Euler(0, radians(225), 0),
  },
  {
    position: new THREE.Vector3(24, 0, 0),
    rotation: new THREE.Euler(0, radians(270), 0),
  },
]

const MoveCubeRunners = ({
  startPosition,
  endPosition,
  spawnInterval,
  duration,
  position,
  rotation = new THREE.Euler(0, 0, 0),
}: {
  position: Vector3
  rotation?: THREE.Euler
  startPosition: Vector3
  endPosition: Vector3
  spawnInterval: number
  duration: number
}) => {
  return (
    <mesh position={position} rotation={rotation}>
      {square.map(({ position, rotation }) => (
        <mesh position={position} rotation={rotation}>
          <Spawner
            spawnInterval={spawnInterval}
            startPosition={startPosition}
            endPosition={endPosition}
            duration={duration}
            childrenFactory={() => <RandomImagePlane />}
          />
        </mesh>
      ))}
    </mesh>
  )
}

const MoveOCTORunners = ({
  startPosition,
  endPosition,
  spawnInterval,
  duration,
  position,
  rotation = new THREE.Euler(0, 0, 0),
}: {
  position: Vector3
  rotation?: THREE.Euler
  startPosition: Vector3
  endPosition: Vector3
  spawnInterval: number
  duration: number
}) => {
  return (
    <mesh position={position} rotation={rotation}>
      {octagon.map(({ position, rotation }) => (
        <mesh position={position} rotation={rotation}>
          <Spawner
            spawnInterval={spawnInterval}
            startPosition={startPosition}
            endPosition={endPosition}
            duration={duration}
            childrenFactory={() => <RandomImagePlane />}
          />
        </mesh>
      ))}
    </mesh>
  )
}

const MoveOCTOInnerRunners = ({
  startPosition,
  endPosition,
  spawnInterval,
  duration,
  position,
  rotation = new THREE.Euler(0, 0, 0),
}: {
  position: Vector3
  rotation?: THREE.Euler
  startPosition: Vector3
  endPosition: Vector3
  spawnInterval: number
  duration: number
}) => {
  return (
    <mesh position={position} rotation={rotation}>
      {octagonInner.map(({ position, rotation }) => (
        <mesh position={position} rotation={rotation}>
          <Spawner
            spawnInterval={spawnInterval}
            startPosition={startPosition}
            endPosition={endPosition}
            duration={duration}
            childrenFactory={() => <RandomImagePlane />}
          />
        </mesh>
      ))}
    </mesh>
  )
}

export const MovieReels = () => {
  const cameraRef = useRef<PerspectiveCamera>(null)

  return (
    <Canvas
      style={{ height: 'calc(100vh - 4rem)', background: 'hsl(0, 0%, 5%)' }}
      className="rounded"
      camera={{
        fov: 60,
        near: 0.1,
        far: 1000,
        position: [10, 100, 10],
        rotation: [0, 0, 0],
      }}
    >
      <OrbitControls
        minPolarAngle={radians(80)}
        maxPolarAngle={radians(100)}
        // minAzimuthAngle={radians(30)}
        // maxAzimuthAngle={radians(150)}
        minDistance={45}
        maxDistance={120}
      />
      <MoveCubeRunners
        spawnInterval={1.6}
        startPosition={new Vector3(0, -150, 0)}
        endPosition={new Vector3(0, 150, 0)}
        duration={22}
        position={new Vector3(76, 0, 0)}
      />
      <MoveCubeRunners
        spawnInterval={1.6}
        startPosition={new Vector3(0, -150, 0)}
        endPosition={new Vector3(0, 150, 0)}
        duration={22}
        position={new Vector3(-76, 0, 0)}
      />
      <MoveCubeRunners
        spawnInterval={1.6}
        startPosition={new Vector3(0, -150, 0)}
        endPosition={new Vector3(0, 150, 0)}
        duration={22}
        position={new Vector3(0, 0, 76)}
      />
      <MoveCubeRunners
        spawnInterval={1.6}
        startPosition={new Vector3(0, -150, 0)}
        endPosition={new Vector3(0, 150, 0)}
        duration={22}
        position={new Vector3(0, 0, -76)}
      />

      <MoveOCTORunners
        spawnInterval={1.6}
        startPosition={new Vector3(0, 150, 0)}
        endPosition={new Vector3(0, -150, 0)}
        duration={22}
        position={new Vector3(0, 0, 0)}
      />

      {/* <Rotator
        progress={-8}
        initialRotation={new Vector3(0, 0, 0)}
        finalRotation={new Vector3(radians(90), 0, 0)}
      >
        <MoveOCTORunners
          spawnInterval={1.6}
          startPosition={new Vector3(0, -150, 0)}
          endPosition={new Vector3(0, 150, 0)}
          duration={22}
          position={new Vector3(0, 0, 0)}
        />
      </Rotator> */}
    </Canvas>
  )
}
