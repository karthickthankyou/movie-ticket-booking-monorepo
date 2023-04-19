import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RegisterForm } from './RegisterForm'

export default {
  title: 'templates/SignupForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
