import { useAppDispatch, useAppSelector } from '@showtime-org/store'
import { selectUser } from '@showtime-org/store/user'
import { LoginForm } from '@showtime-org/ui/src/components/templates/LoginForm'
import { Container } from '@showtime-org/ui/src/components/atoms/Container'
import { ListMovies } from '../ListMovies'
import { CreateMovie } from '../CreateMovie'
import { Button } from '../../atoms/Button'
import { SetStateAction, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { IconPlus } from '@tabler/icons-react'

export interface IAdminProps {}

export const Admin = ({}: IAdminProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Dialog title="Create movie" open={open} setOpen={setOpen}>
        <CreateMovie />
      </Dialog>
      <div className="flex justify-end my-2">
        <Button variant="text" size="none" onClick={() => setOpen(true)}>
          <div className="flex items-center gap-2">
            <IconPlus /> Create movie
          </div>
        </Button>
      </div>
      <ListMovies />
    </Container>
  )
}
