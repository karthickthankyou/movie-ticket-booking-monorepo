import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Map } from '../../organisms/Map'
import { Panel } from '../../organisms/Map/Panel'
import { DefaultZoomControls } from '../../organisms/Map/ZoomControls/ZoomControls'
import { LngLatBounds, Marker, useMap } from 'react-map-gl'
import {
  SearchCinemasQuery,
  useBookedSeatsInShowtimeQuery,
  useMoviesPerCinemaLazyQuery,
  useMoviesPerCinemaQuery,
  useSearchCinemasLazyQuery,
  useShowtimesInCinemaLazyQuery,
} from '@showtime-org/network/src/generated'
import { BrandIcon } from '../../atoms/BrandIcon'
import { Dialog } from '../../atoms/Dialog'
import { useAppDispatch, useAppSelector } from '@showtime-org/store'
import Link from 'next/link'
import {
  addCityId,
  addMovieId,
  addScreenId,
  addShowtimeId,
  resetMovies,
} from '@showtime-org/store/movies/store'
import { CinemaSelectCard } from '../../organisms/CinemaSelectCard'
import { ShowtimeSelectCard } from '../../organisms/ShowtimeSelectCard'
import { format, isSameDay, isToday, isTomorrow } from 'date-fns'
import { IconArmchair, IconBox, IconMapPinFilled } from '@tabler/icons-react'
import { useKeypress } from '@showtime-org/hooks'
import { Loader, LoaderPanel } from '../../molecules/Loader'
import { SelectSeats } from '../SelectSeats'
import { random } from '../SelectSeats/util'

export interface ISearchCinemasProps {}

export const SearchCinemas = ({}: ISearchCinemasProps) => {
  return (
    <Map>
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>

      <DisplayAllCinemas />

      <Panel position="left-top">
        <SetCity />
      </Panel>
    </Map>
  )
}

export const CityButton = ({ children }: { children: ReactNode }) => {
  return <button className="p-3 rounded hover:shadow-2xl">{children}</button>
}

export const cities = [
  { id: 1, name: 'சென்னை', englishName: 'Chennai', lat: 13.0827, lng: 80.2707 },
  {
    id: 2,
    name: 'ಬೆಂಗಳೂರು',
    englishName: 'Bengaluru',
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: 3,
    name: 'തിരുവനന്തപുരം',
    englishName: 'Trivandrum',
    lat: 8.5241,
    lng: 76.9366,
  },

  {
    id: 4,
    name: 'అమరావతి',
    englishName: 'Amaravati',
    lat: 16.5062,
    lng: 80.648,
  },
  {
    id: 5,
    name: 'హైదరాబాద్',
    englishName: 'Hyderabad',
    lat: 17.385,
    lng: 78.4867,
  },
  { id: 7, name: 'मुंबई', englishName: 'Mumbai', lat: 19.076, lng: 72.8777 },
  { id: 8, name: 'पुणे', englishName: 'Pune', lat: 18.5204, lng: 73.8567 },
  { id: 9, name: 'কলকাতা', englishName: 'Kolkata', lat: 22.5726, lng: 88.3639 },
  {
    id: 6,
    name: 'नयी दिल्ली',
    englishName: 'New Delhi',
    lat: 28.6139,
    lng: 77.209,
  },
]

export const SetCity = () => {
  const selectedCityId = useAppSelector((state) => state.movies.selectedCityId)
  const [open, setOpen] = useState(() => !selectedCityId)
  const dispatch = useAppDispatch()

  useKeypress(['l'], () => setOpen((state) => !state))

  const { current: map } = useMap()
  return (
    <div>
      <button
        className="flex flex-col items-center gap-1"
        onClick={() => setOpen(true)}
      >
        <IconMapPinFilled />
        <div className="flex items-center justify-center w-4 h-4 border rounded shadow">
          L
        </div>
      </button>
      <Dialog open={open} setOpen={setOpen} title={'Select city'}>
        <div className="grid grid-cols-3 gap-4 ">
          {cities.map((city) => (
            <button
              onClick={() => {
                dispatch(addCityId(city.id))
                map?.flyTo({
                  center: { lat: city.lat, lng: city.lng },
                  zoom: 10,
                  essential: true,
                })
                setOpen(false)
              }}
              className="p-3 rounded hover:shadow-2xl"
              key={city.id}
            >
              <div className="text-lg">{city.name}</div>{' '}
              <div className="text-xs text-gray-600">{city.englishName}</div>{' '}
            </button>
          ))}
        </div>
      </Dialog>
    </div>
  )
}

