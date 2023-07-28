import '@admin-web/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { AppProps } from 'next/app'
import { ReduxProvider } from '@showtime-org/store/provider'
import { ApolloProvider } from '@showtime-org/network/src/config/apollo'
import { Header } from '@showtime-org/ui/src/components/organisms/Header'
import { AppLevelListeners } from '@showtime-org/ui/src/components/atoms/AppLevelListeners'
import { Notifications } from '@showtime-org/ui/src/components/organisms/Notifications'

const menuItems = [
  { href: '/createShowtime', label: 'Create Showtime' },
  { href: '/createCinema', label: 'Create cinema' },
  { href: '/settings', label: 'Settings' },
]

const sideMenuItems = [...menuItems]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <Header
          menuItems={menuItems}
          sideMenuItems={sideMenuItems}
          type="manager"
        />
        <AppLevelListeners />
        <Component {...pageProps} />
        <Notifications />
      </ApolloProvider>
    </ReduxProvider>
  )
}
