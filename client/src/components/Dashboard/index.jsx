import {useEffect, useState} from 'react'

import Navbar from '../Navbar'

const Dashboard = () => {
  const [workoutList, setWorkoutList] = useState([])

  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem('workouts')) || []

    setWorkoutList(savedWorkouts)
  }, [])

  const totalWorkouts = workoutList.length

  const totalCalories = workoutList.reduce(
    (total, eachWorkout) =>
      total + Number(eachWorkout.calories),
    0,
  )

  const latestWorkout =
    workoutList.length > 0
      ? workoutList[workoutList.length - 1]
      : null

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Fitness Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-2">
              Total Workouts
            </h1>

            <p className="text-4xl font-bold">
              {totalWorkouts}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-2">
              Calories Burned
            </h1>

            <p className="text-4xl font-bold">
              {totalCalories}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-2">
              Latest Workout
            </h1>

            {latestWorkout ? (
              <div>
                <p className="text-xl font-bold">
                  {latestWorkout.workoutName}
                </p>

                <p>
                  Calories:
                  {' '}
                  {latestWorkout.calories}
                </p>
              </div>
            ) : (
              <p>No Workout Added</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-10">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Fitness Tracker
          </h1>

          <p className="text-lg">
            Track workouts, monitor calories,
            visualize progress and maintain your
            fitness journey efficiently.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard