import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShowtimeSelectCard } from './ShowtimeSelectCard'

export default {
  title: 'src/components/organisms/ShowtimeSelectCard',
  component: ShowtimeSelectCard,
} as ComponentMeta<typeof ShowtimeSelectCard>

const Template: ComponentStory<typeof ShowtimeSelectCard> = (args) => (
  <ShowtimeSelectCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
