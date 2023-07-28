import { useAppSelector } from '@showtime-org/store'
import { selectUser } from '@showtime-org/store/user'
import Link from 'next/link'
import { LoaderPanel } from '../../molecules/Loader'
import { AlertSection } from '../AlertSection'
import { ReactNode } from 'react'

type RenderPropChild = (uid: string) => ReactNode

export const IsLoggedIn = ({
  children,
  notLoggedIn,
}: {
  children: RenderPropChild | ReactNode
  notLoggedIn?: ReactNode
}) => {
  const { uid, loaded } = useAppSelector(selectUser)

  if (!loaded) {
    return <LoaderPanel />
  }

  if (!uid) {
    if (notLoggedIn) {
      return <>{notLoggedIn}</>
    } else {
      return (
        <AlertSection title="You are not logged in.">
          <Link href="/login">Login to continue.</Link>
        </AlertSection>
      )
    }
  }

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(uid)
        : children}
    </>
  )
}
