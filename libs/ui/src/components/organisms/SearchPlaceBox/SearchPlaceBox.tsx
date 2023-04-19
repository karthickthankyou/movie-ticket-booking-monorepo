import { useAppSelector } from '@booking-org/store'
import {
  LocationInfo,
  useSearchLocation,
} from '@booking-org/hooks/src/location'

import { Autocomplete } from '../../atoms/Autocomplete'

export interface ISearchPlaceBoxProps {
  setLocationInfo: (locationInfo: LocationInfo) => void
}

const SearchPlaceBox = ({ setLocationInfo }: ISearchPlaceBoxProps) => {
  //   console.log('Recent searches', recentSearches)
  const { loading, setLoading, searchText, locationInfo, setSearchText } =
    useSearchLocation()

  return (
    <Autocomplete<LocationInfo, false, false, false>
      options={locationInfo.length ? locationInfo : []}
      noOptionsText={searchText ? 'No options.' : 'Type something...'}
      placeholder="Type something..."
      getOptionLabel={(x) => x.placeName}
      onInputChange={(_, v) => {
        setLoading(true)
        setSearchText(v)
      }}
      loading={loading}
      isOptionEqualToValue={(option, value) =>
        option.placeName === value.placeName
      }
      classes={{
        root: 'rounded overflow-hidden',
      }}
      onChange={(_, v) => {
        if (v) {
          const { latLng, placeName } = v
          setLocationInfo({ latLng: latLng, placeName: placeName })
        }
      }}
    />
  )
}

export { SearchPlaceBox }
