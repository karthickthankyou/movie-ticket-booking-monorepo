import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateShowtime } from './CreateShowtime'

export default {
  title: 'src/components/templates/CreateShowtime',
  component: CreateShowtime,
} as ComponentMeta<typeof CreateShowtime>

const Template: ComponentStory<typeof CreateShowtime> = (args) => (
  <CreateShowtime {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
