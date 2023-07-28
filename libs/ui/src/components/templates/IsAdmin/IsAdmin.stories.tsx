import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IsAdmin } from './IsAdmin'

export default {
  title: 'src/components/templates/IsAdmin',
  component: IsAdmin,
} as ComponentMeta<typeof IsAdmin>

const Template: ComponentStory<typeof IsAdmin> = (args) => <IsAdmin {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
