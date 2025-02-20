import { Link, NavLink } from 'react-router-dom'
import logo from "/logo.svg"

export default function NavBar() {
  return (
    <nav className="bg-white px-5 border-b border-gray-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="flex items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="NavLogo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MovieZilla
          </span>
        </NavLink>
        <span className="flex items-center space-x-2">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </span>
      </div>
    </nav>
  )
}
