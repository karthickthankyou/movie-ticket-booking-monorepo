import { ReactNode } from 'react'

export interface IShowHideProps {
  show: boolean
  children: ReactNode
}

export const ShowHide = ({
  show,
  children,
}: IShowHideProps): JSX.Element | null => {
  return show ? <>{children}</> : null
}
