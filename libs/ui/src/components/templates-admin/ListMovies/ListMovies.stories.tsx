import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListMovies } from './ListMovies'

export default {
  title: 'src/components/templates/ListMovies',
  component: ListMovies,
} as ComponentMeta<typeof ListMovies>

const Template: ComponentStory<typeof ListMovies> = (args) => (
  <ListMovies {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
