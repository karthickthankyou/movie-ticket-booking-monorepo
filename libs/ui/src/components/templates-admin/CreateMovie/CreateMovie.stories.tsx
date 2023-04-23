import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateMovie } from './CreateMovie'

export default {
  title: 'src/components/templates-admin/CreateMovie',
  component: CreateMovie,
} as ComponentMeta<typeof CreateMovie>

const Template: ComponentStory<typeof CreateMovie> = (args) => (
  <CreateMovie {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
