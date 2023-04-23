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
          endTime
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
  }
`
