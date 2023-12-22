import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <h1>
        Page not found. Kindly check the link or  return to 
        <Link to="/"> Homepage.</Link>
    </h1>
  )
}

export default NotFound