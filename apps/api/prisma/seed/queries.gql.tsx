import { gql } from 'graphql-request'

export const createCinema = gql`
  mutation createCinema($createCinemaInput: CreateCinemaInput!) {
    createCinema(createCinemaInput: $createCinemaInput) {
      id
    }
  }
`
export const createUser = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      uid
      name
      createdAt
      updatedAt
    }
  }
`
