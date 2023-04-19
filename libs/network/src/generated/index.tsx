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
  createdAt: Scalars['DateTime']
  garage: Garage
  garageId: Scalars['Int']
  id: Scalars['Int']
  lat: Scalars['Int']
  lng: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  garage?: InputMaybe<GarageOrderByWithRelationInput>
  garageId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>
  isNot?: InputMaybe<AddressWhereInput>
}

export enum AddressScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  UpdatedAt = 'updatedAt',
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>
  NOT?: InputMaybe<Array<AddressWhereInput>>
  OR?: InputMaybe<Array<AddressWhereInput>>
  address?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  garage?: InputMaybe<GarageRelationFilter>
  garageId?: InputMaybe<IntFilter>
  id?: InputMaybe<StringFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AddressWhereUniqueInput = {
  garageId?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
}

export type Booking = {
  __typename?: 'Booking'
  createdAt: Scalars['DateTime']
  customer: Customer
  customerId: Scalars['String']
  endTime: Scalars['DateTime']
  id: Scalars['Int']
  passcode: Scalars['String']
  phoneNumber: Scalars['String']
  pricePerHour: Scalars['Int']
  slot: Slot
  slotId: Scalars['Int']
  startTime: Scalars['DateTime']
  totalPrice: Scalars['Int']
  updatedAt: Scalars['DateTime']
  vehicleNumber: Scalars['String']
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
  createdAt?: InputMaybe<SortOrder>
  customer?: InputMaybe<CustomerOrderByWithRelationInput>
  customerId?: InputMaybe<SortOrder>
  endTime?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  passcode?: InputMaybe<SortOrder>
  phoneNumber?: InputMaybe<SortOrder>
  pricePerHour?: InputMaybe<SortOrder>
  slot?: InputMaybe<SlotOrderByWithRelationInput>
  slotId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  totalPrice?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  vehicleNumber?: InputMaybe<SortOrder>
}

export enum BookingScalarFieldEnum {
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  EndTime = 'endTime',
  Id = 'id',
  Passcode = 'passcode',
  PhoneNumber = 'phoneNumber',
  PricePerHour = 'pricePerHour',
  SlotId = 'slotId',
  StartTime = 'startTime',
  TotalPrice = 'totalPrice',
  UpdatedAt = 'updatedAt',
  VehicleNumber = 'vehicleNumber',
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  customer?: InputMaybe<CustomerRelationFilter>
  customerId?: InputMaybe<StringFilter>
  endTime?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  passcode?: InputMaybe<StringFilter>
  phoneNumber?: InputMaybe<StringFilter>
  pricePerHour?: InputMaybe<FloatFilter>
  slot?: InputMaybe<SlotRelationFilter>
  slotId?: InputMaybe<IntFilter>
  startTime?: InputMaybe<DateTimeFilter>
  totalPrice?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  vehicleNumber?: InputMaybe<StringFilter>
}

export type BookingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Company = {
  __typename?: 'Company'
  createdAt: Scalars['DateTime']
  displayName: Scalars['String']
  garages: Array<Garage>
  id: Scalars['Int']
  managers: Array<Manager>
  updatedAt: Scalars['DateTime']
}

export type CompanyOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  garages?: InputMaybe<GarageOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  managers?: InputMaybe<ManagerOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>
  isNot?: InputMaybe<CompanyWhereInput>
}

export enum CompanyScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>
  NOT?: InputMaybe<Array<CompanyWhereInput>>
  OR?: InputMaybe<Array<CompanyWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  garages?: InputMaybe<GarageListRelationFilter>
  id?: InputMaybe<IntFilter>
  managers?: InputMaybe<ManagerListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type CreateAddressInput = {
  address: Scalars['String']
  garageId: Scalars['Int']
  lat: Scalars['Int']
  lng: Scalars['Int']
}

