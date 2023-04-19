import Slider, { SliderProps } from '@mui/material/Slider'

const RangeSlider = (props: SliderProps) => (
  <div className="w-full pt-6 pl-2 pr-4">
    <Slider
      valueLabelDisplay="on"
      classes={{
        root: `h-0.5 w-full border-0 `,
        thumb:
          'rounded-none border-black border w-4 h-4 bg-white hover:shadow-none hover:border-black hover:bg-gray-50 focus:bg-gray-50',
        track: 'text-gray-800',
        rail: 'bg-gray-400',
        valueLabel:
          'text-black py-0 px-0.5 backdrop-blur-sm text-sm shadow-md bg-white/20 border before:border-b before:border-r active:shadow-none',
      }}
      {...props}
    />
  </div>
)

export { RangeSlider }
