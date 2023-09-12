import {
  CinemasQuery,
  ShowtimeStatus,
  namedOperations,
  useBookedSeatsInShowtimeQuery,
  useUpdateShowtimeMutation,
} from '@showtime-org/network/src/generated'
import { useState } from 'react'
import { Loader } from '../../molecules/Loader'
import { CreateScreen } from '../CreateScreen'
import { format } from 'date-fns'
import { Accordion } from '../../molecules/Accordion'
import { IconDotsVertical } from '@tabler/icons-react'
import { Menu } from '@headlessui/react'
import { Button } from '../../atoms/Button'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { ConsoleLog } from '../../molecules/ConsoleLog'
import { CreateShowtime } from '../CreateShowtime'
import { FormProviderCreateShowtime } from '@showtime-org/forms/src/createShowtime'

export interface IManagerProps {
  cinemas: CinemasQuery['cinemas']
}

export const Manager = ({ cinemas }: IManagerProps) => {
  return (
    <div className="space-y-8">
      {cinemas.map((cinema) => (
        <ShowCinema cinema={cinema} />
      ))}
    </div>
  )
}

export type SimpleShowtimes =
  CinemasQuery['cinemas'][number]['screens'][number]['showtimes']

interface GroupedShowtimes {
  [date: string]: SimpleShowtimes
}

const groupByDate = (showtimes: SimpleShowtimes): GroupedShowtimes => {
  const grouped = showtimes.reduce((acc, showtime) => {
    const date = showtime.startTime.split('T')[0]
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(showtime)
    return acc
  }, {} as GroupedShowtimes)

  // Convert the grouped object into an array of key-value pairs
  const groupedArray = Object.entries(grouped)

  // Sort the array by date
  const sortedArray = groupedArray.sort(([dateA], [dateB]) => {
    return dateA.localeCompare(dateB)
  })

  // Convert the sorted array back into an object
  const sortedGrouped: GroupedShowtimes = sortedArray.reduce(
    (acc, [date, showtimes]) => {
      acc[date] = showtimes
      return acc
    },
    {} as GroupedShowtimes,
  )

  return sortedGrouped
}

export const ShowCinema = ({
  cinema,
}: {
  cinema: CinemasQuery['cinemas'][number]
}) => {
  const [open, setOpen] = useState(false)
  console.log('cinema.screens', cinema.screens)

  if (!cinema.screens) {
    return <CreateScreen />
  }
  return (
    <div>
      <div className="text-xl font-semibold">{cinema.name}</div>
      <div>
        {cinema.screens.map((screen) => (
          <Accordion title={'Screen ' + screen.number}>
            <ShowScreen screen={screen} />
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export const ShowScreen = ({
  screen,
}: {
  screen: CinemasQuery['cinemas'][number]['screens'][number]
}) => {
  if (!screen.showtimes.length) {
    return (
      <div>
        <div>No shows.</div>
        <FormProviderCreateShowtime>
          <CreateShowtime />
        </FormProviderCreateShowtime>
      </div>
    )
  }
  console.log('screen.showtimes', screen.showtimes)
  return (
    <div className="space-y-6">
      {Object.entries(groupByDate(screen.showtimes)).map(
        ([date, showtimes]) => (
          <div key={date}>
            <div className="mb-2">{format(new Date(date), 'PP')}</div>
            <div className="grid grid-cols-4 gap-2">
              {showtimes
                .sort((a, b) => a.startTime.localeCompare(b.startTime))
                .map((showtime) => (
                  <div key={showtime.id} className="relative flex gap-2">
                    <img
                      src={showtime.movie.posterUrl || ''}
                      className="object-cover w-12 h-full"
                    />
                    <div>
                      <div className="font-bold">
                        {(() => {
                          console.log('showtime.startTime ', showtime.startTime)
                          return null
                        })()}
                        {format(new Date(showtime.startTime), 'p')}
                      </div>
                      <div>{showtime.movie.title}</div>
                      <ShowShowtime showtimeId={showtime.id} />
                      {showtime.status ? (
                        <div className="text-xs">{showtime.status}</div>
                      ) : null}
                    </div>
                    <MenuShowtimeOptions showtime={showtime} />
                  </div>
                ))}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export const ShowShowtime = ({ showtimeId }: { showtimeId: number }) => {
  const { data, loading } = useBookedSeatsInShowtimeQuery({
    variables: { showtimeId },
  })

  if (loading) return <Loader />

  return (
    <div className="text-xs">
      {data?.bookedSeatsInShowtime.booked} of{' '}
      {data?.bookedSeatsInShowtime.total} seats booked.
    </div>
  )
}

export const MenuShowtimeOptions = ({
  showtime,
}: {
  showtime: SimpleShowtimes[number]
}) => {
  const [updateShowtimeLive, { data: dataLive, loading: loadingLive }] =
    useUpdateShowtimeMutation()

  const [
    updateShowtimePostpone,
    { data: dataPostpone, loading: loadingPostpone },
  ] = useUpdateShowtimeMutation()

  const [updateShowtimeCancel, { data: dataCancel, loading: loadingCancel }] =
    useUpdateShowtimeMutation()

  const [postponeBy, setPostponeBy] = useState(10)

  return (
    <Menu>
      <Menu.Button>
        <IconDotsVertical />
      </Menu.Button>
      <Menu.Items className="absolute flex flex-col gap-2 p-2 bg-white shadow-md left-1/2 top-1/2">
        {showtime.status === ShowtimeStatus.Cancelled ? (
          <Button
            size="none"
            variant="text"
            loading={loadingLive}
            onClick={async () =>
              await updateShowtimeLive({
                variables: {
                  updateShowtimeInput: {
                    id: showtime.id,
                    status: null,
                  },
                },
                refetchQueries: [namedOperations.Query.cinemas],
                awaitRefetchQueries: true,
              })
            }
            className="text-left text-green"
          >
            Set live
          </Button>
        ) : null}

        <div>
          <HtmlLabel title="Postpone">
            <HtmlInput
              value={postponeBy}
              type="number"
              onChange={(v) => {
                setPostponeBy(+v.target.value)
              }}
            />
          </HtmlLabel>
          <Button
            size="none"
            variant="text"
            loading={loadingPostpone}
            className="text-left text-black hover:underline underline-offset-4"
            onClick={async () => {
              const newStartTime = new Date(showtime.startTime)
              newStartTime.setMinutes(newStartTime.getMinutes() + postponeBy)
              const newStartTimeString = newStartTime.toISOString()
              await updateShowtimePostpone({
                variables: {
                  updateShowtimeInput: {
                    id: showtime.id,
                    startTime: newStartTimeString,
                    status: ShowtimeStatus.Postponed,
                  },
                },
                refetchQueries: [namedOperations.Query.cinemas],
                awaitRefetchQueries: true,
              })
              close()
            }}
          >
            Postpone show
          </Button>
        </div>

        <Button
          size="none"
          variant="text"
          loading={loadingCancel}
          onClick={async () => {
            await updateShowtimeCancel({
              variables: {
                updateShowtimeInput: {
                  id: showtime.id,
                  status: ShowtimeStatus.Cancelled,
                },
              },
              refetchQueries: [namedOperations.Query.cinemas],
              awaitRefetchQueries: true,
            })
            close()
          }}
          className="text-left text-red hover:underline underline-offset-4"
        >
          Cancel show
        </Button>
      </Menu.Items>
    </Menu>
  )
}