export type CreateBookingInput = {
  customerId: Scalars['String']
  endTime: Scalars['DateTime']
  garageId: Scalars['Int']
  startTime: Scalars['DateTime']
  type: SlotType
  vehicleNumber: Scalars['String']
}

export type CreateCompanyInput = {
  displayName: Scalars['String']
  managerDisplayName: Scalars['String']
}

export type CreateCustomerInput = {
  displayName: Scalars['String']
  uid: Scalars['String']
}

export type CreateGarageInput = {
  companyId: Scalars['Int']
  description: Scalars['String']
  displayName: Scalars['String']
}

export type CreateManagerInput = {
  companyId: Scalars['Int']
  displayName: Scalars['String']
  uid: Scalars['String']
}

export type CreateSlotInput = {
  displayName?: InputMaybe<Scalars['String']>
  garageId: Scalars['Int']
  height?: InputMaybe<Scalars['Int']>
  length?: InputMaybe<Scalars['Int']>
  pricePerHour: Scalars['Int']
  type?: InputMaybe<SlotType>
  width?: InputMaybe<Scalars['Int']>
}

export type Customer = {
  __typename?: 'Customer'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']
  displayName: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type CustomerOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>
  isNot?: InputMaybe<CustomerWhereInput>
}

export enum CustomerScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>
  NOT?: InputMaybe<Array<CustomerWhereInput>>
  OR?: InputMaybe<Array<CustomerWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CustomerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type DateFilterInput = {
  end: Scalars['String']
  start: Scalars['String']
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

export type EnumSlotTypeFilter = {
  equals?: InputMaybe<SlotType>
  in?: InputMaybe<Array<SlotType>>
  not?: InputMaybe<SlotType>
  notIn?: InputMaybe<Array<SlotType>>
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

export type Garage = {
  __typename?: 'Garage'
  address: Address
  availableSlots: Array<MinimalSlotGroupBy>
  company: Company
  companyId: Scalars['Int']
  createdAt: Scalars['DateTime']
  description: Scalars['String']
  displayName: Scalars['String']
  id: Scalars['Int']
  slots: Array<Slot>
  updatedAt: Scalars['DateTime']
}

export type GarageAvailableSlotsArgs = {
  dateFilter: DateFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
}

export type GarageFilter = {
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<GarageWhereInput>
}

export type GarageListRelationFilter = {
  every?: InputMaybe<GarageWhereInput>
  none?: InputMaybe<GarageWhereInput>
  some?: InputMaybe<GarageWhereInput>
}

export type GarageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type GarageOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  slots?: InputMaybe<SlotOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type GarageRelationFilter = {
  is?: InputMaybe<GarageWhereInput>
  isNot?: InputMaybe<GarageWhereInput>
}

export enum GarageScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type GarageWhereInput = {
  AND?: InputMaybe<Array<GarageWhereInput>>
  NOT?: InputMaybe<Array<GarageWhereInput>>
  OR?: InputMaybe<Array<GarageWhereInput>>
  address?: InputMaybe<AddressRelationFilter>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  slots?: InputMaybe<SlotListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type GarageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
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
  nw_lat: Scalars['Float']
  nw_lng: Scalars['Float']
  se_lat: Scalars['Float']
  se_lng: Scalars['Float']
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
  company: Company
  companyId: Scalars['Int']
  createdAt: Scalars['DateTime']
  displayName: Scalars['String']
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
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ManagerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>
  NOT?: InputMaybe<Array<ManagerWhereInput>>
  OR?: InputMaybe<Array<ManagerWhereInput>>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ManagerWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['Int']>
  uid?: InputMaybe<Scalars['String']>
}

export type MinimalSlotGroupBy = {
  __typename?: 'MinimalSlotGroupBy'
  count: Scalars['Int']
  pricePerHour: Scalars['Int']
  type?: Maybe<SlotType>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAddress: Address
  createBooking: Booking
  createCompany: Company
  createCustomer: Customer
  createGarage: Garage
  createManager: Manager
  createManySlots: ReturnCount
  createSlot: Slot
  login: LoginOutput
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeAddress: Address
  removeBooking: Booking
  removeCompany: Company
  removeCustomer: Customer
  removeGarage: Garage
  removeManager: Manager
  removeSlot: Slot
  setAdmin: Scalars['Boolean']
  setRole: Scalars['Boolean']
  updateAddress: Address
  updateBooking: Booking
  updateCompany: Company
  updateCustomer: Customer
  updateGarage: Garage
  updateManager: Manager
  updateSlot: Slot
}

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput
}

export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput
}

