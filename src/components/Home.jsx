import React, { useContext } from 'react'
import Login from './Login'
import { AuthContext } from '../App'

const Home = (props) => {
  const data = Object.keys(props).length !== 0 
    ? props 
    : useContext(AuthContext)
    console.log(data)
  return (
    <div className={`container mx-auto p-4 ${
      data.isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-black'
    }`}>
      {data.isAuthenticated ? (
        <div className="text-center text-2xl mt-10">
          Welcome to the Home Page, {data.name}!
        </div>
      ) : (
        <Login 
          setIsAuthenticated={!data.useContextApi ? data.setIsAuthenticated : null} 
          setName={!data.useContextApi ? data.setName : null}
          isDarkMode={data.isDarkMode}
        />
      )}
    </div>
  )
}

export default Home