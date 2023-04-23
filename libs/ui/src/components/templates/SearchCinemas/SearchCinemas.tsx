import { ReactNode, SetStateAction, useEffect, useMemo, useState } from 'react'
import { Map } from '../../organisms/Map'
import { Panel } from '../../organisms/Map/Panel'
import { DefaultZoomControls } from '../../organisms/Map/ZoomControls/ZoomControls'
import { SearchBox } from '../CreateCinema/CreateCinema'
import { LngLatBounds, Marker, useMap } from 'react-map-gl'
import {
  SearchCinemasQuery,
  useSearchCinemasLazyQuery,
} from '@showtime-org/network/src/generated'
import { BrandIcon } from '../../atoms/BrandIcon'
import { Dialog } from '../../atoms/Dialog'

export interface ISearchCinemasProps {}

export const SearchCinemas = ({}: ISearchCinemasProps) => {
  return (
    <Map>
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>

      <DisplayAllKitchens />

      <Panel position="left-top">
        <SearchBox
          onChange={({ lat, lng }) => {
            console.log(lat, lng)
          }}
        />
      </Panel>
    </Map>
  )
}

export const DisplayAllKitchens = () => {
  const { current: map } = useMap()

  const [bounds, setBounds] = useState<LngLatBounds>()
  useEffect(() => {
    const bounds = map?.getBounds()
    setBounds(bounds)
  }, [])

  const locationFilter = useMemo(
    () => ({
      ne_lat: bounds?.getNorthEast().lat || 0,
      ne_lng: bounds?.getNorthEast().lng || 0,
      sw_lat: bounds?.getSouthWest().lat || 0,
      sw_lng: bounds?.getSouthWest().lng || 0,
    }),
    [bounds],
  )

  const [refetch, { data, loading }] = useSearchCinemasLazyQuery({
    variables: {
      locationFilter,
    },
  })

  useEffect(() => {
    refetch()
  }, [bounds, refetch])

  return (
    <div>
      {data?.cinemas.map((cinema) => (
        <MarkerWithPopup key={cinema.id} marker={cinema} />
      ))}
    </div>
  )
}

export const MarkerWithPopup = ({
  marker,
}: {
  marker: SearchCinemasQuery['cinemas'][number]
}) => {
  if (!marker.address?.lat || !marker.address?.lng || !marker.id) {
    return null
  }

  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div key={marker?.id}>
      <Dialog
        className="w-96"
        title={marker.name}
        open={openDialog}
        setOpen={setOpenDialog}
      >
        <BookingStepper />
      </Dialog>
      <Marker
        anchor="bottom"
        latitude={marker.address.lat}
        longitude={marker.address.lng}
        onClick={() => {
          setOpenDialog(true)
        }}
      >
        <BrandIcon className="cursor-pointer" animate />
        <MarkerText>{marker.name}</MarkerText>
      </Marker>
    </div>
  )
}

export const MarkerText = ({ children }: { children: ReactNode }) => (
  <div className="absolute -translate-x-1/2 left-1/2">
    <div className="mt-1 leading-4 text-center min-w-max px-0.5 rounded backdrop-blur-sm bg-white/50">
      {children}
    </div>
  </div>
)

export const BookingStepper = () => {
  return <div>Stepper</div>
}
