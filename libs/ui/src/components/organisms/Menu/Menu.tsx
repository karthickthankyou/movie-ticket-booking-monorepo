import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'

export const Menu = (props: MenuProps) => {
  return (
    <MuiMenu
      anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      transformOrigin={{ vertical: 'center', horizontal: 'center' }}
      {...props}
      classes={{ list: 'p-0', paper: 'shadow-md shadow-black/30' }}
    />
  )
}
export const MenuItem = (props: MenuItemProps) => {
  return (
    <MuiMenuItem
      disableRipple
      classes={{
        root: 'hover:bg-gray-200 text-sm',
        gutters: 'px-3 py-2',
      }}
      {...props}
    />
  )
}
