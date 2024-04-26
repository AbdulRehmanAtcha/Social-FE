import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            Its Login Page.
            <br />
            <Link to={"/register"}>Register</Link>
        </div>
    )
}

export default Login
