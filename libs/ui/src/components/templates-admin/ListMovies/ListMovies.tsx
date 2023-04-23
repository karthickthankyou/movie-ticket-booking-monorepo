import { useMoviesQuery } from '@showtime-org/network/src/generated'

export interface IListMoviesProps {}

export const ListMovies = ({}: IListMoviesProps) => {
  const { data, loading } = useMoviesQuery()
  return (
    <div>
      Movies: {data?.movies.length}
      <div>
        {data?.movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  )
}
