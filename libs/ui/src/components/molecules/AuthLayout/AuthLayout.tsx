import { ReactNode } from 'react'
import { BrandIcon } from '../../atoms/BrandIcon'

export interface IAuthLayoutProps {
  children: ReactNode
  title: string
}

export const AuthLayout = ({ title, children }: IAuthLayoutProps) => {
  return (
    <div className="flex flex-col items-center h-screen bg-food-pattern">
      <div className="w-full max-w-lg p-4 mx-auto mt-36">
        <h1 className="flex items-end gap-2 mb-2 ml-4 text-2xl">
          {' '}
          <BrandIcon height={36} className="mb-1" width={36} animate />{' '}
          <div>{title}</div>
        </h1>
        <div className="w-full max-w-lg p-4 mx-auto bg-white rounded shadow-lg">
          {children}
        </div>
      </div>
    </div>
  )
}
