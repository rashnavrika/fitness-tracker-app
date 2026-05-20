import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import ThemeContext from './components/ThemeContext'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Exercises from './components/Exercises'
import AddWorkout from './components/AddWorkout'
import Progress from './components/Progress'
import History from './components/History'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] =
    useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(prevState => !prevState)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/exercises"
          element={
            <ProtectedRoute>
              <Exercises />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-workout"
          element={
            <ProtectedRoute>
              <AddWorkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App