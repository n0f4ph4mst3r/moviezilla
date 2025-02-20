import { useState } from 'react'
import { IMovie } from '../models/models'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }: { movie: IMovie }) {
  const { addFavorites, removeFavorites } = useActions()
  const { favorites } = useAppSelector((state) => state.tmdb)
  const [isFav, setIsFav] = useState(
    favorites.map((item) => item.id).includes(movie.id)
  )

  const addToFavorite = () => {
    addFavorites(movie)
    setIsFav(true)
  }

  const removeFromFavorite = () => {
    removeFavorites(movie.id)
    setIsFav(false)
  }

  return (
    <div className="relative h-88 w-60 rounded-3xl border-solid border border-gray-200 dark:border-zinc-700 hover:scale-125 z-0 hover:z-50">
      <span className="absolute top-1 right-1 z-50 cursor-pointer">
        {isFav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-pink-400"
            onClick={removeFromFavorite}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-pink-400"
            onClick={addToFavorite}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            ></path>
          </svg>
        )}
      </span>

      <Link to={`https://www.themoviedb.org/movie/${movie.id}`}>
        <div className="absolute bg-gray-200 dark:bg-zinc-800 w-full h-full rounded-3xl flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-400 dark:text-zinc-600 animate-pulse"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <img
          className="absolute object-fill w-full h-full rounded-3xl text-white"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="absolute w-full h-full rounded-3xl pt-0 pb-4 px-4 bottom-0 flex flex-col justify-end bg-gradient-to-b from-[rgb(0,0,0,0)] to-gray-950 opacity-0 transition-opacity duration-200 hover:opacity-100 text-white">
          <div className="font-bold text-lg">
            {movie ? movie.original_title : ''}
          </div>
          <div className="font-medium text-xs">
            {movie ? movie.release_date : ''}

            <div className="flex items-center">
              <p>{(Math.round(movie.vote_average * 10) / 10).toFixed(1)}</p>
              {[...Array(Math.ceil(movie.vote_average / 2))].map(() => (
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}

              {[...Array(5 - Math.ceil(movie.vote_average / 2))].map(() => (
                <svg
                  className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}

              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm font-medium text-white">
                {movie.vote_count} Votes
              </p>
            </div>
          </div>
          <div className="font-light italic text-xs mb-1 ">
            {movie ? movie.overview.slice(0, 138) + '...' : ''}
          </div>
        </div>
      </Link>
    </div>
  )
}
