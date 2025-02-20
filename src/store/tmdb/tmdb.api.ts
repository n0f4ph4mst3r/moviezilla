import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovie, ServerResponse } from '../../models/models'

export const tmdbApi = createApi({
  reducerPath: 'tmdb/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  }),
  endpoints: (build) => ({
    getTrendingMoviesList: build.query<IMovie[], string>({
      query: (lang: string) => ({
        url: '/trending/movie/week',
        method: 'get',
        params: {
          language: lang,
          page: 1,
        },
      }),
      transformResponse: (response: ServerResponse<IMovie>) => {
        return response.results
      },
    }),
  }),
})

export const { useGetTrendingMoviesListQuery } = tmdbApi