export type MutationCreateGarageArgs = {
  createGarageInput: CreateGarageInput
}

export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput
}

export type MutationCreateManySlotsArgs = {
  slots: Array<CreateSlotInput>
}

export type MutationCreateSlotArgs = {
  createSlotInput: CreateSlotInput
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

export type MutationRemoveAddressArgs = {
  where?: InputMaybe<AddressWhereUniqueInput>
}

export type MutationRemoveBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type MutationRemoveCompanyArgs = {
  where?: InputMaybe<CompanyWhereUniqueInput>
}

export type MutationRemoveCustomerArgs = {
  where?: InputMaybe<CustomerWhereUniqueInput>
}

export type MutationRemoveGarageArgs = {
  where?: InputMaybe<GarageWhereUniqueInput>
}

export type MutationRemoveManagerArgs = {
  where?: InputMaybe<ManagerWhereUniqueInput>
}

export type MutationRemoveSlotArgs = {
  where?: InputMaybe<SlotWhereUniqueInput>
}

export type MutationSetAdminArgs = {
  uid: Scalars['String']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput
}

export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput
}

export type MutationUpdateGarageArgs = {
  updateGarageInput: UpdateGarageInput
}

export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput
}

export type MutationUpdateSlotArgs = {
  updateSlotInput: UpdateSlotInput
}

export type Query = {
  __typename?: 'Query'
  address: Address
  addresses: Array<Address>
  booking: Booking
  bookings: Array<Booking>
  companies: Array<Company>
  company: Company
  customer: Customer
  customers: Array<Customer>
  garage: Garage
  garages: Array<Garage>
  manager: Manager
  managers: Array<Manager>
  searchGarages: Array<Garage>
  slot: Slot
  slots: Array<Slot>
}

export type QueryAddressArgs = {
  where?: InputMaybe<AddressWhereUniqueInput>
}

export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AddressWhereInput>
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

export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CompanyWhereInput>
}

export type QueryCompanyArgs = {
  where?: InputMaybe<CompanyWhereUniqueInput>
}

export type QueryCustomerArgs = {
  where?: InputMaybe<CustomerWhereUniqueInput>
}

export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CustomerWhereInput>
}

export type QueryGarageArgs = {
  where?: InputMaybe<GarageWhereUniqueInput>
}

