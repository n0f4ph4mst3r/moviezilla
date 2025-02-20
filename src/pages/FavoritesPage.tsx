import MovieCard from '../components/MovieCard'
import { useAppSelector } from '../hooks/redux'

export default function AppRoutes() {
  const { favorites } = useAppSelector((state) => state.tmdb)

  if (favorites.length === 0)
    return (
      <p className="text-gray-400 dark:text-zinc-300 text-center">No items</p>
    )

  return (
    <>{favorites?.map((movie) => <MovieCard movie={movie} key={movie.id} />)}</>
  )
}
