import Link from 'next/link'

import { IconDoorExit, IconMenu2, IconUser } from '@tabler/icons-react'

import { Sidebar } from '../Sidebar'

import { Dispatch, SetStateAction, useState } from 'react'

import { Brand } from '../../atoms/Brand'

import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'
import { useAppSelector, useAppDispatch } from '@showtime-org/store'
import { selectUser } from '@showtime-org/store/user'
import { signOut } from '@showtime-org/network/src/auth'
import { IBrandProps } from '../../atoms/Brand/Brand'

export type MenuItem = [string, string]
const MENUITEMS: MenuItem[] = [
  ['Search', '/cinemas'],
  ['Manager', '/manager'],
  ['Admin', '/admin'],
]
const SUBMENUITEMS: MenuItem[] = [
  ...MENUITEMS,
  ['About', '/about'],
  ['How it works', '/how-it-works'],
  ['Contact', '/contact'],
  ['FAQs', '/faqs'],
]

export const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    key={label}
    href={href}
    className="text-sm hover:text-black hover:underline underline-offset-4"
  >
    {label}
  </Link>
)

export const NavSidebar = ({
  open,
  setOpen,
  menuItems,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  menuItems: [string, string][]
}) => {
  const user = useAppSelector(selectUser)

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <Sidebar.Header>
        <Brand shortForm />
      </Sidebar.Header>
      <Sidebar.Body>
        <div className="flex flex-col items-start space-y-1">
          {menuItems.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}

          <div className="py-2" />
        </div>
      </Sidebar.Body>
      <Sidebar.Footer>
        {!user.uid ? (
          <>
            <Link
              href="/login"
              className="py-2 block w-full border border-black rounded text-black text-center mt-1.5 font-medium capitalize"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="py-2 block w-full bg-black font-medium rounded border border-black  text-white text-center mt-1.5 capitalize"
            >
              Create account
            </Link>
          </>
        ) : (
          <>
            <Link href={`/user/${user.uid}`} className="flex items-center ">
              {user.displayName || ''}
            </Link>

            <Button
              variant="text"
              onClick={async () => await signOut()}
              className="flex items-center gap-2"
            >
              Log out <IconDoorExit />
            </Button>
          </>
        )}
      </Sidebar.Footer>
    </Sidebar>
  )
}

export type IHeaderProps = {
  menuItems?: [string, string][]
  sideMenuItems?: [string, string][]
  type?: IBrandProps['type']
}

export const Header = ({
  menuItems = MENUITEMS,
  sideMenuItems = SUBMENUITEMS,
  type,
}: IHeaderProps) => {
  const [open, setOpen] = useState(false)
  const user = useAppSelector(selectUser)

  return (
    <header className="z-40">
      <nav className="fixed top-0 w-full shadow-md shadow-gray-300/10 bg-white/50 backdrop-blur-md">
        <Container className="relative z-50 flex items-center justify-between h-16 py-2">
          <NavSidebar open={open} setOpen={setOpen} menuItems={sideMenuItems} />
          <div className="relative z-10 flex items-center justify-between w-full gap-16">
            <Link href="/" aria-label="Home" className="w-auto">
              <Brand className="hidden h-10 sm:block" type={type} />
              <Brand shortForm className="block sm:hidden" type={type} />
            </Link>
            <div className="items-center hidden ml-auto lg:flex lg:gap-10">
              {menuItems.map(([label, href]) => (
                <NavLink label={label} href={href} key={label} />
              ))}
            </div>
            <div className="flex items-center">
              {!user ? (
                <>
                  <Link href="/register">
                    <Button variant="outlined" className="hidden md:block">
                      Create account
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button>Log in</Button>
                  </Link>
                </>
              ) : null}
              <button
                type="button"
                onClick={() => setOpen((state) => !state)}
                className="p-2 lg:hidden"
                aria-label="Open main menu"
              >
                <IconMenu2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </nav>
      <div className="h-16" />
    </header>
  )
}
