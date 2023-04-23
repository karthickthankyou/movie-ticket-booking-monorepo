import { Subject } from 'rxjs'
import { NotificationType } from '@showtime-org/types'

export const notification$ = new Subject<Omit<NotificationType, 'id'>>()
