import React, { createContext, useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import Home from './components/Home'

export const AuthContext = createContext()

function App() {
  const [useContextApi, setUseContextApi] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [name, setName] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      {useContextApi ? (
        <AuthContext.Provider value={{
          name,
          isAuthenticated,
          useContextApi,
          isDarkMode,
          setIsAuthenticated,
          setUseContextApi,
          setName,
          setIsDarkMode
        }}>
          <AppBar />
          <Home />
        </AuthContext.Provider>
      ) : (
        <>
          <AppBar 
            name={name} 
            isAuthenticated={isAuthenticated} 
            setIsAuthenticated={setIsAuthenticated} 
            useContextApi={useContextApi} 
            setUseContextApi={setUseContextApi}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <Home 
            name = {name}
            isAuthenticated={isAuthenticated} 
            setIsAuthenticated={setIsAuthenticated} 
            setName={setName}
            isDarkMode={isDarkMode}
          />
        </>
      )}
    </div>
  )
}

export default App