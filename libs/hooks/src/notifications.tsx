import { useAppDispatch } from '@booking-org/store'
import {
  removeNotification,
  addNotification,
} from '@booking-org/store/utils/utilsStore'
import { notification$ } from '@booking-org/util/subjects'
import { useEffect } from 'react'
import {
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  delay,
  catchError,
  EMPTY,
} from 'rxjs'

export const useNotification = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const subscription = notification$
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((v) => ({ ...v, id: makeId(12) })),
        tap((v) => {
          dispatch(addNotification(v))
        }),
        delay(4000),
        tap((v) => {
          dispatch(removeNotification(v.id))
        }),
        catchError((e) => {
          return EMPTY
        }),
      )
      .subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [dispatch])
}
function makeId(arg0: number): any {
  throw new Error('Function not implemented.')
}
