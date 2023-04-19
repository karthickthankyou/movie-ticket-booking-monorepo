import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'

import { notification$ } from './subjects'
import { storage } from '@booking-org/network/src/config/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export const getYesterday = () => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

export const useImageUpload = () => {
  const [percent, setPercent] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const setValueFunction = useRef<(key: string[]) => void>()

  useEffect(() => {
    if (setValueFunction.current) {
      console.log('Passing Images', images)
      setValueFunction.current(images)
    }
  }, [setValueFunction, images])

  const handleUpload = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: (images: string[]) => void,
  ) => {
    console.log('before')
    setValueFunction.current = setValue
    console.log('after')
    const files = e.target.files
    if (!files?.length) {
      //   setError('images')
      notification$.next({
        message: 'Images empty.',
        type: 'error',
      })
      return
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const storageRef = ref(storage, `/files/${file.name}`) // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          ) // update progress
          setPercent(percent)
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            notification$.next({ message: `Image uploaded.` })
            setImages((state) => [...state, url])
          })
        },
      )
    }
  }

  return [{ percent, images }, handleUpload] as const
}

export const useKeypress = (keys: string[], action: () => void) => {
  useEffect(() => {
    const onKeyup = (e: { key: any }) => {
      if (keys.includes(e.key)) action()
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [action, keys])
}

export const makeId = (length: number = 4) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const getMsFromString = (timeString: string) => {
  const time = new Date('1970-01-01T' + timeString)
  return time.getTime()
}

export const getTimeFromDateTime = (timestamp: string) => {
  const date = new Date(timestamp)
  return format(date, 'p')
}

export const getHHMMSS = (timestamp: string) => {
  const date = new Date(timestamp)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}:00`
}
