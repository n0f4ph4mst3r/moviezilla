import MovieCard from '../components/MovieCard'
import { useGetTrendingMoviesListQuery } from '../store/tmdb/tmdb.api'

export default function AppRoutes() {
  const { isLoading, error, data } = useGetTrendingMoviesListQuery('en-US')

  if (error) {
    if ('status' in error) {
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <div className="text-gray-400 dark:text-zinc-300 text-center">
          <span>
            <p className="font-extrabold text-2xl">{error.status}</p>
            {errMsg}
          </span>
        </div>
      )
    }
    return (
      <div className="text-gray-400 dark:text-zinc-300 text-center">
        {error.message}
      </div>
    )
  }

  return (
    <>
      {isLoading &&
        [...Array(20)].map(() => (
          <div className="bg-gray-200 dark:bg-zinc-800 h-88 w-60 rounded-3xl border-solid border border-gray-200 dark:border-zinc-700 animate-pulse" />
        ))}
      {data?.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </>
  )
}
