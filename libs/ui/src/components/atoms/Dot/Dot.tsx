import { ReactNode } from 'react'

export interface IDotProps {
  children?: ReactNode
}

const PulsingDot = ({ children }: IDotProps) => {
  if (children)
    return (
      <div className="absolute top-0 right-0 px-1 bg-yellow-500 rounded-full animate-pulse">
        {children}
      </div>
    )
  return (
    <div className="absolute top-0 right-0 bg-yellow-500 rounded-full animate-pulse">
      <div className="w-2 h-2" />
    </div>
  )
}

export { PulsingDot }
