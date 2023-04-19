import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { registerFormSchema } from './register'

export const resetPasswordFormSchema = registerFormSchema.pick({ email: true })
export type FormTypeResetPassword = z.infer<typeof resetPasswordFormSchema>

export const useFormResetPassword = () =>
  useForm<FormTypeResetPassword>({
    resolver: zodResolver(resetPasswordFormSchema),
  })
