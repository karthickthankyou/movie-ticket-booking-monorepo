import { useEffect, useState } from 'react'
import { useDebouncedValue } from './async'

export type LocationInfo = { placeName: string; latLng: [number, number] }

export const useCurrentLocation = ({
  allowed = false,
  setLocationInfo,
}: {
  allowed: boolean
  setLocationInfo: (locationInfo: LocationInfo) => void
}) => {
  const moveMapToCurrentLocation = () =>
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationInfo({
          latLng: [position.coords.latitude, position.coords.longitude],
          placeName: 'Current Location',
        })
      },
      (error) => {
        console.error(error)
      },
      { enableHighAccuracy: true, timeout: 20000 },
      //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  useEffect(() => {
    if (!allowed) return
    moveMapToCurrentLocation()
  }, [allowed, moveMapToCurrentLocation, setLocationInfo])
  return { moveMapToCurrentLocation }
}

export const useSearchLocation = () => {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [locationInfo, setLocationInfo] = useState<LocationInfo[]>(() => [])

  const debouncedSearchText = useDebouncedValue(searchText)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearchText}.json?fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`,
    )
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.features?.map((x: any) => ({
          placeName: x.place_name,
          latLng: [x.center[1], x.center[0]],
        }))

        setLocationInfo(filtered)
      })
      .finally(() => setLoading(false))
  }, [debouncedSearchText, setLocationInfo])

  return { loading, setLoading, searchText, setSearchText, locationInfo }
}
