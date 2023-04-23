import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Admin } from './Admin'

export default {
  title: 'src/components/templates/Admin',
  component: Admin,
} as ComponentMeta<typeof Admin>

const Template: ComponentStory<typeof Admin> = (args) => <Admin {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
