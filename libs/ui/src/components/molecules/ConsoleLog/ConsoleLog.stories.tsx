import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ConsoleLog } from './ConsoleLog'

export default {
  title: 'src/components/molecules/ConsoleLog',
  component: ConsoleLog,
} as ComponentMeta<typeof ConsoleLog>

const Template: ComponentStory<typeof ConsoleLog> = (args) => (
  <ConsoleLog {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
