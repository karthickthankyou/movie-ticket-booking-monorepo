import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ResetPassword } from './ResetPassword'

export default {
  title: 'components/templates/ResetPassword',
  component: ResetPassword,
} as ComponentMeta<typeof ResetPassword>

const Template: ComponentStory<typeof ResetPassword> = (args) => (
  <ResetPassword />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
