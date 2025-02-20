import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from '../../models/models'

const LS_FAV_KEY = 'rfk'

interface tmdbState {
  favorites: IMovie[]
}

const initialState: tmdbState = {
  favorites: [],
}

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {
    addFavorites(state, action: PayloadAction<IMovie>) {
      state.favorites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
    },
    removeFavorites(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((f) => f.id !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
    },
  },
})

export const tmdbActions = tmdbSlice.actions
export const tmdbReducer = tmdbSlice.reducer
