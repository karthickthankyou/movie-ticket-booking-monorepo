import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CinemaSelectCard } from './CinemaSelectCard'

export default {
  title: 'src/components/organisms/CinemaSelectCard',
  component: CinemaSelectCard,
} as ComponentMeta<typeof CinemaSelectCard>

const Template: ComponentStory<typeof CinemaSelectCard> = (args) => (
  <CinemaSelectCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
