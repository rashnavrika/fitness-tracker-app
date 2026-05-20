import {Link, useNavigate} from 'react-router-dom'

import Cookies from 'js-cookie'

import {useContext, useState} from 'react'

import {FaBars} from 'react-icons/fa'

import ThemeContext from '../ThemeContext'

const Navbar = () => {
  const navigate = useNavigate()

  const [showMenu, setShowMenu] =
    useState(false)

  const {isDarkTheme, toggleTheme} =
    useContext(ThemeContext)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')

    navigate('/')
  }

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <nav
      className={`p-4 ${
        isDarkTheme
          ? 'bg-gray-900 text-white'
          : 'bg-black text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Fitness Tracker
        </h1>

        <button
          type="button"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <FaBars size={25} />
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/exercises">
            Exercises
          </Link>

          <Link to="/add-workout">
            Add Workout
          </Link>

          <Link to="/progress">
            Progress
          </Link>

          <Link to="/history">
            History
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="bg-blue-500 px-4 py-2 rounded"
          >
            Theme
          </button>

          <button
            type="button"
            onClick={onClickLogout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/exercises">
            Exercises
          </Link>

          <Link to="/add-workout">
            Add Workout
          </Link>

          <Link to="/progress">
            Progress
          </Link>

          <Link to="/history">
            History
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="bg-blue-500 px-4 py-2 rounded"
          >
            Theme
          </button>

          <button
            type="button"
            onClick={onClickLogout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar