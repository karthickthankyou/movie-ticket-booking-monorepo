import {
  FormProviderCreateCinema,
  FormTypeCreateCinema,
} from '@showtime-org/forms/src/createCinema'
import { Map } from '../../organisms/Map'
import { Form } from '../../atoms/Form'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Button } from '../../atoms/Button'
import { useAppSelector } from '@showtime-org/store'
import { selectUid } from '@showtime-org/store/user'
import { useFormContext, useWatch, useFieldArray } from 'react-hook-form'
import {
  ProjectionType,
  SoundSystemType,
  namedOperations,
  useCreateCinemaMutation,
  useFindCinemaLazyQuery,
} from '@showtime-org/network/src/generated'
import { SearchPlaceBox } from '../../organisms/SearchPlaceBox'
import { Panel } from '../../organisms/Map/Panel'
import { Marker } from '../../organisms/Map/MapMarker'
import {
  CenterOfMap,
  DefaultZoomControls,
} from '../../organisms/Map/ZoomControls/ZoomControls'
import { useMap } from 'react-map-gl'
import { HtmlTextArea } from '../../atoms/HtmlTextArea'
import { SetStateAction, useEffect, useState } from 'react'
import { IconDeviceLaptop, IconPlus } from '@tabler/icons-react'
import { Accordion } from '../../molecules/Accordion'
import { HtmlSelect } from '../../atoms/HtmlSelect'
import { Dialog } from '../../atoms/Dialog'
export interface ICreateCinemaProps {}

export const CreateCinema = () => (
  <FormProviderCreateCinema>
    <CreateCinemaContent />
  </FormProviderCreateCinema>
)

export const CreateCinemaContent = ({}: ICreateCinemaProps) => {
  const uid = useAppSelector(selectUid)
  const { register, handleSubmit, setValue, reset, control } =
    useFormContext<FormTypeCreateCinema>()
  const [createCinema, { loading, data, error }] = useCreateCinemaMutation()

  const [open, setOpen] = useState(false)

  const [findCinema, { loading: findCinemaLoading, data: existingCinema }] =
    useFindCinemaLazyQuery()

  useEffect(() => {
    if (uid) findCinema()
  }, [uid])

  if (existingCinema?.cinema) {
    return <div>Cinema exists.</div>
  }
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Dialog open={open} setOpen={setOpen} title={'Success.'}>
        Cinema created successfully.
      </Dialog>
      <Form
        onSubmit={handleSubmit(
          async ({
            address: { address, lat, lng },
            cinemaName,
            managerName,
            screens,
          }) => {
            if (!uid) {
              return
            }
            await createCinema({
              variables: {
                createCinemaInput: {
                  name: cinemaName,
                  manager: {
                    name: managerName,
                    uid,
                  },
                  address: {
                    address,
                    lat,
                    lng,
                  },
                  screens,
                },
              },
              refetchQueries: [namedOperations.Query.findCinema],
              awaitRefetchQueries: true,
            })
            reset()
            setOpen(true)
          },
        )}
      >
        <HtmlLabel title="Cinema">
          <HtmlInput placeholder="Cinema name" {...register('cinemaName')} />
        </HtmlLabel>
        <HtmlLabel title="Manager">
          <HtmlInput placeholder="Manager name" {...register('managerName')} />
        </HtmlLabel>
        <HtmlLabel title="Address">
          <HtmlTextArea
            placeholder="Address"
            {...register('address.address')}
          />
        </HtmlLabel>
        <HtmlLabel title="Location">
          <ShowLocation />
        </HtmlLabel>
        <AddScreens />

        <Button type="submit" loading={loading}>
          Create cinema
        </Button>
      </Form>
      <Map
        initialViewState={{
          longitude: 80.2,
          latitude: 12.9,
          zoom: 8,
        }}
      >
        <MapMarker />

        <Panel position="left-top">
          <SearchBox
            onChange={({ lat, lng }) => {
              setValue('address.lat', lat, { shouldValidate: true })
              setValue('address.lng', lng, { shouldValidate: true })
            }}
          />
          <DefaultZoomControls>
            <CenterOfMap
              onClick={(latLng) => {
                const lat = parseFloat(latLng.lat.toFixed(6))
                const lng = parseFloat(latLng.lng.toFixed(6))

                setValue('address.lat', lat, { shouldValidate: true })
                setValue('address.lng', lng, { shouldValidate: true })
              }}
            />
          </DefaultZoomControls>
        </Panel>
      </Map>
    </div>
  )
}

