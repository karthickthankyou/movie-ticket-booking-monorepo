import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ToggleButtonGroup } from './ToggleButtonGroup'

export default {
  title: 'src/components/molecules/ToggleButtonGroup',
  component: ToggleButtonGroup,
} as ComponentMeta<typeof ToggleButtonGroup>

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
  <ToggleButtonGroup {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
