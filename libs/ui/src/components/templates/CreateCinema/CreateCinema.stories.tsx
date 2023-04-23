import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateCinema } from './CreateCinema'

export default {
  title: 'src/components/templates/CreateCinema',
  component: CreateCinema,
} as ComponentMeta<typeof CreateCinema>

const Template: ComponentStory<typeof CreateCinema> = (args) => <CreateCinema />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
