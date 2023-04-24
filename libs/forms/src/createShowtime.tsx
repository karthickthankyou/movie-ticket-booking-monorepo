import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const formSchemaCreateTime = z.object({
  time: z.string(),
})

export const formSchemaCreateShowtime = z.object({
  showtimes: z.array(formSchemaCreateTime),
  screenId: z.number(),
  movieId: z.number(),
})

export type FormTypeCreateShowtime = z.infer<typeof formSchemaCreateShowtime>

export const useFormCreateShowtime = () =>
  useForm<FormTypeCreateShowtime>({
    resolver: zodResolver(formSchemaCreateShowtime),
    defaultValues: { movieId: -99, screenId: -99, showtimes: [] },
  })

export const FormProviderCreateShowtime = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateShowtime()

  return <FormProvider {...methods}>{children}</FormProvider>
}
