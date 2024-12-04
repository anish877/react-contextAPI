import React, { useContext, useState } from 'react'
import { AuthContext } from '../App'

const Login = (props) => {
  const data = props.setName !== null && props.setIsAuthenticated !== null
    ? props
    : useContext(AuthContext)

  const [loginName, setLoginName] = useState('')

  const handleLoginButtonClick = (e) => {
    e.preventDefault()
    if (loginName.trim()) {
      data.setName(loginName)
      data.setIsAuthenticated(true)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className={`p-8 rounded-lg shadow-lg ${
        data.isDarkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-300'
      }`}>
        <form onSubmit={handleLoginButtonClick} className="space-y-4">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium mb-2"
            >
              Enter your name:
            </label>
            <input 
              type="text" 
              id="name" 
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              className={`w-full px-3 py-2 rounded ${
                data.isDarkMode 
                  ? 'bg-gray-700 text-white border-gray-600 focus:ring-indigo-500 focus:border-indigo-500' 
                  : 'bg-gray-100 text-black border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
              }`}
              placeholder="Your name"
              required
            />
          </div>
          <button 
            type="submit"
            className={`w-full px-4 py-2 rounded ${
              data.isDarkMode 
                ? 'bg-indigo-700 hover:bg-indigo-600 text-white' 
                : 'bg-indigo-500 hover:bg-indigo-600 text-white'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
