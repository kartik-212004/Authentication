import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function Signin() {
  const navigate = useNavigate()
  const [mail, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/signin", {
        mail,
        password,
      })
      const value = response.data.message
      console.log(value)
      if (value === "success") {
        navigate("/")
      }

      console.log("Signin successful:", response.data)
    } catch (error) {
      console.error("Error during sign-in:", error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#signup" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
