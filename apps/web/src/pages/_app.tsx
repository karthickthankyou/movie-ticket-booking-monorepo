import '@booking-web/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { AppProps } from 'next/app'
import { ReduxProvider } from '@showtime-org/store/provider'
import { ApolloProvider } from '@showtime-org/network/src/config/apollo'
import { Layout } from '@showtime-org/ui/src/components/templates/Layout'
import { AppLevelListeners } from '@showtime-org/ui/src/components/atoms/AppLevelListeners'
import { Notifications } from '@showtime-org/ui/src/components/organisms/Notifications'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <Layout>
          <AppLevelListeners />
          <Component {...pageProps} />
          <Notifications />
        </Layout>
      </ApolloProvider>
    </ReduxProvider>
  )
}
