import { Link } from 'react-router-dom'
import logo from "/logo.svg"
import tmdbLogo from '../assets/tmdbLogo.svg'

export default function Footer() {
  return (
    <footer className="bg-stone-950 bottom-0 text-zinc-400">
      <div className="p-11 flex flex-wrap rtl:space-x-reverse">
        <img className="h-10 mr-5" src={logo} alt="FooterLogo" />
        <Link to="https://www.themoviedb.org/" target="_blank">
          <img className="w-20 h-10 mr-10" alt="TMDBLogo" src={tmdbLogo} />
        </Link>
        <div>
          Developed by{' '}
          <a
            href="https://github.com/n0f4ph4mst3r"
            className="text-purple-600"
            target="_blank"
          >
            Korshunov Vladislav
          </a>
          <div>
            This project uses the{' '}
            <a
              href="https://developer.themoviedb.org/docs/faq"
              className="text-purple-600"
              target="_blank"
            >
              TMDB API
            </a>{' '}
            but is not endorsed or certified by TMDB.
          </div>
        </div>
      </div>
    </footer>
  )
}
