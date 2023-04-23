import { ReactNode } from 'react'
import { Pagination } from '../../molecules/Pagination'
import { LoaderPanel } from '../../molecules/Loader'
import { IconBox } from '@tabler/icons-react'

export interface IShowDataProps {
  loading: boolean
  pagination: {
    skip?: number
    take?: number
    resultCount: number
    totalCount: number
    setSkip: (skip: number) => void
    setTake: (take: number) => void
  }
  children?: ReactNode
}
export const NoCampaignResults = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-60 bg-gray-50">
      <IconBox className="w-10 h-10" />
      <div className="text-sm">No results</div>
    </div>
  )
}

export const ShowData = ({
  loading,
  pagination: {
    resultCount,
    setSkip,
    setTake,
    skip = 0,
    take = 12,
    totalCount,
  },
  children,
}: IShowDataProps) => {
  return (
    <div>
      {loading && <LoaderPanel />}
      {!loading && resultCount === 0 && <NoCampaignResults />}

      {!loading && resultCount > 0 && (
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {children}
          </div>
          <Pagination
            count={totalCount || 0}
            page={(skip || 0) / (take || 12)}
            rowsPerPage={take || 0}
            rowsPerPageOptions={[2, 4, 12, 24, 36, 48]}
            onPageChange={(v, c) => setSkip(c * (take || 12))}
            onRowsPerPageChange={(v) => {
              setTake(+v.target.value)
            }}
          />
        </div>
      )}
    </div>
  )
}
