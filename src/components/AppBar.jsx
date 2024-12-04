import React, { useContext } from 'react'
import { AuthContext } from '../App'

const AppBar = (props) => {
  const data = Object.keys(props).length !== 0 
    ? props 
    : useContext(AuthContext)

  return (
    <nav className={`p-4 ${data.isDarkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-gray-200 border-b border-gray-300'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Auth System Demo</h1>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <label 
              htmlFor="dark-mode-toggle" 
              className="cursor-pointer select-none"
            >
              Dark Mode
            </label>
            <input 
              type="checkbox" 
              id="dark-mode-toggle" 
              checked={data.isDarkMode}
              onChange={(e) => data.setIsDarkMode(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600 bg-gray-800 border-gray-300 rounded"
            />
          </div>

          {/* Context API Toggle */}
          <div className="flex items-center space-x-2">
            <label 
              htmlFor="context-api-toggle" 
              className="cursor-pointer select-none"
            >
              Use Context API
            </label>
            <input 
              type="checkbox" 
              id="context-api-toggle" 
              checked={data.useContextApi}
              onChange={(e) => data.setUseContextApi(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600 bg-gray-800 border-gray-300 rounded"
            />
          </div>

          {data.isAuthenticated && (
            <div className="flex items-center space-x-4">
              <p className="text-lg">Welcome, {data.name}!</p>
              <button 
                onClick={() => data.setIsAuthenticated(false)}
                className={`px-4 py-2 rounded ${
                  data.isDarkMode 
                    ? 'bg-red-700 hover:bg-red-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default AppBar