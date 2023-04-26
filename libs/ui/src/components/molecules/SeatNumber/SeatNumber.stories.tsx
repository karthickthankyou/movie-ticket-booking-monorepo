import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SeatNumber } from './SeatNumber'

export default {
  title: 'src/components/molecules/SeatNumber',
  component: SeatNumber,
} as ComponentMeta<typeof SeatNumber>

const Template: ComponentStory<typeof SeatNumber> = (args) => (
  <SeatNumber {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
