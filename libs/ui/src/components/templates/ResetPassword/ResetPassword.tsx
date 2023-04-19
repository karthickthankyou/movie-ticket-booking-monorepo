import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { Button } from '../../atoms/Button'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'

import {
  FormTypeResetPassword,
  useFormResetPassword,
} from '@booking-org/forms/src/resetPassword'

import { useAsync } from '@booking-org/hooks/src/fetcher'
import { resetPassword } from '@booking-org/network/src/auth'
import { Dialog } from '../../atoms/Dialog'

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useFormResetPassword()

  const [showDialog, setShowDialog] = useState(false)

  const { loading, error, success, callAsyncFn } = useAsync(
    (data: FormTypeResetPassword) => resetPassword(data.email),
    (err: any) => {
      if (err.code === 'auth/user-not-found') {
        return 'User not found'
      }
      return 'Something went wrong. Please try again.'
    },
  )

  useEffect(() => {
    setShowDialog(Boolean(error))
  }, [error])

  return (
    <>
      <div className="max-w-md mx-auto">
        {success ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold">Password reset email sent</h1>
            <p className="mb-4">
              We have sent an email to <b>{getValues('email')}</b> with a link
              to reset your password. Please check your inbox and follow the
              instructions in the email.
            </p>
            <Link href="/">Home</Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(async (data) => {
              await callAsyncFn(data)
            })}
            className="flex flex-col max-w-sm gap-1"
          >
            {error && (
              <Dialog open={showDialog} setOpen={setShowDialog} title="Error">
                <div className="text-red-600">{error}</div>
              </Dialog>
            )}

            <HtmlLabel title="Email" error={errors.email?.message}>
              <HtmlInput
                placeholder="Enter the email."
                {...register('email')}
              />
            </HtmlLabel>

            <Button type="submit" variant="contained" loading={loading}>
              Send verification code
            </Button>
          </form>
        )}
      </div>
    </>
  )
}

export { ResetPassword }
