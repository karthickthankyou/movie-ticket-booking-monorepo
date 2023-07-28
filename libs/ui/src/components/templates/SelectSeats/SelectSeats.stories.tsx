import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectSeats } from './SelectSeats'

export default {
  title: 'src/components/templates/SelectSeats',
  component: SelectSeats,
} as ComponentMeta<typeof SelectSeats>

const Template: ComponentStory<typeof SelectSeats> = () => <SelectSeats />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
