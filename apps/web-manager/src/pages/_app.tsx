import '@admin-web/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { AppProps } from 'next/app'
import { ReduxProvider } from '@showtime-org/store/provider'
import { ApolloProvider } from '@showtime-org/network/src/config/apollo'
import { Header } from '@showtime-org/ui/src/components/organisms/Header'
import { AppLevelListeners } from '@showtime-org/ui/src/components/atoms/AppLevelListeners'
import { Notifications } from '@showtime-org/ui/src/components/organisms/Notifications'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <Header
          menuItems={[
            ['Create cinema', '/createCinema'],
            ['Settings', '/settings'],
          ]}
          sideMenuItems={[
            ['Create cinema', '/createCinema'],
            ['Settings', '/settings'],
          ]}
          type="manager"
        />
        <AppLevelListeners />
        <Component {...pageProps} />
        <Notifications />
      </ApolloProvider>
    </ReduxProvider>
  )
}