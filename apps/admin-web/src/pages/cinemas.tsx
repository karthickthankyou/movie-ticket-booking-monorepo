import { Container } from '@showtime-org/ui/src/components/atoms/Container'
import { ListCinemas } from '@showtime-org/ui/src/components/templates-admin/ListCinemas'
export default function Home() {
  return (
    <main>
      <Container>
        <ListCinemas />
      </Container>
    </main>
  )
}
