import { ReactNode } from 'react'
import {
  CinemasQuery,
  useCinemasQuery,
} from '@showtime-org/network/src/generated'
import Link from 'next/link'

import { LoaderPanel } from '../../molecules/Loader'
import { CreateCinema } from '../../templates/CreateCinema'
type RenderPropChild = (cinemas: CinemasQuery['cinemas']) => ReactNode

export interface IIsManagerProps {
  children: RenderPropChild | ReactNode
  uid: string
}
export const IsManager = ({ children, uid }: IIsManagerProps) => {
  const { data, loading } = useCinemasQuery({
    variables: { where: { managers: { some: { uid: { equals: uid } } } } },
  })

  if (loading) {
    return <LoaderPanel />
  }

  if (!data?.cinemas.length) {
    return <CreateCinema />
  }

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.cinemas)
        : children}
    </>
  )
}
