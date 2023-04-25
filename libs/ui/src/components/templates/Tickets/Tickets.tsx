import { useTicketsLazyQuery } from '@showtime-org/network/src/generated'
import { useAppSelector } from '@showtime-org/store'
import { selectUid } from '@showtime-org/store/user'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '@showtime-org/network/src/config/firebase'

export interface ITicketsProps {}

async function getImageUrl(path: string): Promise<string> {
  // Create a reference to the file
  const fileRef = ref(storage, path)

  // Get the download URL
  const url = await getDownloadURL(fileRef)

  return url
}

export const Tickets = ({}: ITicketsProps) => {
  const uid = useAppSelector(selectUid)
  const [getTickets, { data }] = useTicketsLazyQuery()

  useEffect(() => {
    console.log('uid', uid)
    if (uid) {
      getTickets({ variables: { where: { uid: { equals: uid } } } })
    }
  }, [uid])

  console.log('data', data)

  return (
    <div>
      {data?.tickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{ticket.id}</div>
          <QRCode url={ticket.qrCode} />
        </div>
      ))}
    </div>
  )
}

export const QRCode = ({ url }: { url: string }) => {
  const [picUrl, setPicUrl] = useState<string | null>(null)

  useEffect(() => {
    async function fetchImageUrl() {
      const imageUrl = await getImageUrl(url)
      setPicUrl(imageUrl)
    }

    fetchImageUrl()
  }, [url])

  return <Image width={200} height={200} src={picUrl || ''} alt={'ticket'} />
}
