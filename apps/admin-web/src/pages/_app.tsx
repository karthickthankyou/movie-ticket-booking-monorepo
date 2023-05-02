import '@admin-web/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import type { AppProps } from 'next/app'
import { ReduxProvider } from '@showtime-org/store/provider'
import { ApolloProvider } from '@showtime-org/network/src/config/apollo'

import { AppLevelListeners } from '@showtime-org/ui/src/components/atoms/AppLevelListeners'
import { Notifications } from '@showtime-org/ui/src/components/organisms/Notifications'
import { Header } from '@showtime-org/ui/src/components/organisms/Header'

const menuitems: [string, string][] = [
  ['Movies', '/'],
  ['Cinemas', '/cinemas'],
]

const subMenuItems: [string, string][] = [
  ...menuitems,
  ['Create cinema', '/createCinema'],
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <Header
          menuItems={menuitems}
          sideMenuItems={subMenuItems}
          type="admin"
        />
        <AppLevelListeners />
        <Component {...pageProps} />
        <Notifications />
      </ApolloProvider>
    </ReduxProvider>
  )
}
