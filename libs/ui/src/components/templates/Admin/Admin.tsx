import { useAppDispatch, useAppSelector } from '@showtime-org/store'
import { selectUser } from '@showtime-org/store/user'
import { LoginForm } from '../LoginForm'
import { Container } from '../../atoms/Container'

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
  return <Container>Hello, This is Admin component!</Container>
}
