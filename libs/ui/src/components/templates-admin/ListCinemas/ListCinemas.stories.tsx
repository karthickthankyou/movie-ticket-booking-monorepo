import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListCinemas } from './ListCinemas'

export default {
  title: 'src/components/templates/ListMovies',
  component: ListCinemas,
} as ComponentMeta<typeof ListCinemas>

const Template: ComponentStory<typeof ListCinemas> = (args) => (
  <ListCinemas {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
