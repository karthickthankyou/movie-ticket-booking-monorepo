import { useAppSelector } from '@showtime-org/store'
import { useFindCinemaLazyQuery } from '@showtime-org/network/src/generated'
import { useEffect } from 'react'
import { selectUid } from '@showtime-org/store/user'
import { CreateCinema } from '../CreateCinema'
import { LoaderPanel } from '../../molecules/Loader'
import Link from 'next/link'
import { CreateScreen } from '../CreateScreen'

export interface IManagerProps {}

export const Manager = ({}: IManagerProps) => {
  const uid = useAppSelector(selectUid)
  const [findCinema, { data, loading }] = useFindCinemaLazyQuery()

  useEffect(() => {
    if (uid)
      findCinema({
        variables: {
          uid,
        },
      })
  }, [findCinema, uid])

  if (loading) return <LoaderPanel />
  if (!uid) return <Link href="/login">Login</Link>
  if (!data?.cinema)
    return (
      <div className="flex items-center justify-center">
        <div className="p-4 space-y-2 shadow-sm">
          <div>You dont have a cinema associated with you.</div>
          <Link className="underline underline-offset-4" href={'/createCinema'}>
            Create cinema
          </Link>
        </div>
      </div>
    )
  if (!data.cinema.screens.length) return <CreateScreen />
  return (
    <div>
      Hello, This is Manager component!
      <div>{data.cinema.name}</div>
      <div>
        {data.cinema.screens.map((screen) => (
          <>
            <div>{screen.id}</div>
            <div>{screen.seatsCount}</div>
          </>
        ))}
      </div>
    </div>
  )
}
