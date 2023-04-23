import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchCinemas } from './SearchCinemas'

export default {
  title: 'src/components/templates/SearchCinemas',
  component: SearchCinemas,
} as ComponentMeta<typeof SearchCinemas>

const Template: ComponentStory<typeof SearchCinemas> = (args) => (
  <SearchCinemas {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
