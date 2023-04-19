import { Subject } from 'rxjs'
import { NotificationType } from '@booking-org/types'

export const notification$ = new Subject<Omit<NotificationType, 'id'>>()
