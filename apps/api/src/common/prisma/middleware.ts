import { Prisma } from '@prisma/client'

export const autoIncrementScreenNumber: Prisma.Middleware = async (
  params,
  next,
) => {
  if (params.model === 'Screen' && params.action === 'create') {
    const maxScreenNumber = await next({
      ...params,
      action: 'findMany',
      model: 'Screen',
      args: {
        where: {
          cinemaId: params.args.data.cinemaId,
        },
        orderBy: {
          number: 'desc',
        },
        take: 1,
      },
    })

    const nextScreenNumber =
      maxScreenNumber.length > 0 ? maxScreenNumber[0].number + 1 : 1
    params.args.data.number = nextScreenNumber
  }

  return next(params)
}
