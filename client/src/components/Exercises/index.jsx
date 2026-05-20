import {useEffect, useState} from 'react'

import axios from 'axios'

import Navbar from '../Navbar'
import WorkoutCard from '../WorkoutCard'
import Loader from '../Loader'

const Exercises = () => {
  const [exerciseList, setExerciseList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    getExercises()
  }, [])

  const getExercises = async () => {
    try {
      const response = await axios.get(
        'https://wger.de/api/v2/exerciseinfo/?limit=12',
      )

      const formattedData =
        response.data.results.map(eachItem => ({
          id: eachItem.id,
          name: eachItem.name,
          bodyPart:
            eachItem.category?.name || 'Fitness',
          equipment:
            eachItem.equipment.length > 0
              ? eachItem.equipment[0].name
              : 'Body Weight',
          gifUrl:
            eachItem.images.length > 0
              ? eachItem.images[0].image
              : 'https://via.placeholder.com/300',
        }))

      setExerciseList(formattedData)

      setIsLoading(false)
    } catch (error) {
      console.log(error)

      setApiError(true)

      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (apiError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">
          API Fetch Failed
        </h1>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Exercises
        </h1>

        {exerciseList.length === 0 ? (
          <p className="text-2xl font-bold">
            No Exercises Available
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exerciseList.map(eachExercise => (
              <WorkoutCard
                key={eachExercise.id}
                exerciseDetails={eachExercise}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Exercises