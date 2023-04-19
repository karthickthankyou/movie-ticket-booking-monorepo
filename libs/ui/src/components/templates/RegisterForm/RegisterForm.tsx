import { Button } from '../../atoms/Button'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import Link from 'next/link'
import { register as registerUser } from '@booking-org/network/src/auth'

import { Form } from '../../atoms/Form'
import {
  FormTypeRegister,
  useFormRegister,
} from '@booking-org/forms/src/register'
import { useAsync } from '@booking-org/hooks/src/fetcher'
import { useAppDispatch, useAppSelector } from '@booking-org/store'
import { selectUser } from '@booking-org/store/user'
import { notification$ } from '@booking-org/util/subjects'
import { useDebounce } from '@booking-org/hooks/src/async'
import { useRouter } from 'next/navigation'

export interface ISignupFormProps {}

export const RegisterForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()

  const { loading, error, success, callAsyncFn } = useAsync(
    (data: FormTypeRegister) => registerUser(data),
    (err: any) => {
      if (err.code === 'auth/user-not-found') {
        return 'Invalid email.'
      } else if (err.code === 'auth/wrong-password') {
        return 'Invalid password.'
      }
      return 'Something went wrong. Please try again.'
    },
  )

  const user = useAppSelector(selectUser)
  const debounce$ = useDebounce(4000)
  const router = useRouter()

  if (user.uid) {
    notification$.next({ message: 'Logged in. Redirecting...' })
    debounce$.next(() => router.push('/'))
  }

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const { email, password } = data
        const user = await callAsyncFn({ email, password })
        console.log('Login data: ', data, user)
      })}
    >
      <HtmlLabel title="Email" error={errors.email?.message}>
        <HtmlInput placeholder="Enter the email." {...register('email')} />
      </HtmlLabel>
      <HtmlLabel title="Password" error={errors.password?.message}>
        <HtmlInput
          type="password"
          placeholder="······"
          {...register('password')}
        />
      </HtmlLabel>
      <HtmlLabel title="Display name" error={errors.displayName?.message}>
        <HtmlInput
          placeholder="Enter your name."
          {...register('displayName')}
        />
      </HtmlLabel>
      {Object.keys(errors).length ? (
        <div className="text-xs text-gray-600">
          Please fix the above {Object.keys(errors).length} errors
        </div>
      ) : null}
      <Button type="submit" fullWidth>
        Create account
      </Button>
      <div className="mt-4 text-sm ">
        Already have an autospace account?
        <br />
        <Link href="/login" className="font-bold">
          Login{' '}
        </Link>
        now.
      </div>
    </Form>
  )
}
