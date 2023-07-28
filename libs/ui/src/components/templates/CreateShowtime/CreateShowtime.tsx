import {
  FindCinemaQuery,
  MoviesQuery,
  QueryMode,
  namedOperations,
  useCreateShowtimeMutation,
  useFindCinemaLazyQuery,
  useMoviesLazyQuery,
} from '@showtime-org/network/src/generated'
import { Autocomplete } from '../../atoms/Autocomplete'
import { useEffect, useState } from 'react'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { FormTypeCreateShowtime } from '@showtime-org/forms/src/createShowtime'
import { Form } from '../../atoms/Form'
import { Button } from '../../atoms/Button'
import { useAppSelector } from '@showtime-org/store'
import { selectUid } from '@showtime-org/store/user'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { HtmlInput } from '../../atoms/HtmlInput'
import { IconPlus } from '@tabler/icons-react'
import { Dialog } from '../../atoms/Dialog'

export interface ICreateShowtimeProps {}

export const CreateShowtime = ({}: ICreateShowtimeProps) => {
  const {
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormContext<FormTypeCreateShowtime>()
  const [createShowtime, { loading, data, error }] = useCreateShowtimeMutation()

  console.log('errosr ', errors, data)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Dialog open={open} setOpen={setOpen} title={error ? 'Error' : 'Success'}>
        {data ? (
          <div>{data?.createShowtime.count} showtime(s) created.</div>
        ) : null}
        {error ? <div className="text-xs text-red">{error.message}</div> : null}
      </Dialog>
      <Form
        onSubmit={handleSubmit(async ({ movieId, screenId, showtimes }) => {
          try {
            await createShowtime({
              variables: {
                createShowtimeInput: {
                  movieId,
                  screenId,
                  showtimes: showtimes.map((time) => time.time),
                },
              },
              awaitRefetchQueries: true,
              refetchQueries: [namedOperations.Query.cinemas],
            })
          } catch (error) {
            console.log('Error', error)
          }
          reset()
          setOpen(true)
        })}
      >
        <SelectMovie
          setValue={(v) => {
            setValue('movieId', v)
          }}
        />
        <SelectScreen
          setValue={(v) => {
            setValue('screenId', v)
          }}
        />
        <AddShows />
        <Button loading={loading} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export const AddShows = () => {
  const { control, register } = useFormContext<FormTypeCreateShowtime>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'showtimes',
  })

  return (
    <div>
      <HtmlLabel title="Shows">
        <div className="grid grid-cols-3 gap-2">
          {fields.map((item, index) => (
            <HtmlLabel key={item.id}>
              <HtmlInput
                {...register(`showtimes.${index}.time`)}
                type="datetime-local"
              />
            </HtmlLabel>
          ))}
        </div>
      </HtmlLabel>

      <Button
        className="flex items-center justify-center w-full py-2 mt-2 text-xs border border-dashed"
        size="none"
        variant="text"
        onClick={() =>
          append({
            time: '',
          })
        }
      >
        <IconPlus className="w-4 h-4" /> Add show
      </Button>
    </div>
  )
}

export const SelectMovie = ({
  setValue,
}: {
  setValue: (id: number) => void
}) => {
  const [searchText, setSearchText] = useState('')
  const [getMovies, { loading, data }] = useMoviesLazyQuery({})

  useEffect(() => {
    getMovies({
      variables: {
        where: {
          title: { contains: searchText, mode: QueryMode.Insensitive },
        },
      },
    })
  }, [searchText])
  return (
    <HtmlLabel title="Movie">
      <Autocomplete<MoviesQuery['movies'][0], false, false, false>
        getOptionLabel={(x) => x.title}
        onInputChange={(_, v) => {
          setSearchText(v)
        }}
        loading={loading}
        options={data ? data.movies : []}
        onChange={(_, v) => {
          if (v) {
            const { id } = v
            setValue(id)
          }
        }}
      />
    </HtmlLabel>
  )
}

export const SelectScreen = ({
  setValue,
}: {
  setValue: (id: number) => void
}) => {
  const uid = useAppSelector(selectUid)
  const [searchText, setSearchText] = useState('')
  const [getCinema, { loading, data }] = useFindCinemaLazyQuery({})

  useEffect(() => {
    if (uid)
      getCinema({
        variables: {
          uid,
        },
      })
  }, [searchText])
  return (
    <HtmlLabel title="Screen number">
      <Autocomplete<
        FindCinemaQuery['cinema']['screens'][0],
        false,
        false,
        false
      >
        getOptionLabel={(x) => x.number.toString()}
        onInputChange={(_, v) => {
          setSearchText(v)
        }}
        loading={loading}
        options={data ? data.cinema.screens : []}
        onChange={(_, v) => {
          if (v) {
            const { id } = v
            console.log('Value ', v, id)
            setValue(id)
          }
        }}
      />
    </HtmlLabel>
  )
}