export type QueryGaragesArgs = {
  cursor?: InputMaybe<GarageWhereUniqueInput>
  distinct?: InputMaybe<Array<GarageScalarFieldEnum>>
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<GarageWhereInput>
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

export type QuerySearchGaragesArgs = {
  dateFilter: DateFilterInput
  garageFilter?: InputMaybe<GarageFilter>
  locationFilter: LocationFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
}

export type QuerySlotArgs = {
  where?: InputMaybe<SlotWhereUniqueInput>
}

export type QuerySlotsArgs = {
  cursor?: InputMaybe<SlotWhereUniqueInput>
  distinct?: InputMaybe<Array<SlotScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SlotOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SlotWhereInput>
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

export type ReturnCount = {
  __typename?: 'ReturnCount'
  count: Scalars['Int']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']
}

export type Slot = {
  __typename?: 'Slot'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']
  displayName?: Maybe<Scalars['String']>
  garage: Garage
  garageId: Scalars['Int']
  height?: Maybe<Scalars['Int']>
  id: Scalars['Int']
  length?: Maybe<Scalars['Int']>
  pricePerHour: Scalars['Int']
  type?: Maybe<SlotType>
  updatedAt: Scalars['DateTime']
  width?: Maybe<Scalars['Int']>
}

export type SlotListRelationFilter = {
  every?: InputMaybe<SlotWhereInput>
  none?: InputMaybe<SlotWhereInput>
  some?: InputMaybe<SlotWhereInput>
}

export type SlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SlotOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  garage?: InputMaybe<GarageOrderByWithRelationInput>
  garageId?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  length?: InputMaybe<SortOrder>
  pricePerHour?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type SlotRelationFilter = {
  is?: InputMaybe<SlotWhereInput>
  isNot?: InputMaybe<SlotWhereInput>
}

export enum SlotScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  GarageId = 'garageId',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  PricePerHour = 'pricePerHour',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Width = 'width',
}

export enum SlotType {
  Bicycle = 'BICYCLE',
  Bike = 'BIKE',
  Car = 'CAR',
  Heavy = 'HEAVY',
}

export type SlotWhereInput = {
  AND?: InputMaybe<Array<SlotWhereInput>>
  NOT?: InputMaybe<Array<SlotWhereInput>>
  OR?: InputMaybe<Array<SlotWhereInput>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  garage?: InputMaybe<GarageRelationFilter>
  garageId?: InputMaybe<IntFilter>
  height?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  length?: InputMaybe<IntFilter>
  pricePerHour?: InputMaybe<FloatFilter>
  type?: InputMaybe<EnumSlotTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  width?: InputMaybe<IntFilter>
}

export type SlotWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
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

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']>
  garageId?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  lat?: InputMaybe<Scalars['Int']>
  lng?: InputMaybe<Scalars['Int']>
}

export type UpdateBookingInput = {
  customerId?: InputMaybe<Scalars['String']>
  endTime?: InputMaybe<Scalars['DateTime']>
  garageId?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  startTime?: InputMaybe<Scalars['DateTime']>
  type?: InputMaybe<SlotType>
  vehicleNumber?: InputMaybe<Scalars['String']>
}

export type UpdateCompanyInput = {
  displayName?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  managerDisplayName?: InputMaybe<Scalars['String']>
}

export type UpdateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type UpdateGarageInput = {
  companyId?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
}

export type UpdateManagerInput = {
  companyId?: InputMaybe<Scalars['Int']>
  displayName?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateSlotInput = {
  displayName?: InputMaybe<Scalars['String']>
  garageId?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  length?: InputMaybe<Scalars['Int']>
  pricePerHour?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<SlotType>
  width?: InputMaybe<Scalars['Int']>
}

export type CreateManagerMutationVariables = Exact<{
  createManagerInput: CreateManagerInput
}>

export type CreateManagerMutation = {
  __typename?: 'Mutation'
  createManager: { __typename?: 'Manager'; uid: string }
}

export type CreateCustomerMutationVariables = Exact<{
  createCustomerInput: CreateCustomerInput
}>

export type CreateCustomerMutation = {
  __typename?: 'Mutation'
  createCustomer: { __typename?: 'Customer'; uid: string }
}

export type SearchGaragesQueryVariables = Exact<{
  dateFilter: DateFilterInput
  locationFilter: LocationFilterInput
  garageFilter?: InputMaybe<GarageFilter>
  slotsFilter?: InputMaybe<SlotWhereInput>
}>

export type SearchGaragesQuery = {
  __typename?: 'Query'
  searchGarages: Array<{
    __typename?: 'Garage'
    id: number
    displayName: string
    address: {
      __typename?: 'Address'
      lat: number
      lng: number
      address: string
    }
    availableSlots: Array<{
      __typename?: 'MinimalSlotGroupBy'
      type?: SlotType | null
      count: number
      pricePerHour: number
    }>
  }>
}

export type CreateBookingMutationVariables = Exact<{
  createBookingInput: CreateBookingInput
}>

export type CreateBookingMutation = {
  __typename?: 'Mutation'
  createBooking: { __typename?: 'Booking'; id: number; passcode: string }
}

export type LoginMutationVariables = Exact<{
  credentials: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    refreshToken: string
    localId: string
    kind: string
    idToken: string
    expiresIn: string
    email: string
    displayName: string
  }
}

