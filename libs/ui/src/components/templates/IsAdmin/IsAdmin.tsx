import { useAdminMeQuery } from '@showtime-org/network/src/generated'
import { LoaderPanel } from '../../molecules/Loader'
import { ReactNode } from 'react'
import { AlertSection } from '../../organisms/AlertSection'

export interface IIsAdminProps {
  children: ReactNode
}

export const IsAdmin = ({ children }: IIsAdminProps) => {
  const { data, loading } = useAdminMeQuery()
  if (loading) {
    return <LoaderPanel />
  }

  if (!data?.adminMe) {
    return (
      <AlertSection title="Nope.">You do not have admin rights!</AlertSection>
    )
  }
  return <>{children}</>
}
