import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FavoritesPage from '../pages/FavoritesPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