export type GetManagerQueryVariables = Exact<{
  where: ManagerWhereUniqueInput
}>

export type GetManagerQuery = {
  __typename?: 'Query'
  manager: {
    __typename?: 'Manager'
    uid: string
    createdAt: any
    updatedAt: any
    displayName: string
  }
}

export type CreateCompanyMutationVariables = Exact<{
  createCompanyInput: CreateCompanyInput
}>

export type CreateCompanyMutation = {
  __typename?: 'Mutation'
  createCompany: { __typename?: 'Company'; id: number }
}

export type CreateManySlotsMutationVariables = Exact<{
  slots: Array<CreateSlotInput> | CreateSlotInput
}>

export type CreateManySlotsMutation = {
  __typename?: 'Mutation'
  createManySlots: { __typename?: 'ReturnCount'; count: number }
}

export const namedOperations = {
  Query: {
    SearchGarages: 'SearchGarages',
    getManager: 'getManager',
  },
  Mutation: {
    CreateManager: 'CreateManager',
    CreateCustomer: 'CreateCustomer',
    createBooking: 'createBooking',
    Login: 'Login',
    createCompany: 'createCompany',
    createManySlots: 'createManySlots',
  },
}

export const CreateManagerDocument = /*#__PURE__*/ gql`
  mutation CreateManager($createManagerInput: CreateManagerInput!) {
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
export const CreateCustomerDocument = /*#__PURE__*/ gql`
  mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
    createCustomer(createCustomerInput: $createCustomerInput) {
      uid
    }
  }
`
export type CreateCustomerMutationFn = Apollo.MutationFunction<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      createCustomerInput: // value for 'createCustomerInput'
 *   },
 * });
 */
export function useCreateCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >(CreateCustomerDocument, options)
}
export type CreateCustomerMutationHookResult = ReturnType<
  typeof useCreateCustomerMutation
>
export type CreateCustomerMutationResult =
  Apollo.MutationResult<CreateCustomerMutation>
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>
export const SearchGaragesDocument = /*#__PURE__*/ gql`
  query SearchGarages(
    $dateFilter: DateFilterInput!
    $locationFilter: LocationFilterInput!
    $garageFilter: GarageFilter
    $slotsFilter: SlotWhereInput
  ) {
    searchGarages(
      dateFilter: $dateFilter
      locationFilter: $locationFilter
      garageFilter: $garageFilter
      slotsFilter: $slotsFilter
    ) {
      id
      address {
        lat
        lng
        address
      }
      displayName
      availableSlots(slotsFilter: $slotsFilter, dateFilter: $dateFilter) {
        type
        count
        pricePerHour
      }
    }
  }
`

/**
 * __useSearchGaragesQuery__
 *
 * To run a query within a React component, call `useSearchGaragesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGaragesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGaragesQuery({
 *   variables: {
 *      dateFilter: // value for 'dateFilter'
 *      locationFilter: // value for 'locationFilter'
 *      garageFilter: // value for 'garageFilter'
 *      slotsFilter: // value for 'slotsFilter'
 *   },
 * });
 */
export function useSearchGaragesQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchGaragesQuery,
    SearchGaragesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchGaragesQuery, SearchGaragesQueryVariables>(
    SearchGaragesDocument,
    options,
  )
}
export function useSearchGaragesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchGaragesQuery,
    SearchGaragesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchGaragesQuery, SearchGaragesQueryVariables>(
    SearchGaragesDocument,
    options,
  )
}
export type SearchGaragesQueryHookResult = ReturnType<
  typeof useSearchGaragesQuery
