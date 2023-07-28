import { ReactNode } from 'react'
import { SimplePagination } from '../../organisms/SimplePagination'
import { LoaderPanel } from '../../molecules/Loader'
import { IconBox } from '@tabler/icons-react'
import { SimplePaginationProps } from '../../organisms/SimplePagination/SimplePagination'

export interface IShowDataProps {
  loading: boolean
  pagination: SimplePaginationProps
  children?: ReactNode
  className?: string
}
export const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-60 bg-gray-50">
      <IconBox className="w-10 h-10" />
      <div className="text-sm">No results</div>
    </div>
  )
}

export const ShowData = ({
  loading,
  pagination: { resultCount, setSkip, setTake, skip = 0, take = 12 },
  children,
  className = 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}: IShowDataProps) => {
  return (
    <div>
      {loading && <LoaderPanel />}
      {!loading && resultCount === 0 && <NoResults />}

      {!loading && resultCount > 0 && (
        <div>
          <div className={className}>{children}</div>
          <SimplePagination
            setSkip={setSkip}
            setTake={setTake}
            skip={skip}
            take={take}
            resultCount={resultCount}
          />
        </div>
      )}
    </div>
  )
}
