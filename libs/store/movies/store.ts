import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NotificationType } from '@showtime-org/types'

import { RootState } from '..'

type SeatRowcolumn = {
  row: number
  column: number
}

export type MovieSliceType = {
  selectedCinemaId?: number
  selectedMovieId?: number
  selectedScreenId?: number
  selectedShowtimeId?: number
  selectedSeats: SeatRowcolumn[]
}

const initialState: MovieSliceType = { selectedSeats: [] }

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addCinemaId: (
      state,
      action: PayloadAction<MovieSliceType['selectedCinemaId']>,
    ) => {
      state.selectedCinemaId = action.payload
    },
    addMovieId: (
      state,
      action: PayloadAction<MovieSliceType['selectedMovieId']>,
    ) => {
      state.selectedMovieId = action.payload
      state.selectedShowtimeId = undefined
      state.selectedSeats = []
    },
    addScreenId: (
      state,
      action: PayloadAction<MovieSliceType['selectedScreenId']>,
    ) => {
      state.selectedScreenId = action.payload
    },
    addShowtimeId: (
      state,
      action: PayloadAction<MovieSliceType['selectedShowtimeId']>,
    ) => {
      state.selectedShowtimeId = action.payload
      state.selectedSeats = []
    },
    addSeat: (state, action: PayloadAction<SeatRowcolumn>) => {
      const existingSelection = state.selectedSeats?.find(
        (selectedSeat) =>
          action.payload.column === selectedSeat.column &&
          action.payload.row === selectedSeat.row,
      )

      if (existingSelection) {
        state.selectedSeats = state.selectedSeats?.filter(
          (seat) =>
            !(
              seat.column === action.payload.column &&
              seat.row === action.payload.row
            ),
        )
      } else {
        state.selectedSeats = [...state.selectedSeats, action.payload]
      }
    },

    resetSeats: (state) => {
      state.selectedSeats = []
    },
    resetMovies: () => {
      return initialState
    },
  },
})

export const {
  addMovieId,
  addScreenId,
  addShowtimeId,
  addSeat,
  addCinemaId,
  resetMovies,
  resetSeats,
} = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer
