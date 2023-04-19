import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { store } from '.'

export const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
)
