import {useState, useEffect} from 'react'

import Navbar from '../Navbar'

const AddWorkout = () => {
  const [workoutName, setWorkoutName] = useState('')
  const [calories, setCalories] = useState('')
  const [workoutList, setWorkoutList] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem('workouts')) || []

    setWorkoutList(savedWorkouts)
  }, [])

  const deleteWorkout = id => {
    const filteredWorkouts =
      workoutList.filter(
        eachWorkout => eachWorkout.id !== id,
      )

    setWorkoutList(filteredWorkouts)

    localStorage.setItem(
      'workouts',
      JSON.stringify(filteredWorkouts),
    )
  }

  const onSubmitWorkout = event => {
    event.preventDefault()

    if (
      workoutName === '' ||
      calories === ''
    ) {
      setErrorMsg('All Fields Are Required')

      return
    }

    const newWorkout = {
      id: Date.now(),
      workoutName,
      calories,
    }

    const updatedWorkoutList = [
      ...workoutList,
      newWorkout,
    ]

    setWorkoutList(updatedWorkoutList)

    localStorage.setItem(
      'workouts',
      JSON.stringify(updatedWorkoutList),
    )

    setWorkoutName('')
    setCalories('')
    setErrorMsg('')
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Add Workout
        </h1>

        <form
          className="bg-white p-6 rounded-lg shadow w-full max-w-md"
          onSubmit={onSubmitWorkout}
        >
          <div className="mb-4">
            <label className="block mb-2">
              Workout Name
            </label>

            <input
              type="text"
              placeholder="Enter Workout"
              className="border w-full p-3 rounded"
              value={workoutName}
              onChange={e =>
                setWorkoutName(e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Calories Burned
            </label>

            <input
              type="number"
              placeholder="Enter Calories"
              className="border w-full p-3 rounded"
              value={calories}
              onChange={e =>
                setCalories(e.target.value)
              }
            />
          </div>

          {errorMsg && (
            <p className="text-red-500 mb-4">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded"
          >
            Add Workout
          </button>
        </form>

        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-4">
            Workout List
          </h1>

          {workoutList.length === 0 ? (
            <p>No Workouts Added</p>
          ) : (
            workoutList.map(eachWorkout => (
              <div
                key={eachWorkout.id}
                className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
              >
                <div>
                  <h1 className="text-xl font-bold">
                    {eachWorkout.workoutName}
                  </h1>

                  <p>
                    Calories Burned:
                    {' '}
                    {eachWorkout.calories}
                  </p>
                </div>

                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    deleteWorkout(eachWorkout.id)
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AddWorkout