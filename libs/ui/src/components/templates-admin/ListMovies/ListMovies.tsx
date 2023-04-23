import { useMoviesQuery } from '@showtime-org/network/src/generated'
import { ShowData } from '../../templates/ShowData/ShowData'
import { useState } from 'react'

export interface IListMoviesProps {}

export const ListMovies = ({}: IListMoviesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(2)
  const { data, loading } = useMoviesQuery({ variables: { skip, take } })
  return (
    <div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.movies.length || 0,
          totalCount: data?.moviesCount.count || 0,
          setSkip,
          setTake,
        }}
      >
        {data?.movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </ShowData>
    </div>
  )
}
