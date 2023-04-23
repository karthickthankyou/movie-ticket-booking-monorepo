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
    <svg
      className="w-8 h-6 "
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,10 Q100,20 200,10 L200,90 Q100,80 0,90 Z"
        className="stroke-[16] stroke-primary fill-white/50"
      />
    </svg>
  )
}
