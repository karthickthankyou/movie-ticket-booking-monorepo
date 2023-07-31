import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAppSelector } from '@showtime-org/store'
import { selectUser } from '@showtime-org/store/user'
import { ReactNode } from 'react'
import jwtDecode from 'jwt-decode'
import { getAuth } from 'firebase/auth'

export interface IApolloProviderProps {
  children: ReactNode
}

const getUpToDateToken = async (token?: string) => {
  if (!token) {
    return null
  }
  const decoded: any = jwtDecode(token)
  const currentTime = Date.now() / 1000

  // Refresh the token if it's expired or about to expire (e.g., 5 minutes before expiration)
  if (decoded?.exp && decoded.exp - currentTime < 300) {
    const auth = getAuth()
    const user = auth.currentUser
    return user ? user.getIdToken(true) : null
  }

  return token
}

export const ApolloProvider = ({ children }: IApolloProviderProps) => {
  const user = useAppSelector(selectUser)

  //   Create an http link
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  })

  const authLink = setContext(async (_, { headers }) => {
    const token: string | null = await getUpToDateToken(user?.token)
    if (!token) {
      return {
        headers,
      }
    }

    return {
      headers: {
        ...headers,
        authorization: user.token ? `Bearer ${token}` : '',
      },
    }
  })

  // Create an Apollo Client instance
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <Provider client={apolloClient}>{children}</Provider>
}
