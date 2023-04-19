export interface IBrandIconProps {
  className?: string
  animate?: boolean
  shadow?: boolean
  height?: number
  width?: number
}

export const BrandIcon = ({
  className,
  animate = false,
  shadow = false,
  width = 24,
  height = 24,
}: IBrandIconProps) => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center w-4 h-6 border-2 border-yellow-500">
        <div className="w-2 h-4 bg-gray-100 shadow animate-park-car " />
      </div>
    </div>
  )
}
