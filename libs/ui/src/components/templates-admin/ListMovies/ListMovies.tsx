import {
  MoviesQuery,
  useMoviesQuery,
} from '@showtime-org/network/src/generated'
import { ShowData } from '../../templates/ShowData/ShowData'
import { useState } from 'react'
import { format } from 'date-fns'

export interface IListMoviesProps {}

export const ListMovies = ({}: IListMoviesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)
  const { data, loading } = useMoviesQuery({ variables: { skip, take } })
  return (
    <div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.movies.length || 0,
          setSkip,
          setTake,
        }}
      >
        {data?.movies.map((movie) => (
          <MovieInfo movie={movie} />
        ))}
      </ShowData>
    </div>
  )
}

export const MovieInfo = ({
  movie,
}: {
  movie: MoviesQuery['movies'][number]
}) => {
  return (
    <div key={movie.id} className="flex gap-2">
      <img
        src={movie.posterUrl || ''}
        className="object-cover w-12 h-24 rounded"
      />
      <div>
        <div className="text-lg font-semibold">{movie.title}</div>
        <div className="text-sm text-gray-600">{movie.director}</div>
        <div className="text-sm text-gray-600">{movie.duration} mins</div>
        <div className="text-sm text-gray-600">
          {format(new Date(movie.releaseDate), 'PP')}
        </div>
      </div>
    </div>
  )
}
