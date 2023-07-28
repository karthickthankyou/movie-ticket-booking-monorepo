import axios from 'axios'

import {
  namedOperations,
  useCreateBookingMutation,
  useShowtimeLazyQuery,
} from '@showtime-org/network/src/generated'
import { loadStripe } from '@stripe/stripe-js'
import { StripeItemType } from '@showtime-org/types'

import { useAppDispatch, useAppSelector } from '@showtime-org/store'
import { selectUid } from '@showtime-org/store/user'
import { useEffect } from 'react'
import { Square, StaightMovieScreen } from '../CreateCinema/CreateCinema'
import { LoaderPanel } from '../../molecules/Loader'
import {
  addSeat,
  resetMovies,
  resetSeats,
} from '@showtime-org/store/movies/store'
import { generateSeatComment, groupSeatsByRow } from './util'
import { SeatNumber } from '../../molecules/SeatNumber'
import { Success } from '../SearchCinemas/SearchCinemas'
import { Button } from '../../atoms/Button'
import { notification$ } from '@showtime-org/util/subjects'

export interface ISelectSeatsProps {}

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

  //   const [createBooking, { loading: createBookingLoading, data: bookingData }] =
  //     useCreateBookingMutation()

  if (!selectedShowtimeId) return null

  return (
    <div>
      <div>
        <StaightMovieScreen />
        {loading ? <LoaderPanel /> : null}
        <div className="flex justify-center overflow-x-auto ">
          <div>
            {Object.entries(rows).map(([rowNumber, seatsInRow]) => (
              <div key={rowNumber} className="flex gap-1 mt-1">
                {seatsInRow.map((seat) => (
                  <button
                    key={`${seat.row}-${seat.column}`}
                    disabled={Boolean(seat?.booked)}
                    onClick={() => {
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
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="text-lg font-light">
          {generateSeatComment({ allSeats: rows, selectedSeats })}
        </div>

        {selectedSeats.length ? (
          <div className="my-4">
            <div>Seats</div>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map(({ row, column }) => (
                <SeatNumber
                  key={`${row}-${column}`}
                  row={row}
                  column={column}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {/* {bookingData?.createBooking ? <Success /> : null} */}
      <div className="flex justify-between mt-4">
        <Button
          onClick={() => dispatch(resetMovies())}
          variant="text"
          size="none"
        >
          Reset
        </Button>
        {selectedSeats.length ? (
          <Button
            onClick={async () => {
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
              createPaymentSession(uid, {
                screenId: selectedScreenId,
                showtimeId: selectedShowtimeId,
                seats: selectedSeats.map(({ column, row }) => ({
                  row,
                  column,
                  price: data?.showtime.screen.price || 0,
                })),
              })

              dispatch(resetSeats())
            }}
          >
            Create booking
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export const createPaymentSession = async (
  uid: string,
  bookingInfo: StripeItemType,
) => {
  const checkoutSession = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + '/stripe',
    {
      bookingInfo,
      uid,
    },
  )

  console.log('checkoutSession', checkoutSession)

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const stripePromise = loadStripe(publishableKey || '')
  const stripe = await stripePromise
  const result = await stripe?.redirectToCheckout({
    sessionId: checkoutSession.data.sessionId,
  })

  return result
}
