import { ReactElement } from 'react'

import { Footer } from '@showtime-org/ui/src/components/organisms/Footer'
import { Header } from '@showtime-org/ui/src/components/organisms/Header'
import { useRouter } from 'next/router'

interface ILayoutProps {
  children: ReactElement | ReactElement[]
}

const NoNavUrls = ['/register', '/login']

export const Layout = ({ children }: ILayoutProps) => {
  const url = useRouter().pathname

  return NoNavUrls.includes(url) ? (
    <main>{children}</main>
  ) : (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
