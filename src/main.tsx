import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './components/AppRoutes.tsx'
import NavBar from './components/NavBar.tsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <NavBar />
        <main className="bg-white dark:bg-zinc-900 min-h-screen px-11 py-11 flex flex-wrap justify-center items-center">
          <div className="max-w-screen-2xl flex flex-wrap justify-center items-center gap-10">
            <AppRoutes />
          </div>
        </main>
        <Footer />
      </StrictMode>
    </BrowserRouter>
  </Provider>
)
