import {useEffect, useState} from 'react'

import Navbar from '../Navbar'

const History = () => {
  const [workoutHistory, setWorkoutHistory] = useState([])

  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem('workouts')) || []

    setWorkoutHistory(savedWorkouts)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Workout History
        </h1>

        {workoutHistory.length === 0 ? (
          <p>No Workout History Found</p>
        ) : (
          workoutHistory.map(eachWorkout => (
            <div
              key={eachWorkout.id}
              className="bg-white p-4 rounded shadow mb-4"
            >
              <h1 className="text-xl font-bold">
                {eachWorkout.workoutName}
              </h1>

              <p>
                Calories Burned:
                {' '}
                {eachWorkout.calories}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default History