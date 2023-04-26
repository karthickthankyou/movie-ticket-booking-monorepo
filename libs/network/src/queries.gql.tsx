import { gql } from 'graphql-request'

export const createCinema = gql`
  mutation createCinema($createCinemaInput: CreateCinemaInput!) {
    createCinema(createCinemaInput: $createCinemaInput) {
      id
    }
  }
`

export const createMovie = gql`
  mutation createMovie($createMovieInput: CreateMovieInput!) {
    createMovie(createMovieInput: $createMovieInput) {
      id
    }
  }
`

export const findCinema = gql`
  query findCinema($uid: String!) {
    cinema: cinemaByManager(uid: $uid) {
      id
      name
      screens {
        id
        number
        seatsCount
        showtimes {
          id
          startTime
        }
      }
    }
  }
`

export const createScreen = gql`
  mutation createScreen($createScreenInput: CreateScreenInput!) {
    createScreen(createScreenInput: $createScreenInput) {
      id
    }
  }
`

export const searchCinemas = gql`
  query SearchCinemas(
    $locationFilter: LocationFilterInput!
    $where: CinemaWhereInput
    $orderBy: [CinemaOrderByWithRelationInput!]
    $cursor: CinemaWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CinemaScalarFieldEnum!]
  ) {
    cinemas: searchCinemas(
      locationFilter: $locationFilter
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      address {
        lat
        lng
      }
      name
      id
    }
  }
`

export const login = gql`
  mutation Login($credentials: LoginInput!) {
    login(credentials: $credentials) {
      displayName
      email
      expiresIn
      idToken
      kind
      localId
      refreshToken
    }
  }
`

export const movies = gql`
  query movies(
    $where: MovieWhereInput
    $orderBy: [MovieOrderByWithRelationInput!]
    $cursor: MovieWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MovieScalarFieldEnum!]
  ) {
    movies(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      genre
      director
      duration
      createdAt
      posterUrl
      releaseDate
      title
      updatedAt
    }
    moviesCount(where: $where) {
      count
    }
  }
`

export const createShowtime = gql`
  mutation createShowtime($createShowtimeInput: CreateShowtimeInput!) {
    createShowtime(createShowtimeInput: $createShowtimeInput) {
      count
    }
  }
`

export const moviesPerCinema = gql`
  query moviesPerCinema($cinemaId: Int!) {
    moviesPerCinema(cinemaId: $cinemaId) {
      id
      director
      title
      posterUrl
    }
  }
`

export const bookedSeatsInShowtime = gql`
  query bookedSeatsInShowtime($showtimeId: Int!) {
    bookedSeatsInShowtime(showtimeId: $showtimeId) {
      booked
      total
    }
  }
`

export const showtimesInCinema = gql`
  query showtimesInCinema($cinemaId: Int!, $movieId: Int!) {
    showtimesInCinema(cinemaId: $cinemaId, movieId: $movieId) {
      date
      showtimes {
        id
        startTime

        screen {
          id
          price
          projectionType
          soundSystemType
          number
        }
      }
    }
  }
`

export const showtime = gql`
  query showtime($where: ShowtimeWhereUniqueInput, $showtimeId: Int!) {
    showtime(where: $where) {
      screen {
        seats {
          row
          column
          booked(showtimeId: $showtimeId)
        }
      }
    }
  }
`

export const createBooking = gql`
  mutation createBooking($createBookingInput: CreateBookingInput!) {
    createBooking(createBookingInput: $createBookingInput) {
      id
    }
  }
`

export const tickets = gql`
  query tickets(
    $distinct: [TicketScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: TicketWhereUniqueInput
    $orderBy: [TicketOrderByWithRelationInput!]
    $where: TicketWhereInput
  ) {
    ticketsCount(where: $where) {
      count
    }
    tickets(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      uid
      qrCode
      id
      bookings {
        row
        column
        showtime {
          screen {
            seats {
              row
              column
            }
            number
            cinema {
              name
            }
          }
          startTime
          movie {
            title
            posterUrl
          }
        }
      }
    }
  }
`
