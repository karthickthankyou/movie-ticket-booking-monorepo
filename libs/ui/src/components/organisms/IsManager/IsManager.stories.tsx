import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IsManager } from './IsManager'

export default {
  title: 'src/components/templates/IsManager',
  component: IsManager,
} as ComponentMeta<typeof IsManager>

const Template: ComponentStory<typeof IsManager> = (args) => (
  <IsManager {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
