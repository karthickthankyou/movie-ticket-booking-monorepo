import { BrandIcon } from '../BrandIcon'

export interface IBrandProps {
  shortForm?: boolean
  className?: string
  type?: 'admin' | 'manager' | ''
}

export const Brand = ({
  shortForm = false,
  className,
  type = '',
}: IBrandProps) => {
  return (
    <div className={`grid place-items-center ${className}`}>
      <div className="text-xl ">
        {shortForm ? (
          <div className="flex gap-1">
            <BrandIcon animate className="mb-1 stroke-2 " /> S.
          </div>
        ) : (
          <div className="flex items-center gap-1 tracking-tighter font-playfair">
            <BrandIcon animate className="mb-1 stroke-2 " /> Showtime{' '}
            <span className="text-xs">{type}</span>
          </div>
        )}
      </div>
    </div>
  )
}
