import { ReactNode, SetStateAction, useEffect, useMemo, useState } from 'react'
import { Map } from '../../organisms/Map'
import { Panel } from '../../organisms/Map/Panel'
import { DefaultZoomControls } from '../../organisms/Map/ZoomControls/ZoomControls'
import { Square, CurvedScreen } from '../CreateCinema/CreateCinema'
import { LngLatBounds, Marker, useMap } from 'react-map-gl'
import {
  SearchCinemasQuery,
  namedOperations,
  useCreateBookingMutation,
  useMoviesPerCinemaLazyQuery,
  useMoviesPerCinemaQuery,
  useSearchCinemasLazyQuery,
  useShowtimeLazyQuery,
  useShowtimesInCinemaLazyQuery,
} from '@showtime-org/network/src/generated'
import { BrandIcon } from '../../atoms/BrandIcon'
import { Dialog } from '../../atoms/Dialog'
import { useAppDispatch, useAppSelector } from '@showtime-org/store'
import {
  addCityId,
  addMovieId,
  addScreenId,
  addSeat,
  addShowtimeId,
  resetSeats,
} from '@showtime-org/store/movies/store'
import { ShowtimeQuery } from '@showtime-org/network/src/generated'
import { Button } from '../../atoms/Button'
import { selectUid } from '@showtime-org/store/user'
import { notification$ } from '@showtime-org/util/subjects'
import { CinemaSelectCard } from '../../organisms/CinemaSelectCard'
import { ShowtimeSelectCard } from '../../organisms/ShowtimeSelectCard'
import { format } from 'date-fns'
import {
  IconLocation,
  IconLocationBroken,
  IconMapPinFilled,
} from '@tabler/icons-react'

export interface ISearchCinemasProps {}

export const SearchCinemas = ({}: ISearchCinemasProps) => {
  return (
    <Map>
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>

      <DisplayAllKitchens />

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
    name: 'തിരുവനന്തപുരം',
    englishName: 'Thiruvananthapuram',
    lat: 8.5241,
    lng: 76.9366,
  },
  {
    id: 3,
    name: 'ಬೆಂಗಳೂರು',
    englishName: 'Bengaluru',
    lat: 12.9716,
    lng: 77.5946,
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

  { id: 10, name: 'जयपुर', englishName: 'Jaipur', lat: 26.9124, lng: 75.7873 },
]

export const SetCity = () => {
  const selectedCityId = useAppSelector((state) => state.movies.selectedCityId)
  const [open, setOpen] = useState(() => !selectedCityId)
  const dispatch = useAppDispatch()

  const { current: map } = useMap()
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <IconMapPinFilled />
      </button>
      <Dialog open={open} setOpen={setOpen} title={'Select city'}>
        <div className="grid grid-cols-3 gap-4 ">
          {cities.map((city) => (
            <button
              onClick={() => {
                dispatch(addCityId(city.id))
                map?.flyTo({
                  center: { lat: city.lat, lng: city.lng },
                  essential: true,
                })
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

export const DisplayAllKitchens = () => {
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
          setOpenDialog(true)
        }}
      >
        <BrandIcon className="cursor-pointer" animate />
        <MarkerText>{marker.name}</MarkerText>
      </Marker>
    </div>
  )
}

export const MarkerText = ({ children }: { children: ReactNode }) => (
  <div className="absolute -translate-x-1/2 left-1/2">
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

  return (
    <div>
      <div>Select movie</div>
      <div className="grid grid-cols-3 gap-2">
        {data?.moviesPerCinema.map((movie) => (
          <button onClick={() => dispatch(addMovieId(movie.id))}>
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

  console.log('data ', data)

  if (!movieId) return null

  return (
    <div>
      <div>Select showtime</div>
      <div className="flex flex-col items-start gap-4">
        {data?.showtimesInCinema.map((date) => (
          <div key={date.date}>
            <div className="mb-2 text-xs font-semibold">
              {format(new Date(+date.date), 'PPPP')}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {date.showtimes.map((showtime) => (
                <button
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

export type PartialSeat = ShowtimeQuery['showtime']['screen']['seats'][number]

const groupSeatsByRow = (
  seats: PartialSeat[],
): Record<number, PartialSeat[]> => {
  return seats.reduce(
    (acc: Record<number, PartialSeat[]>, seat: PartialSeat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = []
      }
      acc[seat.row].push(seat)
      return acc
    },
    {},
  )
}

export const SelectSeats = () => {
  const selectedShowtimeId = useAppSelector(
    (state) => state.movies.selectedShowtimeId,
  )
  const selectedScreenId = useAppSelector(
    (state) => state.movies.selectedScreenId,
  )
  const uid = useAppSelector(selectUid)

  const [getShowtime, { data, loading }] = useShowtimeLazyQuery()

  useEffect(() => {
    if (selectedShowtimeId)
      getShowtime({
        variables: {
          where: { id: selectedShowtimeId },
          showtimeId: selectedShowtimeId,
        },
      })
  }, [selectedShowtimeId])

  const rows = groupSeatsByRow(data?.showtime.screen.seats || []) || []

  const dispatch = useAppDispatch()

  const selectedSeats = useAppSelector((state) => state.movies.selectedSeats)

  const [createBooking, { loading: createBookingLoading }] =
    useCreateBookingMutation()
  if (!selectedShowtimeId) return null

  return (
    <div>
      <div>
        {Object.entries(rows).map(([rowNumber, seatsInRow]) => (
          <div key={rowNumber} className="flex gap-1 mb-1">
            {seatsInRow.map((seat) => (
              <button
                disabled={Boolean(seat?.booked)}
                onClick={() => {
                  console.log('Seat ', seat)
                  dispatch(addSeat({ column: seat.column, row: seat.row }))
                }}
              >
                <Square
                  key={`${seat.row}-${seat.column}`}
                  booked={Boolean(seat?.booked)}
                  selected={Boolean(
                    selectedSeats?.find(
                      (selectedSeat) =>
                        seat.column === selectedSeat.column &&
                        seat.row === selectedSeat.row,
                    ),
                  )}
                />
              </button>
            ))}
          </div>
        ))}
        <CurvedScreen />
      </div>
      {selectedSeats.length ? (
        <Button
          loading={createBookingLoading}
          onClick={async () => {
            console.log('sclick', selectedScreenId, uid)
            if (!selectedScreenId) {
              notification$.next({
                message: 'Semething went wrong.',
              })

              return
            }
            if (!uid) {
              notification$.next({ message: 'You are not logged in.' })
              return
            }
            await createBooking({
              variables: {
                createBookingInput: {
                  seats: selectedSeats,
                  screenId: selectedScreenId,
                  showtimeId: selectedShowtimeId,
                  userId: uid,
                },
              },
              refetchQueries: [namedOperations.Query.showtime],
              awaitRefetchQueries: true,
            })

            dispatch(resetSeats())
          }}
        >
          Create booking
        </Button>
      ) : null}
    </div>
  )
}