export const DisplayAllCinemas = () => {
  const { current: map } = useMap()

  const [bounds, setBounds] = useState<LngLatBounds>()
  useEffect(() => {
    const bounds = map?.getBounds()
    setBounds(bounds)
  }, [])

  const locationFilter = useMemo(
    () => ({
      ne_lat: bounds?.getNorthEast().lat || 0,
      ne_lng: bounds?.getNorthEast().lng || 0,
      sw_lat: bounds?.getSouthWest().lat || 0,
      sw_lng: bounds?.getSouthWest().lng || 0,
    }),
    [bounds],
  )

  const [refetch, { data, loading }] = useSearchCinemasLazyQuery({
    variables: {
      locationFilter,
    },
  })

  useEffect(() => {
    refetch()
  }, [bounds, refetch])

  return (
    <div>
      {data?.cinemas.map((cinema) => (
        <MarkerWithPopup key={cinema.id} marker={cinema} />
      ))}
    </div>
  )
}

export const MarkerWithPopup = ({
  marker,
}: {
  marker: SearchCinemasQuery['cinemas'][number]
}) => {
  if (!marker.address?.lat || !marker.address?.lng || !marker.id) {
    return null
  }

  const [openDialog, setOpenDialog] = useState(false)
  const dispatch = useAppDispatch()

  return (
    <div key={marker?.id}>
      <Dialog
        className="w-96"
        title={marker.name}
        open={openDialog}
        setOpen={setOpenDialog}
      >
        <BookingStepper cinemaId={marker.id} />
      </Dialog>
      <Marker
        anchor="bottom"
        latitude={marker.address.lat}
        longitude={marker.address.lng}
        onClick={() => {
          dispatch(resetMovies())
          setOpenDialog(true)
        }}
      >
        <BrandIcon className="cursor-pointer" />
        <MarkerText>{marker.name.split(' ').slice(0, 2).join(' ')}</MarkerText>
      </Marker>
    </div>
  )
}

export const MarkerText = ({ children }: { children: ReactNode }) => (
  <div className="absolute max-w-xs -translate-x-1/2 left-1/2">
    <div className="mt-1 leading-4 text-center min-w-max px-0.5 rounded backdrop-blur-sm bg-white/50">
      {children}
    </div>
  </div>
)

export const BookingStepper = ({ cinemaId }: { cinemaId: number }) => {
  const { data, loading } = useMoviesPerCinemaQuery({ variables: { cinemaId } })
  return (
    <div className="space-y-8">
      <SelectMovie cinemaId={cinemaId} />
      <SelectShowtimes cinemaId={cinemaId} />
      <SelectSeats />
    </div>
  )
}

