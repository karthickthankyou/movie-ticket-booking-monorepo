import { useAppSelector } from '@showtime-org/store'
import { selectUid } from '@showtime-org/store/user'
import { notification$ } from '@showtime-org/util/subjects'
import { useRouter } from 'next/router'
import { RefObject, useEffect, useRef, useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '@showtime-org/network/src/config/firebase'

export const useRedirectLoggedInUsers = () => {
  const uid = useAppSelector(selectUid)
  const router = useRouter()
  if (uid) {
    notification$.next({
      message: 'Logged in',
      type: 'warning',
    })
    router.push('/')
  }
}

export const useScrollTo = () => {
  const interactiveMapRef = useRef<HTMLDivElement | null>(null)

  const executeScroll = () =>
    interactiveMapRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  return [interactiveMapRef, executeScroll] as const
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const useScroll = (): [
  [number, number],
  RefObject<HTMLDivElement>,
  () => void,
  (distance: number) => void,
] => {
  const [scrollPos, setScrollPos] = useState<[number, number]>([0, 0])
  const scrollEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = scrollEl.current
    element?.addEventListener('wheel', (e) => e.preventDefault)

    return () => {
      element?.removeEventListener('wheel', (e) => e.preventDefault)
    }
  }, [])

  const scroll = (distance: number) => {
    if (scrollEl.current) {
      const leftPos = scrollEl.current.scrollLeft + distance
      scrollEl.current?.scrollTo({ left: leftPos, behavior: 'smooth' })
    }
  }

  const scrollListesener = () => {
    const start = scrollEl.current ? scrollEl?.current.scrollLeft : 0
    const end = (() => {
      if (scrollEl?.current) {
        const { scrollWidth, clientWidth } = scrollEl.current
        return scrollWidth - clientWidth
      }
      return 0
    })()
    setScrollPos([start, end - start])
  }
  useEffect(() => {
    scrollListesener()
  }, [])

  return [scrollPos, scrollEl, scrollListesener, scroll]
}

export const useKeypress = (keys: string[], action?: Function) => {
  useEffect(() => {
    const onKeyup = (e: { key: any }) => {
      if (keys.includes(e.key) && action) action()
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [action, keys])
}

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false)
  const [percent, setPercent] = useState(0)

  const handleUpload = async (files: any): Promise<string[]> => {
    if (!files?.length) {
      notification$.next({
        message: 'Images empty.',
        type: 'error',
      })
      return []
    }

    setUploading(true)

    const uploadTasks = Array.from(files).map((file: any) => {
      console.log('file name ', file.name, file)
      const storageRef = ref(storage, `/files/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      return new Promise<string>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            )
            setPercent(percent)
          },
          reject,
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject)
          },
        )
      })
    })

    try {
      const imageUrls = await Promise.all(uploadTasks)
      notification$.next({ message: `Image uploaded.` })
      setUploading(false)
      return imageUrls
    } catch (err) {
      console.log(err)
      setUploading(false)
      return []
    }
  }

  return [{ uploading, percent }, handleUpload] as const
}