const AddScreens = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTypeCreateCinema>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `screens`,
  })

  const { screens } = useWatch<FormTypeCreateCinema>()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div>
      {fields.map((item, screenIndex) => (
        <Accordion
          title={screens?.[screenIndex]?.number || '[Empty]'}
          key={item.id}
          className={item.id}
          defaultOpen
        >
          <div className={`flex justify-end my-2`}>
            <Button
              variant="text"
              size="none"
              className="text-xs text-gray-600 underline underline-offset-2"
              onClick={() => {
                remove(screenIndex)
              }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(item.id)}
              onBlur={() => setHovered(null)}
            >
              remove screen
            </Button>
          </div>

          <div
            className={`flex flex-col gap-2 ${
              hovered === item.id ? 'bg-strip' : null
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              <HtmlLabel
                title="Screen number"
                optional
                error={errors.screens?.[screenIndex]?.number?.message}
              >
                <HtmlInput
                  type="number"
                  placeholder="Enter the description"
                  {...register(`screens.${screenIndex}.number`, {
                    valueAsNumber: true,
                  })}
                />
              </HtmlLabel>
              <HtmlLabel
                title="Projection type"
                error={errors.screens?.[screenIndex]?.type?.toString()}
              >
                <HtmlSelect
                  placeholder="projection type"
                  {...register(`screens.${screenIndex}.projectionType`)}
                >
                  {Object.values(ProjectionType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </HtmlSelect>
              </HtmlLabel>
              <HtmlLabel
                title="Sound system type"
                error={errors.screens?.[screenIndex]?.type?.toString()}
              >
                <HtmlSelect
                  placeholder="sound system type"
                  {...register(`screens.${screenIndex}.soundSystemType`)}
                >
                  {Object.values(SoundSystemType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </HtmlSelect>
              </HtmlLabel>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <HtmlLabel
                title="Rows"
                type="number"
                error={errors.screens?.[screenIndex]?.rows?.message}
              >
                <HtmlTextArea
                  rows={1}
                  placeholder="Enter the name"
                  {...register(`screens.${screenIndex}.rows`, {
                    valueAsNumber: true,
                  })}
                />
              </HtmlLabel>
              <HtmlLabel
                title="Columns"
                type="number"
                error={errors.screens?.[screenIndex]?.columns?.message}
              >
                <HtmlInput
                  type="number"
                  placeholder="Enter the name"
                  {...register(`screens.${screenIndex}.columns`, {
                    valueAsNumber: true,
                  })}
                />
              </HtmlLabel>
              <HtmlLabel
                title="Price"
                type="number"
                error={errors.screens?.[screenIndex]?.price?.message}
              >
                <HtmlInput
                  type="number"
                  placeholder="Enter the price"
                  {...register(`screens.${screenIndex}.price`, {
                    valueAsNumber: true,
                  })}
                />
              </HtmlLabel>
            </div>
            <Grid
              rows={screens?.[screenIndex]?.rows || 0}
              columns={screens?.[screenIndex]?.columns || 0}
            />
          </div>
        </Accordion>
      ))}{' '}
      <div>
        <Button
          className="flex items-center justify-center w-full py-2 text-xs border border-dashed"
          size="none"
          variant="text"
          onClick={() =>
            append({
              columns: 0,
              number: 0,
              rows: 0,
              price: 0,
              projectionType: ProjectionType.Standard,
              soundSystemType: SoundSystemType.DolbyAtmos,
            })
          }
        >
          <IconPlus className="w-4 h-4" /> Add screen
        </Button>
      </div>
    </div>
  )
}

const ShowLocation = () => {
  const { address } = useWatch<FormTypeCreateCinema>()

  return (
    <div>
      <span className="px-2 py-1 text-xs rounded bg-gray-50">
        {address?.lat?.toFixed(4)}
      </span>{' '}
      <span className="px-2 py-1 text-xs rounded bg-gray-50">
        {address?.lng?.toFixed(4)}
      </span>
    </div>
  )
}

export const SearchBox = ({
  onChange,
}: {
  onChange: ({ lat, lng }: { lat: number; lng: number }) => void
}) => {
  const { current: map } = useMap()
  return (
    <SearchPlaceBox
      setLocationInfo={(locationInfo) => {
        const lat = locationInfo.latLng[0]
        const lng = locationInfo.latLng[1]
        onChange({ lat, lng })

        map?.flyTo({
          center: { lat, lng },
          essential: true,
        })
      }}
    />
  )
}

const MapMarker = () => {
  const { address } = useWatch<FormTypeCreateCinema>()
  const { setValue } = useFormContext<FormTypeCreateCinema>()

  return (
    <Marker
      pitchAlignment="auto"
      longitude={address?.lng || 0}
      latitude={address?.lat || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('address.lat', lat || 0)
        setValue('address.lng', lng || 0)
      }}
    >
      <IconDeviceLaptop />
    </Marker>
  )
}

const CurvedScreen = ({ width = 300, height = 10 }) => {
  const curveOffset = height * 0.9 // Controls the curvature of the screen

  return (
    <svg
      width={width}
      className="mt-6"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        d={`M 0,${height} L 0,0 Q ${
          width / 2
        },${curveOffset} ${width},0 L ${width},${height} Z`}
        fill="black"
      />
    </svg>
  )
}

export const Square = ({
  size = 25,
  color = 'blue',
  booked = false,
  selected = false,
}) => {
  return (
    <div
      className={`w-4 h-4  border rounded ${booked ? 'bg-yellow-500' : ''} ${
        selected ? 'bg-primary-500' : ''
      }`}
    />
  )
}

export const Grid = ({ rows, columns }: { rows: number; columns: number }) => {
  const renderRows = () => {
    const rowElements = []

    for (let i = 0; i < rows; i++) {
      const columnElements = []
      for (let j = 0; j < columns; j++) {
        columnElements.push(<Square key={`${i}-${j}`} />)
      }
      rowElements.push(
        <div key={`row-${i}`} className="flex gap-1">
          {columnElements}
        </div>,
      )
    }

    return rowElements
  }

  return (
    <div className="w-full ">
      <div className="flex flex-col items-center gap-1 px-2 overflow-x-auto">
        {renderRows()}
        <CurvedScreen />
      </div>
    </div>
  )
}
