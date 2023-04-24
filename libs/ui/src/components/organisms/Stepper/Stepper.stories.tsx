import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HorizontalLinearStepper } from './Stepper'

export default {
  title: 'src/components/organisms/Stepper',
  component: HorizontalLinearStepper,
} as ComponentMeta<typeof HorizontalLinearStepper>

const Template: ComponentStory<typeof HorizontalLinearStepper> = (args) => (
  <HorizontalLinearStepper />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
