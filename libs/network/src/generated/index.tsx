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
  cinemaId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
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

export type Booking = {
  __typename?: 'Booking'
  column: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  row: Scalars['Int']
  screenId: Scalars['Int']
  seat: Seat
  showtime: Showtime
  showtimeId: Scalars['Int']
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
  column?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  row?: InputMaybe<SortOrder>
  screenId?: InputMaybe<SortOrder>
  seat?: InputMaybe<SeatOrderByWithRelationInput>
  showtime?: InputMaybe<ShowtimeOrderByWithRelationInput>
  showtimeId?: InputMaybe<SortOrder>
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
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  column?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  row?: InputMaybe<IntFilter>
  screenId?: InputMaybe<IntFilter>
  seat?: InputMaybe<SeatRelationFilter>
  showtime?: InputMaybe<ShowtimeRelationFilter>
  showtimeId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type BookingWhereUniqueInput = {
  id: Scalars['Int']
}

export type Cinema = {
  __typename?: 'Cinema'
  address: Address
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  managers: Array<Manager>
  name: Scalars['String']
  screens: Array<Screen>
  updatedAt: Scalars['DateTime']
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
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
}

export type CreateBookingInput = {
  column: Scalars['Int']
  row: Scalars['Int']
  screenId: Scalars['Int']
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
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateManagerInputWithoutCinemaId = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateMovieInput = {
  director: Scalars['String']
  duration: Scalars['Int']
  genre: Genre
  posterUrl: Scalars['String']
  releaseDate: Scalars['DateTime']
  title: Scalars['String']
}

export type CreateScreenInput = {
  cinemaId: Scalars['Int']
  columns: Scalars['Int']
  number: Scalars['Int']
  projectionType: ProjectionType
  rows: Scalars['Int']
  soundSystemType: SoundSystemType
}

export type CreateScreenInputWithoutCinemaId = {
  columns: Scalars['Int']
  number: Scalars['Int']
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
  endTime: Scalars['DateTime']
  movieId: Scalars['Int']
  screenId: Scalars['Int']
  startTime: Scalars['DateTime']
}

export type CreateUserInput = {
  name: Scalars['String']
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
  name: Scalars['String']
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
  cinema?: InputMaybe<CinemaOrderByWithRelationInput>
  cinemaId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ManagerScalarFieldEnum {
  CinemaId = 'cinemaId',
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>
  NOT?: InputMaybe<Array<ManagerWhereInput>>
  OR?: InputMaybe<Array<ManagerWhereInput>>
  cinema?: InputMaybe<CinemaRelationFilter>
  cinemaId?: InputMaybe<IntFilter>
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
  posterUrl: Scalars['String']
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
  createBooking: Booking
  createCinema: Cinema
  createManager: Manager
  createMovie: Movie
  createScreen: Screen
  createSeat: Seat
  createShowtime: Showtime
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
  removeUser: User
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
  booking: Booking
  bookings: Array<Booking>
  cinema: Cinema
  cinemaByManager: Cinema
  cinemas: Array<Cinema>
  manager: Manager
  managers: Array<Manager>
  movie: Movie
  movies: Array<Movie>
  screen: Screen
  screens: Array<Screen>
  searchCinemas: Array<Cinema>
  seat: Seat
  seats: Array<Seat>
  showtime: Showtime
  showtimes: Array<Showtime>
  user: User
  users: Array<User>
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

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type Screen = {
  __typename?: 'Screen'
  cinema: Cinema
  cinemaId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  number: Scalars['Int']
  price: Scalars['Int']
  projectionType: ProjectionType
  seats: Array<Seat>
  seatsCount: Scalars['Int']
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
  bookings: Array<Booking>
  column: Scalars['Int']
  createdAt: Scalars['DateTime']
  row: Scalars['Int']
  screen: Screen
  screenId: Scalars['Int']
  updatedAt: Scalars['DateTime']
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
  endTime: Scalars['DateTime']
  id: Scalars['Int']
  movie: Movie
  movieId: Scalars['Int']
  screen: Screen
  screenId: Scalars['Int']
  startTime: Scalars['DateTime']
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
  endTime?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  movie?: InputMaybe<MovieOrderByWithRelationInput>
  movieId?: InputMaybe<SortOrder>
  screen?: InputMaybe<ScreenOrderByWithRelationInput>
  screenId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ShowtimeRelationFilter = {
  is?: InputMaybe<ShowtimeWhereInput>
  isNot?: InputMaybe<ShowtimeWhereInput>
}

export enum ShowtimeScalarFieldEnum {
  CreatedAt = 'createdAt',
  EndTime = 'endTime',
  Id = 'id',
  MovieId = 'movieId',
  ScreenId = 'screenId',
  StartTime = 'startTime',
  UpdatedAt = 'updatedAt',
}

export type ShowtimeWhereInput = {
  AND?: InputMaybe<Array<ShowtimeWhereInput>>
  NOT?: InputMaybe<Array<ShowtimeWhereInput>>
  OR?: InputMaybe<Array<ShowtimeWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  endTime?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  movie?: InputMaybe<MovieRelationFilter>
  movieId?: InputMaybe<IntFilter>
  screen?: InputMaybe<ScreenRelationFilter>
  screenId?: InputMaybe<IntFilter>
  startTime?: InputMaybe<DateTimeFilter>
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

export type UpdateBookingInput = {
  column?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  row?: InputMaybe<Scalars['Int']>
  screenId?: InputMaybe<Scalars['Int']>
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
  number?: InputMaybe<Scalars['Int']>
  projectionType?: InputMaybe<ProjectionType>
  rows?: InputMaybe<Scalars['Int']>
  soundSystemType?: InputMaybe<SoundSystemType>
}

export type UpdateShowtimeInput = {
  endTime?: InputMaybe<Scalars['DateTime']>
  id: Scalars['Int']
  movieId?: InputMaybe<Scalars['Int']>
  screenId?: InputMaybe<Scalars['Int']>
  startTime?: InputMaybe<Scalars['DateTime']>
}

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type User = {
  __typename?: 'User'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type UserOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
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
      showtimes: Array<{
        __typename?: 'Showtime'
        id: number
        startTime: any
        endTime: any
      }>
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
    address: {
      __typename?: 'Address'
      lat?: number | null
      lng?: number | null
    }
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
    posterUrl: string
    releaseDate: any
    title: string
    updatedAt: any
  }>
}

export const namedOperations = {
  Query: {
    findCinema: 'findCinema',
    SearchCinemas: 'SearchCinemas',
    movies: 'movies',
  },
  Mutation: {
    createCinema: 'createCinema',
    createMovie: 'createMovie',
    createScreen: 'createScreen',
    Login: 'Login',
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
          endTime
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
