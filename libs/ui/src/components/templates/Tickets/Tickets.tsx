import {
  TicketsQuery,
  useTicketsLazyQuery,
} from '@showtime-org/network/src/generated'
import { useAppSelector } from '@showtime-org/store'
import { selectUid } from '@showtime-org/store/user'
import { SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '@showtime-org/network/src/config/firebase'
import { format } from 'date-fns'
import { Dialog } from '../../atoms/Dialog'
import { Button } from '../../atoms/Button'
import { LoaderPanel } from '../../molecules/Loader'
import { ShowData } from '../ShowData'

export interface ITicketsProps {}

async function getImageUrl(path: string): Promise<string> {
  // Create a reference to the file
  const fileRef = ref(storage, path)

  // Get the download URL
  const url = await getDownloadURL(fileRef)

  return url
}

export const TicketMovie = ({
  ticket,
}: {
  ticket: TicketsQuery['tickets'][number]
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div key={ticket.id} className="max-w-md">
      <Dialog open={open} setOpen={setOpen} title={'QR Code'}>
        <QRCode url={ticket.qrCode} />
      </Dialog>
      <div className="flex gap-6">
        <Image
          width={200}
          height={200}
          className="rounded"
          src={ticket.bookings[0].showtime.movie.posterUrl}
          alt={ticket.bookings[0].showtime.movie.title}
        />
        <div>
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-lg font-semibold">
                {ticket.bookings[0].showtime.movie.title}
              </div>
              <div>{ticket.bookings[0].showtime.screen.cinema.name}</div>
            </div>
            <div className="flex flex-col items-center p-1 border rounded">
              <div className="text-xs">Screen</div>
              <div className="text-xl font-bold">
                {ticket.bookings[0].showtime.screen.number}
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold">
              {format(new Date(ticket.bookings[0].showtime.startTime), 'p')}
            </div>
            <div className="text-xs">
              {format(new Date(ticket.bookings[0].showtime.startTime), 'PP')}
            </div>
          </div>
          <div className="mt-4">
            <div>Seats</div>
            <div className="flex flex-wrap gap-2 ">
              {ticket.bookings.map((booking) => (
                <div className="px-1 text-sm bg-white border rounded ">
                  {booking.row}-{booking.column}
                </div>
              ))}
            </div>
          </div>
          <Button variant="text" size="none" onClick={() => setOpen(true)}>
            View QR code
          </Button>
        </div>
      </div>
    </div>
  )
}

export const Tickets = ({}: ITicketsProps) => {
  const uid = useAppSelector(selectUid)
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(6)
  const [getTickets, { data, loading }] = useTicketsLazyQuery()

  useEffect(() => {
    if (uid) {
      getTickets({
        variables: { where: { uid: { equals: uid } }, take, skip },
      })
    }
  }, [uid, take, skip])

  const [open, setOpen] = useState(false)

  if (loading) {
    return <LoaderPanel />
  }

  return (
    <ShowData
      className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
      loading={loading}
      pagination={{
        skip,
        take,
        resultCount: data?.tickets.length || 0,
        setSkip,
        setTake,
      }}
    >
      {data?.tickets.map((ticket) => (
        <TicketMovie ticket={ticket} />
      ))}
    </ShowData>
  )
}

export const QRCode = ({ url }: { url: string }) => {
  const [picUrl, setPicUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchImageUrl() {
      setLoading(true)
      const imageUrl = await getImageUrl(url)
      setLoading(false)
      setPicUrl(imageUrl)
    }

    fetchImageUrl()
  }, [url])

  if (loading) return <LoaderPanel />

  return <Image width={200} height={200} src={picUrl || ''} alt={'ticket'} />
}
