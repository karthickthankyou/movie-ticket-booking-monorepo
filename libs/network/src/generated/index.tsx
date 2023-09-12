import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Address = {
  __typename?: 'Address'
  address: Scalars['String']
  cinemaId?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  lat: Scalars['Float']
  lng: Scalars['Float']
  updatedAt: Scalars['DateTime']
}

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  cinema?: InputMaybe<CinemaOrderByWithRelationInput>
  cinemaId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>
  isNot?: InputMaybe<AddressWhereInput>
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>
  NOT?: InputMaybe<Array<AddressWhereInput>>
  OR?: InputMaybe<Array<AddressWhereInput>>
  address?: InputMaybe<StringFilter>
  cinema?: InputMaybe<CinemaRelationFilter>
  cinemaId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput'
  count: Scalars['Int']
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  count: Scalars['Int']
}

export type Booking = {
  __typename?: 'Booking'
  column: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  row: Scalars['Int']
  screenId: Scalars['Int']
  seat?: Maybe<Seat>
  showtime: Showtime
  showtimeId: Scalars['Int']
  ticket?: Maybe<Ticket>
  ticketId?: Maybe<Scalars['Int']>
  updatedAt: Scalars['DateTime']
  user: User
  userId: Scalars['String']
}

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>
  none?: InputMaybe<BookingWhereInput>
  some?: InputMaybe<BookingWhereInput>
}

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingOrderByWithRelationInput = {
  Ticket?: InputMaybe<TicketOrderByWithRelationInput>
  column?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  row?: InputMaybe<SortOrder>
  screenId?: InputMaybe<SortOrder>
  seat?: InputMaybe<SeatOrderByWithRelationInput>
  showtime?: InputMaybe<ShowtimeOrderByWithRelationInput>
  showtimeId?: InputMaybe<SortOrder>
  ticketId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export enum BookingScalarFieldEnum {
  Column = 'column',
  CreatedAt = 'createdAt',
  Id = 'id',
  Row = 'row',
  ScreenId = 'screenId',
  ShowtimeId = 'showtimeId',
  TicketId = 'ticketId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  Ticket?: InputMaybe<TicketRelationFilter>
  column?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  row?: InputMaybe<IntFilter>
  screenId?: InputMaybe<IntFilter>
  seat?: InputMaybe<SeatRelationFilter>
  showtime?: InputMaybe<ShowtimeRelationFilter>
  showtimeId?: InputMaybe<IntFilter>
  ticketId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type BookingWhereUniqueInput = {
  id: Scalars['Int']
}

export type Cinema = {
  __typename?: 'Cinema'
  address?: Maybe<Address>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  managers: Array<Manager>
  name: Scalars['String']
  screens: Array<Screen>
  updatedAt: Scalars['DateTime']
}

export type CinemaListRelationFilter = {
  every?: InputMaybe<CinemaWhereInput>
  none?: InputMaybe<CinemaWhereInput>
  some?: InputMaybe<CinemaWhereInput>
}

export type CinemaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CinemaOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  managers?: InputMaybe<ManagerOrderByRelationAggregateInput>
  name?: InputMaybe<SortOrder>
  screens?: InputMaybe<ScreenOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type CinemaRelationFilter = {
  is?: InputMaybe<CinemaWhereInput>
  isNot?: InputMaybe<CinemaWhereInput>
}

export enum CinemaScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type CinemaWhereInput = {
  AND?: InputMaybe<Array<CinemaWhereInput>>
  NOT?: InputMaybe<Array<CinemaWhereInput>>
  OR?: InputMaybe<Array<CinemaWhereInput>>
  address?: InputMaybe<AddressRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  managers?: InputMaybe<ManagerListRelationFilter>
  name?: InputMaybe<StringFilter>
  screens?: InputMaybe<ScreenListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CinemaWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type CreateAddressInputWithoutCinemaId = {
  address: Scalars['String']
  lat: Scalars['Float']
  lng: Scalars['Float']
}

export type CreateBookingInput = {
  seats: Array<RowColumn>
  showtimeId: Scalars['Int']
  userId: Scalars['String']
}

export type CreateCinemaInput = {
  address: CreateAddressInputWithoutCinemaId
  manager: CreateManagerInputWithoutCinemaId
  name: Scalars['String']
  screens: Array<CreateScreenInputWithoutCinemaId>
}

export type CreateManagerInput = {
  cinemaId: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type CreateManagerInputWithoutCinemaId = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type CreateMovieInput = {
  director: Scalars['String']
  duration: Scalars['Int']
  genre: Genre
  posterUrl?: InputMaybe<Scalars['String']>
  releaseDate: Scalars['DateTime']
  title: Scalars['String']
}

export type CreateScreenInput = {
  cinemaId: Scalars['Int']
  columns: Scalars['Int']
  price: Scalars['Float']
  projectionType: ProjectionType
  rows: Scalars['Int']
  soundSystemType: SoundSystemType
}

export type CreateScreenInputWithoutCinemaId = {
  columns: Scalars['Int']
  price: Scalars['Float']
  projectionType: ProjectionType
  rows: Scalars['Int']
  soundSystemType: SoundSystemType
}

export type CreateSeatInput = {
  column: Scalars['Int']
  row: Scalars['Int']
  screenId: Scalars['Int']
}

export type CreateShowtimeInput = {
  movieId: Scalars['Int']
  screenId: Scalars['Int']
  showtimes: Array<Scalars['String']>
}

export type CreateUserInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type EnumGenreFilter = {
  equals?: InputMaybe<Genre>
  in?: InputMaybe<Array<Genre>>
  not?: InputMaybe<Genre>
  notIn?: InputMaybe<Array<Genre>>
}

export type EnumProjectionTypeFilter = {
  equals?: InputMaybe<ProjectionType>
  in?: InputMaybe<Array<ProjectionType>>
  not?: InputMaybe<ProjectionType>
  notIn?: InputMaybe<Array<ProjectionType>>
}

export type EnumShowtimeStatusFilter = {
  equals?: InputMaybe<ShowtimeStatus>
  in?: InputMaybe<Array<ShowtimeStatus>>
  not?: InputMaybe<ShowtimeStatus>
  notIn?: InputMaybe<Array<ShowtimeStatus>>
}

export type EnumSoundSystemTypeFilter = {
  equals?: InputMaybe<SoundSystemType>
  in?: InputMaybe<Array<SoundSystemType>>
  not?: InputMaybe<SoundSystemType>
  notIn?: InputMaybe<Array<SoundSystemType>>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Scalars['Float']>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Scalars['Float']>
}

/** Enum for roles */
export enum Genre {
  Action = 'ACTION',
  Adventure = 'ADVENTURE',
  Animation = 'ANIMATION',
  Comedy = 'COMEDY',
  Crime = 'CRIME',
  Documentary = 'DOCUMENTARY',
  Drama = 'DRAMA',
  Family = 'FAMILY',
  Fantasy = 'FANTASY',
  FilmNoir = 'FILM_NOIR',
  History = 'HISTORY',
  Horror = 'HORROR',
  Music = 'MUSIC',
  Mystery = 'MYSTERY',
  Romance = 'ROMANCE',
  SciFi = 'SCI_FI',
  Short = 'SHORT',
  Sport = 'SPORT',
  Thriller = 'THRILLER',
  War = 'WAR',
  Western = 'WESTERN',
}

export type GroupedShowtime = {
  __typename?: 'GroupedShowtime'
  date: Scalars['String']
  showtimes: Array<ShowtimeSimple>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type LocationFilterInput = {
  ne_lat: Scalars['Float']
  ne_lng: Scalars['Float']
  sw_lat: Scalars['Float']
  sw_lng: Scalars['Float']
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

export type Manager = {
  __typename?: 'Manager'
  cinema: Cinema
  cinemaId: Scalars['Int']
  createdAt: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ManagerListRelationFilter = {
  every?: InputMaybe<ManagerWhereInput>
  none?: InputMaybe<ManagerWhereInput>
  some?: InputMaybe<ManagerWhereInput>
}

export type ManagerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ManagerOrderByWithRelationInput = {
  cinema?: InputMaybe<CinemaOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ManagerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>
  NOT?: InputMaybe<Array<ManagerWhereInput>>
  OR?: InputMaybe<Array<ManagerWhereInput>>
  cinema?: InputMaybe<CinemaListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ManagerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type Movie = {
  __typename?: 'Movie'
  createdAt: Scalars['DateTime']
  director: Scalars['String']
  duration: Scalars['Int']
  genre: Genre
  id: Scalars['Int']
  posterUrl?: Maybe<Scalars['String']>
  releaseDate: Scalars['DateTime']
  showtimes: Array<Showtime>
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type MovieOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  director?: InputMaybe<SortOrder>
  duration?: InputMaybe<SortOrder>
  genre?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  posterUrl?: InputMaybe<SortOrder>
  releaseDate?: InputMaybe<SortOrder>
  showtimes?: InputMaybe<ShowtimeOrderByRelationAggregateInput>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>
  isNot?: InputMaybe<MovieWhereInput>
}

export enum MovieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Director = 'director',
  Duration = 'duration',
  Genre = 'genre',
  Id = 'id',
  PosterUrl = 'posterUrl',
  ReleaseDate = 'releaseDate',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>
  NOT?: InputMaybe<Array<MovieWhereInput>>
  OR?: InputMaybe<Array<MovieWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  director?: InputMaybe<StringFilter>
  duration?: InputMaybe<IntFilter>
  genre?: InputMaybe<EnumGenreFilter>
  id?: InputMaybe<IntFilter>
  posterUrl?: InputMaybe<StringFilter>
  releaseDate?: InputMaybe<DateTimeFilter>
  showtimes?: InputMaybe<ShowtimeListRelationFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MovieWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdmin: Admin
  createBooking: Ticket
  createCinema: Cinema
  createManager: Manager
  createMovie: Movie
  createScreen: Screen
  createSeat: Seat
  createShowtime: BatchPayload
  createUser: User
  login: LoginOutput
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeBooking: Booking
  removeCinema: Cinema
  removeManager: Manager
  removeMovie: Movie
  removeScreen: Screen
  removeSeat: Seat
  removeShowtime: Showtime
  removeTicket: Ticket
  removeUser: User
  runScheduler: Array<Showtime>
  setAdmin: Scalars['Boolean']
  setRole: Scalars['Boolean']
  updateBooking: Booking
  updateCinema: Cinema
  updateManager: Manager
  updateMovie: Movie
  updateScreen: Screen
  updateShowtime: Showtime
  updateUser: User
}

export type MutationCreateAdminArgs = {
  accessKey: Scalars['String']
  uid: Scalars['String']
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateCinemaArgs = {
  createCinemaInput: CreateCinemaInput
}

export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput
}

export type MutationCreateMovieArgs = {
  createMovieInput: CreateMovieInput
}

export type MutationCreateScreenArgs = {
  createScreenInput: CreateScreenInput
}

export type MutationCreateSeatArgs = {
  createSeatInput: CreateSeatInput
}

export type MutationCreateShowtimeArgs = {
  createShowtimeInput: CreateShowtimeInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationLoginArgs = {
  credentials: LoginInput
}

export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput
}

export type MutationRegisterArgs = {
  credentials: RegisterInput
}

export type MutationRemoveBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type MutationRemoveCinemaArgs = {
  where?: InputMaybe<CinemaWhereUniqueInput>
}

export type MutationRemoveManagerArgs = {
  where?: InputMaybe<ManagerWhereUniqueInput>
}

export type MutationRemoveMovieArgs = {
  where?: InputMaybe<MovieWhereUniqueInput>
}

export type MutationRemoveScreenArgs = {
  where?: InputMaybe<ScreenWhereUniqueInput>
}

export type MutationRemoveSeatArgs = {
  where?: InputMaybe<SeatWhereUniqueInput>
}

export type MutationRemoveShowtimeArgs = {
  where?: InputMaybe<ShowtimeWhereUniqueInput>
}

export type MutationRemoveTicketArgs = {
  where?: InputMaybe<TicketWhereUniqueInput>
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationSetAdminArgs = {
  uid: Scalars['String']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateCinemaArgs = {
  updateCinemaInput: UpdateCinemaInput
}

export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput
}

export type MutationUpdateMovieArgs = {
  updateMovieInput: UpdateMovieInput
}

export type MutationUpdateScreenArgs = {
  updateScreenInput: UpdateScreenInput
}

export type MutationUpdateShowtimeArgs = {
  updateShowtimeInput: UpdateShowtimeInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

/** Enum for screen projection types */
export enum ProjectionType {
  DolbyCinema = 'DOLBY_CINEMA',
  Imax = 'IMAX',
  Plf = 'PLF',
  Rpx = 'RPX',
  Screenx = 'SCREENX',
  Standard = 'STANDARD',
}

export type Query = {
  __typename?: 'Query'
  adminMe: Admin
  bookedSeatsInShowtime: RemainingSeats
  booking: Booking
  bookings: Array<Booking>
  cinema: Cinema
  cinemaByManager: Cinema
  cinemas: Array<Cinema>
  cinemasCount: AggregateCountOutput
  manager: Manager
  managerMe: Manager
  managers: Array<Manager>
  movie: Movie
  movies: Array<Movie>
  moviesCount: AggregateCountOutput
  moviesPerCinema: Array<Movie>
  myTickets: Array<Ticket>
  screen: Screen
  screens: Array<Screen>
  searchCinemas: Array<Cinema>
  seat: Seat
  seats: Array<Seat>
  showtime: Showtime
  showtimes: Array<Showtime>
  showtimesInCinema: Array<GroupedShowtime>
  ticket: Ticket
  tickets: Array<Ticket>
  ticketsCount: AggregateCountOutput
  user: User
  users: Array<User>
}

export type QueryBookedSeatsInShowtimeArgs = {
  showtimeId: Scalars['Int']
}

export type QueryBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryCinemaArgs = {
  where?: InputMaybe<CinemaWhereUniqueInput>
}

export type QueryCinemaByManagerArgs = {
  uid: Scalars['String']
}

export type QueryCinemasArgs = {
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CinemaOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CinemaWhereInput>
}

export type QueryCinemasCountArgs = {
  where?: InputMaybe<CinemaWhereInput>
}

export type QueryManagerArgs = {
  where?: InputMaybe<ManagerWhereUniqueInput>
}

export type QueryManagersArgs = {
  cursor?: InputMaybe<ManagerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManagerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManagerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ManagerWhereInput>
}

export type QueryMovieArgs = {
  where?: InputMaybe<MovieWhereUniqueInput>
}

export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<MovieWhereInput>
}

export type QueryMoviesCountArgs = {
  where?: InputMaybe<MovieWhereInput>
}

export type QueryMoviesPerCinemaArgs = {
  cinemaId: Scalars['Int']
  cursor?: InputMaybe<MovieWhereUniqueInput>
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<MovieWhereInput>
}

export type QueryMyTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>
  distinct?: InputMaybe<Array<TicketScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TicketOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TicketWhereInput>
}

export type QueryScreenArgs = {
  where?: InputMaybe<ScreenWhereUniqueInput>
}

export type QueryScreensArgs = {
  cursor?: InputMaybe<ScreenWhereUniqueInput>
  distinct?: InputMaybe<Array<ScreenScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ScreenOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScreenWhereInput>
}

export type QuerySearchCinemasArgs = {
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum>>
  locationFilter: LocationFilterInput
  orderBy?: InputMaybe<Array<CinemaOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CinemaWhereInput>
}

export type QuerySeatArgs = {
  where?: InputMaybe<SeatWhereUniqueInput>
}

export type QuerySeatsArgs = {
  cursor?: InputMaybe<SeatWhereUniqueInput>
  distinct?: InputMaybe<Array<SeatScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SeatOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SeatWhereInput>
}

export type QueryShowtimeArgs = {
  where?: InputMaybe<ShowtimeWhereUniqueInput>
}

export type QueryShowtimesArgs = {
  cursor?: InputMaybe<ShowtimeWhereUniqueInput>
  distinct?: InputMaybe<Array<ShowtimeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ShowtimeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ShowtimeWhereInput>
}

export type QueryShowtimesInCinemaArgs = {
  cinemaId: Scalars['Int']
  movieId: Scalars['Int']
}

export type QueryTicketArgs = {
  where?: InputMaybe<TicketWhereUniqueInput>
}

export type QueryTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>
  distinct?: InputMaybe<Array<TicketScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TicketOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TicketWhereInput>
}

export type QueryTicketsCountArgs = {
  where?: InputMaybe<TicketWhereInput>
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String']
}

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput'
  access_token: Scalars['String']
  expires_in: Scalars['String']
  id_token: Scalars['String']
  project_id: Scalars['String']
  refresh_token: Scalars['String']
  token_type: Scalars['String']
  user_id: Scalars['String']
}

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type RegisterOutput = {
  __typename?: 'RegisterOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

export type RemainingSeats = {
  __typename?: 'RemainingSeats'
  booked: Scalars['Int']
  total: Scalars['Int']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type RowColumn = {
  column: Scalars['Int']
  row: Scalars['Int']
}

export type Screen = {
  __typename?: 'Screen'
  cinema: Cinema
  cinemaId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  number: Scalars['Int']
  price: Scalars['Float']
  projectionType: ProjectionType
  seats: Array<Seat>
  seatsCount: Scalars['Int']
  /** This returns all current and future shows. */
  showtimes: Array<Showtime>
  soundSystemType: SoundSystemType
  updatedAt: Scalars['DateTime']
}

export type ScreenListRelationFilter = {
  every?: InputMaybe<ScreenWhereInput>
  none?: InputMaybe<ScreenWhereInput>
  some?: InputMaybe<ScreenWhereInput>
}

export type ScreenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ScreenOrderByWithRelationInput = {
  cinema?: InputMaybe<CinemaOrderByWithRelationInput>
  cinemaId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  number?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  projectionType?: InputMaybe<SortOrder>
  seats?: InputMaybe<SeatOrderByRelationAggregateInput>
  showtimes?: InputMaybe<ShowtimeOrderByRelationAggregateInput>
  soundSystemType?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ScreenRelationFilter = {
  is?: InputMaybe<ScreenWhereInput>
  isNot?: InputMaybe<ScreenWhereInput>
}

export enum ScreenScalarFieldEnum {
  CinemaId = 'cinemaId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Number = 'number',
  Price = 'price',
  ProjectionType = 'projectionType',
  SoundSystemType = 'soundSystemType',
  UpdatedAt = 'updatedAt',
}

export type ScreenWhereInput = {
  AND?: InputMaybe<Array<ScreenWhereInput>>
  NOT?: InputMaybe<Array<ScreenWhereInput>>
  OR?: InputMaybe<Array<ScreenWhereInput>>
  cinema?: InputMaybe<CinemaRelationFilter>
  cinemaId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  number?: InputMaybe<IntFilter>
  price?: InputMaybe<FloatFilter>
  projectionType?: InputMaybe<EnumProjectionTypeFilter>
  seats?: InputMaybe<SeatListRelationFilter>
  showtimes?: InputMaybe<ShowtimeListRelationFilter>
  soundSystemType?: InputMaybe<EnumSoundSystemTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ScreenWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Seat = {
  __typename?: 'Seat'
  booked?: Maybe<Scalars['Boolean']>
  bookings: Array<Booking>
  column: Scalars['Int']
  createdAt: Scalars['DateTime']
  row: Scalars['Int']
  screen: Screen
  screenId: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type SeatBookedArgs = {
  showtimeId: Scalars['Int']
}

export type SeatListRelationFilter = {
  every?: InputMaybe<SeatWhereInput>
  none?: InputMaybe<SeatWhereInput>
  some?: InputMaybe<SeatWhereInput>
}

export type SeatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SeatOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  column?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  row?: InputMaybe<SortOrder>
  screen?: InputMaybe<ScreenOrderByWithRelationInput>
  screenId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type SeatRelationFilter = {
  is?: InputMaybe<SeatWhereInput>
  isNot?: InputMaybe<SeatWhereInput>
}

export enum SeatScalarFieldEnum {
  Column = 'column',
  Row = 'row',
  ScreenId = 'screenId',
}

export type SeatScreenIdRowColumnCompoundUniqueInput = {
  column: Scalars['Int']
  row: Scalars['Int']
  screenId: Scalars['Int']
}

export type SeatWhereInput = {
  AND?: InputMaybe<Array<SeatWhereInput>>
  NOT?: InputMaybe<Array<SeatWhereInput>>
  OR?: InputMaybe<Array<SeatWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  column?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  row?: InputMaybe<IntFilter>
  screen?: InputMaybe<ScreenRelationFilter>
  screenId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type SeatWhereUniqueInput = {
  screenId_row_column: SeatScreenIdRowColumnCompoundUniqueInput
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']
}

export type Showtime = {
  __typename?: 'Showtime'
  Booking: Array<Booking>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  movie: Movie
  movieId: Scalars['Int']
  screen: Screen
  screenId: Scalars['Int']
  startTime: Scalars['DateTime']
  status?: Maybe<ShowtimeStatus>
  updatedAt: Scalars['DateTime']
}

export type ShowtimeListRelationFilter = {
  every?: InputMaybe<ShowtimeWhereInput>
  none?: InputMaybe<ShowtimeWhereInput>
  some?: InputMaybe<ShowtimeWhereInput>
}

export type ShowtimeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ShowtimeOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  movie?: InputMaybe<MovieOrderByWithRelationInput>
  movieId?: InputMaybe<SortOrder>
  screen?: InputMaybe<ScreenOrderByWithRelationInput>
  screenId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ShowtimeRelationFilter = {
  is?: InputMaybe<ShowtimeWhereInput>
  isNot?: InputMaybe<ShowtimeWhereInput>
}

export enum ShowtimeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MovieId = 'movieId',
  ScreenId = 'screenId',
  StartTime = 'startTime',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ShowtimeSimple = {
  __typename?: 'ShowtimeSimple'
  id: Scalars['Int']
  movieId: Scalars['Int']
  remainingSeats: RemainingSeats
  screen: Screen
  startTime: Scalars['String']
}

/** Enum for showtime statuses */
export enum ShowtimeStatus {
  Cancelled = 'CANCELLED',
  Postponed = 'POSTPONED',
}

export type ShowtimeWhereInput = {
  AND?: InputMaybe<Array<ShowtimeWhereInput>>
  NOT?: InputMaybe<Array<ShowtimeWhereInput>>
  OR?: InputMaybe<Array<ShowtimeWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  movie?: InputMaybe<MovieRelationFilter>
  movieId?: InputMaybe<IntFilter>
  screen?: InputMaybe<ScreenRelationFilter>
  screenId?: InputMaybe<IntFilter>
  startTime?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<EnumShowtimeStatusFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ShowtimeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

/** Enum for sound system types */
export enum SoundSystemType {
  Auro_3D = 'AURO_3D',
  DolbyAtmos = 'DOLBY_ATMOS',
  DolbyDigital = 'DOLBY_DIGITAL',
  Dts = 'DTS',
  DtsX = 'DTS_X',
  ImaxEnhanced = 'IMAX_ENHANCED',
  Mono = 'MONO',
  SonySdds = 'SONY_SDDS',
  Stereo = 'STEREO',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Ticket = {
  __typename?: 'Ticket'
  bookings: Array<Booking>
  id: Scalars['Int']
  qrCode?: Maybe<Scalars['String']>
  uid: Scalars['String']
}

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>
  none?: InputMaybe<TicketWhereInput>
  some?: InputMaybe<TicketWhereInput>
}

export type TicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TicketOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  qrCode?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type TicketRelationFilter = {
  is?: InputMaybe<TicketWhereInput>
  isNot?: InputMaybe<TicketWhereInput>
}

export enum TicketScalarFieldEnum {
  Id = 'id',
  QrCode = 'qrCode',
  Uid = 'uid',
}

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>
  NOT?: InputMaybe<Array<TicketWhereInput>>
  OR?: InputMaybe<Array<TicketWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  id?: InputMaybe<IntFilter>
  qrCode?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type TicketWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type UpdateBookingInput = {
  id: Scalars['Int']
  seats?: InputMaybe<Array<RowColumn>>
  showtimeId?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['String']>
}

export type UpdateCinemaInput = {
  address?: InputMaybe<CreateAddressInputWithoutCinemaId>
  id: Scalars['Int']
  manager?: InputMaybe<CreateManagerInputWithoutCinemaId>
  name?: InputMaybe<Scalars['String']>
  screens?: InputMaybe<Array<CreateScreenInputWithoutCinemaId>>
}

export type UpdateManagerInput = {
  cinemaId?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type UpdateMovieInput = {
  director?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['Int']>
  genre?: InputMaybe<Genre>
  id: Scalars['Int']
  posterUrl?: InputMaybe<Scalars['String']>
  releaseDate?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdateScreenInput = {
  cinemaId?: InputMaybe<Scalars['Int']>
  columns?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  price?: InputMaybe<Scalars['Float']>
  projectionType?: InputMaybe<ProjectionType>
  rows?: InputMaybe<Scalars['Int']>
  soundSystemType?: InputMaybe<SoundSystemType>
}

export type UpdateShowtimeInput = {
  id: Scalars['Int']
  startTime?: InputMaybe<Scalars['DateTime']>
  status?: InputMaybe<ShowtimeStatus>
}

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type User = {
  __typename?: 'User'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type UserOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  tickets?: InputMaybe<TicketOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  tickets?: InputMaybe<TicketListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type CreateCinemaMutationVariables = Exact<{
  createCinemaInput: CreateCinemaInput
}>

export type CreateCinemaMutation = {
  __typename?: 'Mutation'
  createCinema: { __typename?: 'Cinema'; id: number }
}

export type CreateMovieMutationVariables = Exact<{
  createMovieInput: CreateMovieInput
}>

export type CreateMovieMutation = {
  __typename?: 'Mutation'
  createMovie: { __typename?: 'Movie'; id: number }
}

export type CreateManagerMutationVariables = Exact<{
  createManagerInput: CreateManagerInput
}>

export type CreateManagerMutation = {
  __typename?: 'Mutation'
  createManager: { __typename?: 'Manager'; uid: string }
}

export type FindCinemaQueryVariables = Exact<{
  uid: Scalars['String']
}>

export type FindCinemaQuery = {
  __typename?: 'Query'
  cinema: {
    __typename?: 'Cinema'
    id: number
    name: string
    screens: Array<{
      __typename?: 'Screen'
      id: number
      number: number
      seatsCount: number
      showtimes: Array<{ __typename?: 'Showtime'; id: number; startTime: any }>
    }>
  }
}

export type CreateScreenMutationVariables = Exact<{
  createScreenInput: CreateScreenInput
}>

export type CreateScreenMutation = {
  __typename?: 'Mutation'
  createScreen: { __typename?: 'Screen'; id: number }
}

export type SearchCinemasQueryVariables = Exact<{
  locationFilter: LocationFilterInput
  where?: InputMaybe<CinemaWhereInput>
  orderBy?: InputMaybe<
    Array<CinemaOrderByWithRelationInput> | CinemaOrderByWithRelationInput
  >
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum> | CinemaScalarFieldEnum>
}>

export type SearchCinemasQuery = {
  __typename?: 'Query'
  cinemas: Array<{
    __typename?: 'Cinema'
    name: string
    id: number
    address?: { __typename?: 'Address'; lat: number; lng: number } | null
  }>
}

export type LoginMutationVariables = Exact<{
  credentials: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    displayName: string
    email: string
    expiresIn: string
    idToken: string
    kind: string
    localId: string
    refreshToken: string
  }
}

export type MoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhereInput>
  orderBy?: InputMaybe<
    Array<MovieOrderByWithRelationInput> | MovieOrderByWithRelationInput
  >
  cursor?: InputMaybe<MovieWhereUniqueInput>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<MovieScalarFieldEnum> | MovieScalarFieldEnum>
}>

export type MoviesQuery = {
  __typename?: 'Query'
  movies: Array<{
    __typename?: 'Movie'
    id: number
    genre: Genre
    director: string
    duration: number
    createdAt: any
    posterUrl?: string | null
    releaseDate: any
    title: string
    updatedAt: any
  }>
  moviesCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type CinemasQueryVariables = Exact<{
  where?: InputMaybe<CinemaWhereInput>
  orderBy?: InputMaybe<
    Array<CinemaOrderByWithRelationInput> | CinemaOrderByWithRelationInput
  >
  cursor?: InputMaybe<CinemaWhereUniqueInput>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<CinemaScalarFieldEnum> | CinemaScalarFieldEnum>
}>

export type CinemasQuery = {
  __typename?: 'Query'
  cinemas: Array<{
    __typename?: 'Cinema'
    id: number
    name: string
    screens: Array<{
      __typename?: 'Screen'
      id: number
      number: number
      seatsCount: number
      showtimes: Array<{
        __typename?: 'Showtime'
        id: number
        startTime: any
        status?: ShowtimeStatus | null
        movie: {
          __typename?: 'Movie'
          title: string
          posterUrl?: string | null
        }
      }>
    }>
  }>
  cinemasCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type CreateShowtimeMutationVariables = Exact<{
  createShowtimeInput: CreateShowtimeInput
}>

export type CreateShowtimeMutation = {
  __typename?: 'Mutation'
  createShowtime: { __typename?: 'BatchPayload'; count: number }
}

export type MoviesPerCinemaQueryVariables = Exact<{
  cinemaId: Scalars['Int']
}>

export type MoviesPerCinemaQuery = {
  __typename?: 'Query'
  moviesPerCinema: Array<{
    __typename?: 'Movie'
    id: number
    director: string
    title: string
    posterUrl?: string | null
  }>
}

export type BookedSeatsInShowtimeQueryVariables = Exact<{
  showtimeId: Scalars['Int']
}>

export type BookedSeatsInShowtimeQuery = {
  __typename?: 'Query'
  bookedSeatsInShowtime: {
    __typename?: 'RemainingSeats'
    booked: number
    total: number
  }
}

export type ShowtimesInCinemaQueryVariables = Exact<{
  cinemaId: Scalars['Int']
  movieId: Scalars['Int']
}>

export type ShowtimesInCinemaQuery = {
  __typename?: 'Query'
  showtimesInCinema: Array<{
    __typename?: 'GroupedShowtime'
    date: string
    showtimes: Array<{
      __typename?: 'ShowtimeSimple'
      id: number
      startTime: string
      screen: {
        __typename?: 'Screen'
        id: number
        price: number
        projectionType: ProjectionType
        soundSystemType: SoundSystemType
        number: number
      }
    }>
  }>
}

export type ShowtimeQueryVariables = Exact<{
  where?: InputMaybe<ShowtimeWhereUniqueInput>
  showtimeId: Scalars['Int']
}>

export type ShowtimeQuery = {
  __typename?: 'Query'
  showtime: {
    __typename?: 'Showtime'
    screen: {
      __typename?: 'Screen'
      price: number
      seats: Array<{
        __typename?: 'Seat'
        row: number
        column: number
        booked?: boolean | null
      }>
    }
  }
}

export type CreateBookingMutationVariables = Exact<{
  createBookingInput: CreateBookingInput
}>

export type CreateBookingMutation = {
  __typename?: 'Mutation'
  createBooking: { __typename?: 'Ticket'; id: number }
}

export type TicketsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<TicketScalarFieldEnum> | TicketScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<TicketWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<TicketOrderByWithRelationInput> | TicketOrderByWithRelationInput
  >
  where?: InputMaybe<TicketWhereInput>
}>

export type TicketsQuery = {
  __typename?: 'Query'
  ticketsCount: { __typename?: 'AggregateCountOutput'; count: number }
  tickets: Array<{
    __typename?: 'Ticket'
    uid: string
    qrCode?: string | null
    id: number
    bookings: Array<{
      __typename?: 'Booking'
      row: number
      column: number
      showtime: {
        __typename?: 'Showtime'
        startTime: any
        screen: {
          __typename?: 'Screen'
          number: number
          seats: Array<{ __typename?: 'Seat'; row: number; column: number }>
          cinema: { __typename?: 'Cinema'; name: string }
        }
        movie: {
          __typename?: 'Movie'
          title: string
          posterUrl?: string | null
        }
      }
    }>
  }>
}

export type UpdateShowtimeMutationVariables = Exact<{
  updateShowtimeInput: UpdateShowtimeInput
}>

export type UpdateShowtimeMutation = {
  __typename?: 'Mutation'
  updateShowtime: { __typename?: 'Showtime'; id: number }
}

export type ManagerMeQueryVariables = Exact<{ [key: string]: never }>

export type ManagerMeQuery = {
  __typename?: 'Query'
  managerMe: { __typename?: 'Manager'; uid: string }
}

export type AdminMeQueryVariables = Exact<{ [key: string]: never }>

export type AdminMeQuery = {
  __typename?: 'Query'
  adminMe: { __typename?: 'Admin'; uid: string }
}

export const namedOperations = {
  Query: {
    findCinema: 'findCinema',
    SearchCinemas: 'SearchCinemas',
    movies: 'movies',
    cinemas: 'cinemas',
    moviesPerCinema: 'moviesPerCinema',
    bookedSeatsInShowtime: 'bookedSeatsInShowtime',
    showtimesInCinema: 'showtimesInCinema',
    showtime: 'showtime',
    tickets: 'tickets',
    managerMe: 'managerMe',
    adminMe: 'adminMe',
  },
  Mutation: {
    createCinema: 'createCinema',
    createMovie: 'createMovie',
    createManager: 'createManager',
    createScreen: 'createScreen',
    Login: 'Login',
    createShowtime: 'createShowtime',
    createBooking: 'createBooking',
    updateShowtime: 'updateShowtime',
  },
}

export const CreateCinemaDocument = /*#__PURE__*/ gql`
  mutation createCinema($createCinemaInput: CreateCinemaInput!) {
    createCinema(createCinemaInput: $createCinemaInput) {
      id
    }
  }
`
export type CreateCinemaMutationFn = Apollo.MutationFunction<
  CreateCinemaMutation,
  CreateCinemaMutationVariables
>

/**
 * __useCreateCinemaMutation__
 *
 * To run a mutation, you first call `useCreateCinemaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCinemaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCinemaMutation, { data, loading, error }] = useCreateCinemaMutation({
 *   variables: {
 *      createCinemaInput: // value for 'createCinemaInput'
 *   },
 * });
 */
export function useCreateCinemaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCinemaMutation,
    CreateCinemaMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCinemaMutation,
    CreateCinemaMutationVariables
  >(CreateCinemaDocument, options)
}
export type CreateCinemaMutationHookResult = ReturnType<
  typeof useCreateCinemaMutation
>
export type CreateCinemaMutationResult =
  Apollo.MutationResult<CreateCinemaMutation>
export type CreateCinemaMutationOptions = Apollo.BaseMutationOptions<
  CreateCinemaMutation,
  CreateCinemaMutationVariables
>
export const CreateMovieDocument = /*#__PURE__*/ gql`
  mutation createMovie($createMovieInput: CreateMovieInput!) {
    createMovie(createMovieInput: $createMovieInput) {
      id
    }
  }
`
export type CreateMovieMutationFn = Apollo.MutationFunction<
  CreateMovieMutation,
  CreateMovieMutationVariables
>

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      createMovieInput: // value for 'createMovieInput'
 *   },
 * });
 */
export function useCreateMovieMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMovieMutation,
    CreateMovieMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(
    CreateMovieDocument,
    options,
  )
}
export type CreateMovieMutationHookResult = ReturnType<
  typeof useCreateMovieMutation
>
export type CreateMovieMutationResult =
  Apollo.MutationResult<CreateMovieMutation>
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<
  CreateMovieMutation,
  CreateMovieMutationVariables
>
export const CreateManagerDocument = /*#__PURE__*/ gql`
  mutation createManager($createManagerInput: CreateManagerInput!) {
    createManager(createManagerInput: $createManagerInput) {
      uid
    }
  }
`
export type CreateManagerMutationFn = Apollo.MutationFunction<
  CreateManagerMutation,
  CreateManagerMutationVariables
>

/**
 * __useCreateManagerMutation__
 *
 * To run a mutation, you first call `useCreateManagerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManagerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManagerMutation, { data, loading, error }] = useCreateManagerMutation({
 *   variables: {
 *      createManagerInput: // value for 'createManagerInput'
 *   },
 * });
 */
export function useCreateManagerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateManagerMutation,
    CreateManagerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateManagerMutation,
    CreateManagerMutationVariables
  >(CreateManagerDocument, options)
}
export type CreateManagerMutationHookResult = ReturnType<
  typeof useCreateManagerMutation
>
export type CreateManagerMutationResult =
  Apollo.MutationResult<CreateManagerMutation>
export type CreateManagerMutationOptions = Apollo.BaseMutationOptions<
  CreateManagerMutation,
  CreateManagerMutationVariables
>
export const FindCinemaDocument = /*#__PURE__*/ gql`
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

/**
 * __useFindCinemaQuery__
 *
 * To run a query within a React component, call `useFindCinemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCinemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCinemaQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindCinemaQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindCinemaQuery,
    FindCinemaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FindCinemaQuery, FindCinemaQueryVariables>(
    FindCinemaDocument,
    options,
  )
}
export function useFindCinemaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindCinemaQuery,
    FindCinemaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FindCinemaQuery, FindCinemaQueryVariables>(
    FindCinemaDocument,
    options,
  )
}
export type FindCinemaQueryHookResult = ReturnType<typeof useFindCinemaQuery>
export type FindCinemaLazyQueryHookResult = ReturnType<
  typeof useFindCinemaLazyQuery
>
export type FindCinemaQueryResult = Apollo.QueryResult<
  FindCinemaQuery,
  FindCinemaQueryVariables
>
export const CreateScreenDocument = /*#__PURE__*/ gql`
  mutation createScreen($createScreenInput: CreateScreenInput!) {
    createScreen(createScreenInput: $createScreenInput) {
      id
    }
  }
`
export type CreateScreenMutationFn = Apollo.MutationFunction<
  CreateScreenMutation,
  CreateScreenMutationVariables
>

/**
 * __useCreateScreenMutation__
 *
 * To run a mutation, you first call `useCreateScreenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScreenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScreenMutation, { data, loading, error }] = useCreateScreenMutation({
 *   variables: {
 *      createScreenInput: // value for 'createScreenInput'
 *   },
 * });
 */
export function useCreateScreenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateScreenMutation,
    CreateScreenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateScreenMutation,
    CreateScreenMutationVariables
  >(CreateScreenDocument, options)
}
export type CreateScreenMutationHookResult = ReturnType<
  typeof useCreateScreenMutation
>
export type CreateScreenMutationResult =
  Apollo.MutationResult<CreateScreenMutation>
export type CreateScreenMutationOptions = Apollo.BaseMutationOptions<
  CreateScreenMutation,
  CreateScreenMutationVariables
>
export const SearchCinemasDocument = /*#__PURE__*/ gql`
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

/**
 * __useSearchCinemasQuery__
 *
 * To run a query within a React component, call `useSearchCinemasQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCinemasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCinemasQuery({
 *   variables: {
 *      locationFilter: // value for 'locationFilter'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useSearchCinemasQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchCinemasQuery,
    SearchCinemasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchCinemasQuery, SearchCinemasQueryVariables>(
    SearchCinemasDocument,
    options,
  )
}
export function useSearchCinemasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchCinemasQuery,
    SearchCinemasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchCinemasQuery, SearchCinemasQueryVariables>(
    SearchCinemasDocument,
    options,
  )
}
export type SearchCinemasQueryHookResult = ReturnType<
  typeof useSearchCinemasQuery
>
export type SearchCinemasLazyQueryHookResult = ReturnType<
  typeof useSearchCinemasLazyQuery
>
export type SearchCinemasQueryResult = Apollo.QueryResult<
  SearchCinemasQuery,
  SearchCinemasQueryVariables
>
export const LoginDocument = /*#__PURE__*/ gql`
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
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const MoviesDocument = /*#__PURE__*/ gql`
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

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useMoviesQuery(
  baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(
    MoviesDocument,
    options,
  )
}
export function useMoviesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(
    MoviesDocument,
    options,
  )
}
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>
export type MoviesQueryResult = Apollo.QueryResult<
  MoviesQuery,
  MoviesQueryVariables
>
export const CinemasDocument = /*#__PURE__*/ gql`
  query cinemas(
    $where: CinemaWhereInput
    $orderBy: [CinemaOrderByWithRelationInput!]
    $cursor: CinemaWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CinemaScalarFieldEnum!]
  ) {
    cinemas(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      name
      screens {
        id
        number
        seatsCount
        showtimes {
          id
          startTime
          status
          movie {
            title
            posterUrl
          }
        }
      }
    }
    cinemasCount(where: $where) {
      count
    }
  }
`

/**
 * __useCinemasQuery__
 *
 * To run a query within a React component, call `useCinemasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCinemasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCinemasQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useCinemasQuery(
  baseOptions?: Apollo.QueryHookOptions<CinemasQuery, CinemasQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CinemasQuery, CinemasQueryVariables>(
    CinemasDocument,
    options,
  )
}
export function useCinemasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CinemasQuery,
    CinemasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CinemasQuery, CinemasQueryVariables>(
    CinemasDocument,
    options,
  )
}
export type CinemasQueryHookResult = ReturnType<typeof useCinemasQuery>
export type CinemasLazyQueryHookResult = ReturnType<typeof useCinemasLazyQuery>
export type CinemasQueryResult = Apollo.QueryResult<
  CinemasQuery,
  CinemasQueryVariables
>
export const CreateShowtimeDocument = /*#__PURE__*/ gql`
  mutation createShowtime($createShowtimeInput: CreateShowtimeInput!) {
    createShowtime(createShowtimeInput: $createShowtimeInput) {
      count
    }
  }
`
export type CreateShowtimeMutationFn = Apollo.MutationFunction<
  CreateShowtimeMutation,
  CreateShowtimeMutationVariables
>

/**
 * __useCreateShowtimeMutation__
 *
 * To run a mutation, you first call `useCreateShowtimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShowtimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShowtimeMutation, { data, loading, error }] = useCreateShowtimeMutation({
 *   variables: {
 *      createShowtimeInput: // value for 'createShowtimeInput'
 *   },
 * });
 */
export function useCreateShowtimeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateShowtimeMutation,
    CreateShowtimeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateShowtimeMutation,
    CreateShowtimeMutationVariables
  >(CreateShowtimeDocument, options)
}
export type CreateShowtimeMutationHookResult = ReturnType<
  typeof useCreateShowtimeMutation
>
export type CreateShowtimeMutationResult =
  Apollo.MutationResult<CreateShowtimeMutation>
export type CreateShowtimeMutationOptions = Apollo.BaseMutationOptions<
  CreateShowtimeMutation,
  CreateShowtimeMutationVariables
>
export const MoviesPerCinemaDocument = /*#__PURE__*/ gql`
  query moviesPerCinema($cinemaId: Int!) {
    moviesPerCinema(cinemaId: $cinemaId) {
      id
      director
      title
      posterUrl
    }
  }
`

/**
 * __useMoviesPerCinemaQuery__
 *
 * To run a query within a React component, call `useMoviesPerCinemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesPerCinemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesPerCinemaQuery({
 *   variables: {
 *      cinemaId: // value for 'cinemaId'
 *   },
 * });
 */
export function useMoviesPerCinemaQuery(
  baseOptions: Apollo.QueryHookOptions<
    MoviesPerCinemaQuery,
    MoviesPerCinemaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MoviesPerCinemaQuery, MoviesPerCinemaQueryVariables>(
    MoviesPerCinemaDocument,
    options,
  )
}
export function useMoviesPerCinemaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MoviesPerCinemaQuery,
    MoviesPerCinemaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    MoviesPerCinemaQuery,
    MoviesPerCinemaQueryVariables
  >(MoviesPerCinemaDocument, options)
}
export type MoviesPerCinemaQueryHookResult = ReturnType<
  typeof useMoviesPerCinemaQuery
>
export type MoviesPerCinemaLazyQueryHookResult = ReturnType<
  typeof useMoviesPerCinemaLazyQuery
>
export type MoviesPerCinemaQueryResult = Apollo.QueryResult<
  MoviesPerCinemaQuery,
  MoviesPerCinemaQueryVariables
>
export const BookedSeatsInShowtimeDocument = /*#__PURE__*/ gql`
  query bookedSeatsInShowtime($showtimeId: Int!) {
    bookedSeatsInShowtime(showtimeId: $showtimeId) {
      booked
      total
    }
  }
`

/**
 * __useBookedSeatsInShowtimeQuery__
 *
 * To run a query within a React component, call `useBookedSeatsInShowtimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookedSeatsInShowtimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookedSeatsInShowtimeQuery({
 *   variables: {
 *      showtimeId: // value for 'showtimeId'
 *   },
 * });
 */
export function useBookedSeatsInShowtimeQuery(
  baseOptions: Apollo.QueryHookOptions<
    BookedSeatsInShowtimeQuery,
    BookedSeatsInShowtimeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    BookedSeatsInShowtimeQuery,
    BookedSeatsInShowtimeQueryVariables
  >(BookedSeatsInShowtimeDocument, options)
}
export function useBookedSeatsInShowtimeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BookedSeatsInShowtimeQuery,
    BookedSeatsInShowtimeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    BookedSeatsInShowtimeQuery,
    BookedSeatsInShowtimeQueryVariables
  >(BookedSeatsInShowtimeDocument, options)
}
export type BookedSeatsInShowtimeQueryHookResult = ReturnType<
  typeof useBookedSeatsInShowtimeQuery
>
export type BookedSeatsInShowtimeLazyQueryHookResult = ReturnType<
  typeof useBookedSeatsInShowtimeLazyQuery
>
export type BookedSeatsInShowtimeQueryResult = Apollo.QueryResult<
  BookedSeatsInShowtimeQuery,
  BookedSeatsInShowtimeQueryVariables
>
export const ShowtimesInCinemaDocument = /*#__PURE__*/ gql`
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

/**
 * __useShowtimesInCinemaQuery__
 *
 * To run a query within a React component, call `useShowtimesInCinemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowtimesInCinemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowtimesInCinemaQuery({
 *   variables: {
 *      cinemaId: // value for 'cinemaId'
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useShowtimesInCinemaQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShowtimesInCinemaQuery,
    ShowtimesInCinemaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ShowtimesInCinemaQuery,
    ShowtimesInCinemaQueryVariables
  >(ShowtimesInCinemaDocument, options)
}
export function useShowtimesInCinemaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShowtimesInCinemaQuery,
    ShowtimesInCinemaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ShowtimesInCinemaQuery,
    ShowtimesInCinemaQueryVariables
  >(ShowtimesInCinemaDocument, options)
}
export type ShowtimesInCinemaQueryHookResult = ReturnType<
  typeof useShowtimesInCinemaQuery
>
export type ShowtimesInCinemaLazyQueryHookResult = ReturnType<
  typeof useShowtimesInCinemaLazyQuery
>
export type ShowtimesInCinemaQueryResult = Apollo.QueryResult<
  ShowtimesInCinemaQuery,
  ShowtimesInCinemaQueryVariables
>
export const ShowtimeDocument = /*#__PURE__*/ gql`
  query showtime($where: ShowtimeWhereUniqueInput, $showtimeId: Int!) {
    showtime(where: $where) {
      screen {
        price
        seats {
          row
          column
          booked(showtimeId: $showtimeId)
        }
      }
    }
  }
`

/**
 * __useShowtimeQuery__
 *
 * To run a query within a React component, call `useShowtimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowtimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowtimeQuery({
 *   variables: {
 *      where: // value for 'where'
 *      showtimeId: // value for 'showtimeId'
 *   },
 * });
 */
export function useShowtimeQuery(
  baseOptions: Apollo.QueryHookOptions<ShowtimeQuery, ShowtimeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ShowtimeQuery, ShowtimeQueryVariables>(
    ShowtimeDocument,
    options,
  )
}
export function useShowtimeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShowtimeQuery,
    ShowtimeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ShowtimeQuery, ShowtimeQueryVariables>(
    ShowtimeDocument,
    options,
  )
}
export type ShowtimeQueryHookResult = ReturnType<typeof useShowtimeQuery>
export type ShowtimeLazyQueryHookResult = ReturnType<
  typeof useShowtimeLazyQuery
>
export type ShowtimeQueryResult = Apollo.QueryResult<
  ShowtimeQuery,
  ShowtimeQueryVariables
>
export const CreateBookingDocument = /*#__PURE__*/ gql`
  mutation createBooking($createBookingInput: CreateBookingInput!) {
    createBooking(createBookingInput: $createBookingInput) {
      id
    }
  }
`
export type CreateBookingMutationFn = Apollo.MutationFunction<
  CreateBookingMutation,
  CreateBookingMutationVariables
>

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      createBookingInput: // value for 'createBookingInput'
 *   },
 * });
 */
