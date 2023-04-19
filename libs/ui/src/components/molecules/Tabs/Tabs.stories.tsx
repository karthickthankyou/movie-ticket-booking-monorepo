import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from './Tabs'

export default {
  title: 'src/components/molecules/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
