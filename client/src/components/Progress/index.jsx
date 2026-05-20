import {useEffect, useState} from 'react'

import Navbar from '../Navbar'
import ChartComponent from '../ChartComponent'

const Progress = () => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem('workouts')) || []

    const formattedData =
      savedWorkouts.map(eachWorkout => ({
        day: eachWorkout.workoutName,
        calories: Number(eachWorkout.calories),
      }))

    setChartData(formattedData)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Workout Progress
        </h1>

        {chartData.length === 0 ? (
          <p className="text-2xl font-bold">
            No Progress Data Available
          </p>
        ) : (
          <ChartComponent chartData={chartData} />
        )}
      </div>
    </div>
  )
}

export default Progress