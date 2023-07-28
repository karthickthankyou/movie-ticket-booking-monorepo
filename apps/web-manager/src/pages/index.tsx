import { useCinemasQuery } from '@showtime-org/network/src/generated'
import { Container } from '@showtime-org/ui/src/components/atoms/Container'
import { IsLoggedIn } from '@showtime-org/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@showtime-org/ui/src/components/organisms/IsManager'
import {
  Manager,
  ShowCinema,
} from '@showtime-org/ui/src/components/templates/Manager/Manager'

export default function Home() {
  return (
    <main>
      <Container>
        <IsLoggedIn>
          {(uid) => (
            <IsManager uid={uid}>
              {(cinemas) => <Manager cinemas={cinemas} />}
            </IsManager>
          )}
        </IsLoggedIn>
      </Container>
    </main>
  )
}
