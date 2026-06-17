import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmitForm = event => {
    event.preventDefault()

    if (
      username === 'rahul' &&
      password === 'rahul@2021'
    ) {
      Cookies.set('jwt_token', 'fitness_app_token', {
        expires: 90,
      })

      navigate('/dashboard')
    } else {
      setErrorMsg('Invalid Username or Password')
    }
  }

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 rounded-lg w-96"
        onSubmit={onSubmitForm}
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Fitness Tracker Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter Username"
            className="border w-full p-3 rounded"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            className="border w-full p-3 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {errorMsg && (
          <p className="text-red-500 mb-4">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          className="bg-black text-white w-full p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login