>
export type SearchGaragesLazyQueryHookResult = ReturnType<
  typeof useSearchGaragesLazyQuery
>
export type SearchGaragesQueryResult = Apollo.QueryResult<
  SearchGaragesQuery,
  SearchGaragesQueryVariables
>
export const CreateBookingDocument = /*#__PURE__*/ gql`
  mutation createBooking($createBookingInput: CreateBookingInput!) {
    createBooking(createBookingInput: $createBookingInput) {
      id
      passcode
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
export const LoginDocument = /*#__PURE__*/ gql`
  mutation Login($credentials: LoginInput!) {
    login(credentials: $credentials) {
      refreshToken
      localId
      kind
      idToken
      expiresIn
      email
      displayName
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
export const GetManagerDocument = /*#__PURE__*/ gql`
  query getManager($where: ManagerWhereUniqueInput!) {
    manager(where: $where) {
      uid
      createdAt
      updatedAt
      displayName
    }
  }
`

/**
 * __useGetManagerQuery__
 *
 * To run a query within a React component, call `useGetManagerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManagerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManagerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetManagerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetManagerQuery,
    GetManagerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetManagerQuery, GetManagerQueryVariables>(
    GetManagerDocument,
    options,
  )
}
export function useGetManagerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetManagerQuery,
    GetManagerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetManagerQuery, GetManagerQueryVariables>(
    GetManagerDocument,
    options,
  )
}
export type GetManagerQueryHookResult = ReturnType<typeof useGetManagerQuery>
export type GetManagerLazyQueryHookResult = ReturnType<
  typeof useGetManagerLazyQuery
>
export type GetManagerQueryResult = Apollo.QueryResult<
  GetManagerQuery,
  GetManagerQueryVariables
>
export const CreateCompanyDocument = /*#__PURE__*/ gql`
  mutation createCompany($createCompanyInput: CreateCompanyInput!) {
    createCompany(createCompanyInput: $createCompanyInput) {
      id
    }
  }
`
export type CreateCompanyMutationFn = Apollo.MutationFunction<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      createCompanyInput: // value for 'createCompanyInput'
 *   },
 * });
 */
export function useCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >(CreateCompanyDocument, options)
}
export type CreateCompanyMutationHookResult = ReturnType<
  typeof useCreateCompanyMutation
>
export type CreateCompanyMutationResult =
  Apollo.MutationResult<CreateCompanyMutation>
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>
export const CreateManySlotsDocument = /*#__PURE__*/ gql`
  mutation createManySlots($slots: [CreateSlotInput!]!) {
    createManySlots(slots: $slots) {
      count
    }
  }
`
export type CreateManySlotsMutationFn = Apollo.MutationFunction<
  CreateManySlotsMutation,
  CreateManySlotsMutationVariables
>

/**
 * __useCreateManySlotsMutation__
 *
 * To run a mutation, you first call `useCreateManySlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManySlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManySlotsMutation, { data, loading, error }] = useCreateManySlotsMutation({
 *   variables: {
 *      slots: // value for 'slots'
 *   },
 * });
 */
export function useCreateManySlotsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateManySlotsMutation,
    CreateManySlotsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateManySlotsMutation,
    CreateManySlotsMutationVariables
  >(CreateManySlotsDocument, options)
}
export type CreateManySlotsMutationHookResult = ReturnType<
  typeof useCreateManySlotsMutation
>
export type CreateManySlotsMutationResult =
  Apollo.MutationResult<CreateManySlotsMutation>
export type CreateManySlotsMutationOptions = Apollo.BaseMutationOptions<
  CreateManySlotsMutation,
  CreateManySlotsMutationVariables
>
