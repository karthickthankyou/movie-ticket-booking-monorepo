import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterHeading } from './FilterHeading'

export default {
  title: 'molecules/FilterHeading',
  component: FilterHeading,
} as ComponentMeta<typeof FilterHeading>

const Template: ComponentStory<typeof FilterHeading> = (args) => (
  <FilterHeading {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