export function useCreateBookingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookingMutation,
    CreateBookingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateBookingMutation,
    CreateBookingMutationVariables
  >(CreateBookingDocument, options)
}
export type CreateBookingMutationHookResult = ReturnType<
  typeof useCreateBookingMutation
>
export type CreateBookingMutationResult =
  Apollo.MutationResult<CreateBookingMutation>
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<
  CreateBookingMutation,
  CreateBookingMutationVariables
>
export const TicketsDocument = /*#__PURE__*/ gql`
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

/**
 * __useTicketsQuery__
 *
 * To run a query within a React component, call `useTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTicketsQuery(
  baseOptions?: Apollo.QueryHookOptions<TicketsQuery, TicketsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TicketsQuery, TicketsQueryVariables>(
    TicketsDocument,
    options,
  )
}
export function useTicketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TicketsQuery,
    TicketsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TicketsQuery, TicketsQueryVariables>(
    TicketsDocument,
    options,
  )
}
export type TicketsQueryHookResult = ReturnType<typeof useTicketsQuery>
export type TicketsLazyQueryHookResult = ReturnType<typeof useTicketsLazyQuery>
export type TicketsQueryResult = Apollo.QueryResult<
  TicketsQuery,
  TicketsQueryVariables
>
export const UpdateShowtimeDocument = /*#__PURE__*/ gql`
  mutation updateShowtime($updateShowtimeInput: UpdateShowtimeInput!) {
    updateShowtime(updateShowtimeInput: $updateShowtimeInput) {
      id
    }
  }
`
export type UpdateShowtimeMutationFn = Apollo.MutationFunction<
  UpdateShowtimeMutation,
  UpdateShowtimeMutationVariables
