import ToggleButtonMui, { ToggleButtonProps } from '@mui/material/ToggleButton'
import ToggleButtonGroupMui, {
  ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup'
import { forwardRef } from 'react'

export interface IToggleButtonGroupProps {}

export const ToggleButtonGroup = forwardRef<
  JSX.Element,
  ToggleButtonGroupProps
>((props, ref) => (
  <ToggleButtonGroupMui
    classes={{
      root: 'rounded',
      grouped: 'border border-2 ',
    }}
    ref={ref}
    {...props}
  />
))

ToggleButtonGroup.displayName = 'ToggleButtonGroup'

export const ToggleButton = (props: ToggleButtonProps) => (
  <ToggleButtonMui
    // sx={{
    //   '&.MuiToggleButtonGroup-grouped': 'border-2',
    // }}
    classes={{
      root: 'p-0',
      selected: 'border-gray-600 stroke-2',
      disabled: 'text-gray-200 bg-gray-100',
      primary: 'text-gray-600',
      //   secondary: 'border-2',
      //   standard: 'text-black',
      //   selected:
      //     ' border-2 border-black shadow-md shadow-black/50 transition-all text-black',
    }}
    disableRipple
    {...props}
  />
)
