import '@booking-web/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { AppProps } from 'next/app'
import { ReduxProvider } from '@showtime-org/store/provider'
import { ApolloProvider } from '@showtime-org/network/src/config/apollo'
import { AppLevelListeners } from '@showtime-org/ui/src/components/atoms/AppLevelListeners'
import { Notifications } from '@showtime-org/ui/src/components/organisms/Notifications'
import { MenuItem } from '@showtime-org/types'
import { Header } from '@showtime-org/ui/src/components/organisms/Header'
import { Footer } from '@showtime-org/ui/src/components/organisms/Footer'

const MENUITEMS: MenuItem[] = [
  { href: '/cinemas', label: 'Search' },
  { href: '/tickets', label: 'Tickets', loggedIn: true },
]
const SUBMENUITEMS: MenuItem[] = [
  ...MENUITEMS,
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faqs', label: 'Faqs' },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <AppLevelListeners />
        <Header menuItems={MENUITEMS} sideMenuItems={SUBMENUITEMS} />
        <Component {...pageProps} />
        <Footer />
        <Notifications />
      </ApolloProvider>
    </ReduxProvider>
  )
}
