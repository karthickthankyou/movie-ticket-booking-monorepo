import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tickets } from './Tickets'

export default {
  title: 'src/components/templates/Tickets',
  component: Tickets,
} as ComponentMeta<typeof Tickets>

const Template: ComponentStory<typeof Tickets> = (args) => <Tickets {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