>

/**
 * __useUpdateShowtimeMutation__
 *
 * To run a mutation, you first call `useUpdateShowtimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShowtimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShowtimeMutation, { data, loading, error }] = useUpdateShowtimeMutation({
 *   variables: {
 *      updateShowtimeInput: // value for 'updateShowtimeInput'
 *   },
 * });
 */
export function useUpdateShowtimeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateShowtimeMutation,
    UpdateShowtimeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateShowtimeMutation,
    UpdateShowtimeMutationVariables
  >(UpdateShowtimeDocument, options)
}
export type UpdateShowtimeMutationHookResult = ReturnType<
  typeof useUpdateShowtimeMutation
>
export type UpdateShowtimeMutationResult =
  Apollo.MutationResult<UpdateShowtimeMutation>
export type UpdateShowtimeMutationOptions = Apollo.BaseMutationOptions<
  UpdateShowtimeMutation,
  UpdateShowtimeMutationVariables
>
export const ManagerMeDocument = /*#__PURE__*/ gql`
  query managerMe {
    managerMe {
      uid
    }
  }
`

/**
 * __useManagerMeQuery__
 *
 * To run a query within a React component, call `useManagerMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useManagerMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useManagerMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useManagerMeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ManagerMeQuery,
    ManagerMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ManagerMeQuery, ManagerMeQueryVariables>(
    ManagerMeDocument,
    options,
  )
}
export function useManagerMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ManagerMeQuery,
    ManagerMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ManagerMeQuery, ManagerMeQueryVariables>(
    ManagerMeDocument,
    options,
  )
}
export type ManagerMeQueryHookResult = ReturnType<typeof useManagerMeQuery>
export type ManagerMeLazyQueryHookResult = ReturnType<
  typeof useManagerMeLazyQuery
>
export type ManagerMeQueryResult = Apollo.QueryResult<
  ManagerMeQuery,
  ManagerMeQueryVariables
>
export const AdminMeDocument = /*#__PURE__*/ gql`
  query adminMe {
    adminMe {
      uid
    }
  }
`

/**
 * __useAdminMeQuery__
 *
 * To run a query within a React component, call `useAdminMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminMeQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminMeQuery, AdminMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeQuery, AdminMeQueryVariables>(
    AdminMeDocument,
    options,
  )
}
export function useAdminMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminMeQuery,
    AdminMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeQuery, AdminMeQueryVariables>(
    AdminMeDocument,
    options,
  )
}
export type AdminMeQueryHookResult = ReturnType<typeof useAdminMeQuery>
export type AdminMeLazyQueryHookResult = ReturnType<typeof useAdminMeLazyQuery>
export type AdminMeQueryResult = Apollo.QueryResult<
  AdminMeQuery,
  AdminMeQueryVariables
>
