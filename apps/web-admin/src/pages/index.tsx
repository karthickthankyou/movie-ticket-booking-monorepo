import { Admin } from '@showtime-org/ui/src/components/templates-admin/Admin'
import { IsAdmin } from '@showtime-org/ui/src/components/templates/IsAdmin'
import { IsLoggedIn } from '@showtime-org/ui/src/components/organisms/IsLoggedIn'
import { Container } from '@showtime-org/ui/src/components/atoms/Container'
export default function Home() {
  return (
    <main>
      <Container>
        <IsLoggedIn>
          <IsAdmin>
            <Admin />
          </IsAdmin>
        </IsLoggedIn>
      </Container>
    </main>
  )
}
