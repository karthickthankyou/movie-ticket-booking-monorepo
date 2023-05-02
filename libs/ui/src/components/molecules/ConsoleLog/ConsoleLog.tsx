import { useEffect } from 'react'

export interface IConsoleLogProps {
  message: string[]
}

const DevConsoleLog = ({ message }: IConsoleLogProps) => {
  useEffect(() => {
    console.log(...message)
  }, [message])

  return null
}

export const ConsoleLog = (props: IConsoleLogProps) => {
  if (process.env.NODE_ENV !== 'production') {
    return <DevConsoleLog {...props} />
  }
  return null
}
