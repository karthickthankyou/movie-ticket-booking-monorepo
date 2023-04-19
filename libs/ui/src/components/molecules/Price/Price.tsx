export interface IPriceProps {
  price: number
  previousPrice?: number
  className?: string
}

export const Price = ({ price, className }: IPriceProps) => {
  return <div className={`text-sm ${className}`}>Rs.{price}</div>
}
