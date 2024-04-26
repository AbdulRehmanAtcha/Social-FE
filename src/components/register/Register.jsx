import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      Its Register Page.
      <br />

      <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Register
