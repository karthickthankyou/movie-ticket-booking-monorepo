import { useFormCreateMovie } from '@showtime-org/forms/src/createMovie'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Form } from '../../atoms/Form'
import { HtmlSelect } from '../../atoms/HtmlSelect'
import {
  Genre,
  namedOperations,
  useCreateMovieMutation,
} from '@showtime-org/network/src/generated'

import { ProgressBar } from '../../atoms/ProgressBar'
import { Button } from '../../atoms/Button'
import { useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { useImageUpload } from '@showtime-org/hooks'
import { Controller } from 'react-hook-form'

export interface ICreateMovieProps {}

export const CreateMovie = ({}: ICreateMovieProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useFormCreateMovie()

  const [createMovie, { loading, data }] = useCreateMovieMutation()
  const [open, setOpen] = useState(false)
  const [{ percent, uploading }, uploadImages] = useImageUpload()

  return (
    <div>
      <Dialog open={open} setOpen={setOpen} title="Success">
        Movie created.
      </Dialog>
      <Form
        onSubmit={handleSubmit(
          async ({
            director,
            duration,
            genre,
            posterUrl,
            releaseDate,
            title,
          }) => {
            const uploadedImages = await uploadImages(posterUrl)

            await createMovie({
              variables: {
                createMovieInput: {
                  director,
                  duration,
                  genre,
                  posterUrl: uploadedImages[0],
                  releaseDate,
                  title,
                },
              },
              refetchQueries: [namedOperations.Query.movies],
            })
            reset()
            setOpen(true)
          },
        )}
      >
        <HtmlLabel title="title" error={errors.title?.message}>
          <HtmlInput placeholder="Title" {...register('title')} />
        </HtmlLabel>
        <HtmlLabel title="director name" error={errors.director?.message}>
          <HtmlInput placeholder="Director name" {...register('director')} />
        </HtmlLabel>
        <HtmlLabel title="Duration" error={errors.duration?.message}>
          <HtmlInput
            placeholder="Duration"
            {...register('duration', { valueAsNumber: true })}
          />
        </HtmlLabel>
        <HtmlLabel title="Release date" error={errors.releaseDate?.message}>
          <HtmlInput
            placeholder="Release date"
            type="date"
            {...register('releaseDate')}
          />
        </HtmlLabel>
        <HtmlLabel title="Genre" error={errors.genre?.message}>
          <HtmlSelect placeholder="projection type" {...register(`genre`)}>
            {Object.values(Genre).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </HtmlSelect>
        </HtmlLabel>
        <HtmlLabel title="Images" error={errors.posterUrl?.message?.toString()}>
          <Controller
            control={control}
            name={`posterUrl`}
            render={({ field }) => (
              <HtmlInput
                type="file"
                accept="image/*"
                multiple={false}
                onChange={(e) => field.onChange(e?.target?.files)}
              />
            )}
          />
          {percent > 0 ? (
            <ProgressBar variant="determinate" value={percent} />
          ) : null}
        </HtmlLabel>
        <Button loading={loading} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