export const SelectMovie = ({ cinemaId }: { cinemaId: number }) => {
  const [moviesPerCinema, { data, loading }] = useMoviesPerCinemaLazyQuery()

  useEffect(() => {
    if (cinemaId)
      moviesPerCinema({
        variables: { cinemaId },
      })
  }, [cinemaId])

  const dispatch = useAppDispatch()
  const selectedMovieId = useAppSelector(
    (state) => state.movies.selectedMovieId,
  )

  if (data?.moviesPerCinema.length === 0) {
    return <div>Currently no shows are running in this cinema.</div>
  }

  return (
    <div>
      <div>Select movie</div>
      {loading ? <LoaderPanel /> : null}

      <div className="grid grid-cols-3 gap-2">
        {data?.moviesPerCinema.map((movie) => (
          <button key={movie.id} onClick={() => dispatch(addMovieId(movie.id))}>
            <CinemaSelectCard
              movie={movie}
              selected={selectedMovieId === movie.id}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export const ShowRemainingSeats = ({ showtimeId }: { showtimeId: number }) => {
  const { data, loading } = useBookedSeatsInShowtimeQuery({
    variables: { showtimeId },
  })
  if (loading) return <Loader />
  const totalSeats = data?.bookedSeatsInShowtime.total || 0
  const bookedSeats = data?.bookedSeatsInShowtime.booked || 0
  const remainingSeats = totalSeats - bookedSeats
  return (
    <div className="text-xs">
      {remainingSeats} <IconArmchair className="inline w-4 h-4" />
    </div>
  )
}

const formatDate = (dateString: string) => {
  const date = new Date(+dateString)
  if (isToday(date)) {
    return 'Today'
  } else if (isTomorrow(date)) {
    return 'Tomorrow'
  } else {
    return format(date, 'PPPP')
  }
}

export const noShowsMessages = [
  'This movie is taking a short vacation! Check back soon for showtimes.',
  'Our screen is having a siesta from this film. Stay tuned for more shows.',
  "This movie is playing hide-and-seek, and it's winning! Check back later for showtimes.",
  "It's the film's day out, but don't worry, it'll be back soon!",
  "The projector has chosen a different lineup today. Stay tuned for this movie's return.",
  'This movie is nowhere to be scene today, but keep an eye out for future showtimes.',
  'A bit of movie mischief today means this film is taking a break. Check back soon!',
  'The popcorn party is paused for this movie. Stay tuned for future showtimes.',
  'Taking a break from this flick for a fiesta of other films! Check back later.',
  "It's time for some reel relaxation. This movie will return soon!",
]

export const SelectShowtimes = ({ cinemaId }: { cinemaId: number }) => {
  const movieId = useAppSelector((state) => state.movies.selectedMovieId)
  const selectedShowtimeId = useAppSelector(
    (state) => state.movies.selectedShowtimeId,
  )

  const [showtimesInCinema, { data, loading }] = useShowtimesInCinemaLazyQuery()

  useEffect(() => {
    if (cinemaId && movieId)
      showtimesInCinema({ variables: { cinemaId, movieId } })
  }, [cinemaId, movieId])

  const dispatch = useAppDispatch()

  const containsTodaysDate = () => {
    const today = new Date()
    return data?.showtimesInCinema.some((dateItem) => {
      const date = new Date(+dateItem.date)
      return isSameDay(date, today)
    })
  }

  if (!movieId) return null

  return (
    <div>
      <div>Select showtime</div>
      {loading ? <LoaderPanel /> : null}

      <div className="flex flex-col gap-4 ">
        {!containsTodaysDate() ? (
          <>
            <div className="text-lg font-semibold ">Today</div>
            <div className="flex flex-col items-center justify-center w-full text-gray-800 rounded h-36 bg-gray-50">
              <div className="flex items-center gap-1 text-lg font-semibold">
                <IconBox />
                <div>No shows.</div>
              </div>
              <div className="max-w-xs text-sm text-center">
                {random(noShowsMessages)}
              </div>
            </div>
          </>
        ) : null}
        {data?.showtimesInCinema.map((date) => (
          <div key={date.date} className="w-full">
            <div className="mb-2 text-lg font-semibold">
              {formatDate(date.date)}
            </div>
            <div className="grid grid-cols-3 gap-2 ">
              {[...date.showtimes]
                .sort((a, b) => a.startTime.localeCompare(b.startTime))
                .map((showtime) => (
                  <button
                    key={showtime.id}
                    onClick={() => {
                      dispatch(addShowtimeId(showtime.id))
                      dispatch(addScreenId(showtime.screen.id))
                    }}
                  >
                    <ShowtimeSelectCard
                      selected={showtime.id === selectedShowtimeId}
                      key={showtime.id}
                      showtime={showtime}
                    />
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Success = () => {
  return (
    <div className="flex flex-col items-start justify-center py-2 ">
      <h2 className="mb-4 text-2xl font-bold ">
        🎉🎉🎉 Congratulations! Your ticket is booked. 🎉🎉🎉
      </h2>
      <p className="text-lg text-gray-700">
        Check your{' '}
        <Link
          href="/tickets"
          className="font-semibold underline underline-offset-4"
        >
          Tickets
        </Link>{' '}
        for more information.
      </p>
    </div>
  )
}
