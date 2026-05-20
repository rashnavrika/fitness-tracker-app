const WorkoutCard = props => {
  const {exerciseDetails} = props

  const {
    name,
    bodyPart,
    equipment,
    gifUrl,
  } = exerciseDetails

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={gifUrl}
        alt={name}
        className="w-full h-52 object-cover rounded"
      />

      <h1 className="text-xl font-bold mt-3">
        {name}
      </h1>

      <p className="mt-2">
        Body Part: {bodyPart}
      </p>

      <p>
        Equipment: {equipment}
      </p>
    </div>
  )
}

export default WorkoutCard