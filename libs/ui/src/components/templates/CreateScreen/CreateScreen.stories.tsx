import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateScreen } from './CreateScreen'

export default {
  title: 'src/components/templates/CreateScreen',
  component: CreateScreen,
} as ComponentMeta<typeof CreateScreen>

const Template: ComponentStory<typeof CreateScreen> = (args) => (
  <CreateScreen {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
