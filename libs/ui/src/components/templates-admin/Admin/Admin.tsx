import { useAppDispatch, useAppSelector } from '@showtime-org/store'
import { selectUser } from '@showtime-org/store/user'
import { LoginForm } from '@showtime-org/ui/src/components/templates/LoginForm'
import { Container } from '@showtime-org/ui/src/components/atoms/Container'
import { ListMovies } from '../ListMovies'
import { CreateMovie } from '../CreateMovie'

export interface IAdminProps {}

export const Admin = ({}: IAdminProps) => {
  const { uid, roles } = useAppSelector(selectUser)
  if (!uid) {
    return (
      <div className="w-full max-w-lg mx-auto mt-12">
        <LoginForm linkToRegister={false} />
      </div>
    )
  }
  if (!roles?.includes('admin')) {
    return <Container>Hey, you dont have admin privileges. Come on!</Container>
  }
  return (
    <Container>
      <ListMovies />
      <CreateMovie />
    </Container>
  )
}
