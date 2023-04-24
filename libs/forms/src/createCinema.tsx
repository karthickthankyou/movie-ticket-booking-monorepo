import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaCreateScreen } from './createScreen'

export const formSchemaCreateAddress = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string(),
})

export const formSchemacreateCinema = z.object({
  cinemaName: z.string().min(1, { message: 'Cinema name is required' }),
  managerName: z.string().min(1, { message: 'Manager name is required' }),
  address: formSchemaCreateAddress,
  screens: z.array(formSchemaCreateScreen),
})

export type FormTypeCreateCinema = z.infer<typeof formSchemacreateCinema>

export const useFormCreateCinema = () =>
  useForm<FormTypeCreateCinema>({
    resolver: zodResolver(formSchemacreateCinema),
    defaultValues: {
      address: { address: '', lat: 0, lng: 0 },
      cinemaName: '',
      managerName: '',
      screens: [],
    },
  })

export const FormProviderCreateCinema = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateCinema()

  return <FormProvider {...methods}>{children}</FormProvider>
}
