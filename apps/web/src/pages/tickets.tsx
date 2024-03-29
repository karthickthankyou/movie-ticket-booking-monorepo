import { Container } from '@showtime-org/ui/src/components/atoms/Container'
import Head from 'next/head'
import { Tickets } from '@showtime-org/ui/src/components/templates/Tickets'

export default function Login() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Tickets />
        </Container>
      </main>
    </>
  )
}
