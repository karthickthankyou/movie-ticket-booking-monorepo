import { Rating as MuiRating, RatingProps } from '@mui/material'
export interface IRatingProps {}

export const Rating = (props: RatingProps) => {
  return (
    <MuiRating
      {...props}
      classes={{
        // root: 'text-black',
        iconEmpty: 'text-gray-400',
        iconFilled: 'text-gray-900',
      }}
    />
  )
}
