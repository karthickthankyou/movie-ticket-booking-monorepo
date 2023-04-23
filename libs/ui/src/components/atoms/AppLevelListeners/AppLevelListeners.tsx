import { useUserListener } from '@showtime-org/hooks/src/user'
import { useNotification } from '@showtime-org/hooks/src/notifications'

export interface IAppLevelListenersProps {}

export const AppLevelListeners = () => {
  useUserListener()
  useNotification()
  return null
}
