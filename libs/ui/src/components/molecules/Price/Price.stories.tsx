import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Price } from './Price'

export default {
  title: 'src/components/molecules/Price',
  component: Price,
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
