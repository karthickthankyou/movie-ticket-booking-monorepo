import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Manager } from './Manager'

export default {
  title: 'src/components/templates/Manager',
  component: Manager,
} as ComponentMeta<typeof Manager>

const Template: ComponentStory<typeof Manager> = (args) => <Manager {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
