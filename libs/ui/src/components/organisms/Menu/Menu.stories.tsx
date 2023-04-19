import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu } from './Menu'

export default {
  title: 'src/components/organisms/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
