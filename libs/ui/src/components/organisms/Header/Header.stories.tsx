import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'
import { Provider } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@showtime-org/store/user'

const reducers = { user: userReducer }

const store = configureStore({
  reducer: combineReducers(reducers),
  preloadedState: {
    user: {
      uid: '3',
      roles: ['admin'],
      loaded: true,
    },
  },
})

export default {
  title: 'organisms/Header',
  component: Header,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args): JSX.Element => (
  <Header {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
