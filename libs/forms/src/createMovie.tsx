import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Genre } from '@showtime-org/network/src/generated'

export const formSchemacreateMovie = z.object({
  genre: z.nativeEnum(Genre),
  title: z.string().min(1, { message: 'Movie name is required' }),
  director: z.string().min(1, { message: 'Director name is required' }),
  duration: z.number({ invalid_type_error: 'Duration is required.' }),
  releaseDate: z.string(),
  posterUrl: z.string(),
})

export type FormTypeCreateMovie = z.infer<typeof formSchemacreateMovie>

export const useFormCreateMovie = () =>
  useForm<FormTypeCreateMovie>({
    resolver: zodResolver(formSchemacreateMovie),
    defaultValues: {
      director: '',
      duration: 0,
      genre: Genre.Action,
      posterUrl: '',
      releaseDate: '',
      title: '',
    },
  })

export const FormProviderCreateMovie = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateMovie()

  return <FormProvider {...methods}>{children}</FormProvider>
}
