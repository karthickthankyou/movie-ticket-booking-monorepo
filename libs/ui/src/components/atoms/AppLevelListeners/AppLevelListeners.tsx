import { useUserListener } from '@booking-org/hooks/src/user'
import { useNotification } from '@booking-org/hooks/src/notifications'

export interface IAppLevelListenersProps {}

export const AppLevelListeners = () => {
  useUserListener()
  useNotification()
  return null
}
