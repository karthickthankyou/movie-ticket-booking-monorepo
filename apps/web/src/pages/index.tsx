import { MovieReels } from '@showtime-org/3d/src/components/MovieReelsScene/MovieReels'
import Link from 'next/link'
import { IconSearch } from '@tabler/icons-react'

export default function Home() {
  return (
    <main>
      <div className="relative h-[calc(100vh-4rem)]">
        <div className="absolute top-0 bottom-0 left-0 right-0 p-2">
          <MovieReels />
        </div>
        {/* <div className="container relative mx-auto"> */}

        <div
          className="absolute bottom-0 flex flex-col items-center justify-center space-y-2 font-black -translate-x-1/2 left-1/2 "
          style={{ perspective: '200px' }}
        >
          <div
            style={{ transform: 'rotateX(22deg)' }}
            className="flex flex-col justify-center p-12 text-white bg-gradient-to-t from-black to-transparent"
          >
            <div className="z-10 inline-block text-3xl">It is</div> <br />
            <div className="z-10 inline-block text-8xl">Showtime!</div>
            <Link
              href="/cinemas"
              className="z-10 flex items-center gap-2 px-3 py-2 text-xl font-medium underline underline-offset-4"
            >
              <IconSearch /> Search movies now
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
