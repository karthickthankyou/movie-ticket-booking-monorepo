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
            <BrandIcon className="mb-1 stroke-2 text-primary " /> S!
          </div>
        ) : (
          <div className="flex items-center gap-1 tracking-tighter font-playfair">
            <div style={{ perspective: '50px' }}>
              <div
                className="flex gap-2 font-medium leading-5 tracking-widest uppercase"
                style={{ transform: 'rotateX(22deg)' }}
              >
                {/* <BrandIcon className="stroke-2 text-primary" /> */}
                <div>Showtime!</div>
                <span className="text-xs">{type}</span>
              </div>

              <div className="text-xs text-gray">Karthick Ragavendran</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
