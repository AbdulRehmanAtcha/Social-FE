import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Login, NotFound, Register } from '../components'

const Routes = () => {
    return useRoutes([
        {
            path: "/", element: <Login />
        },
        {
            path: "/login", element: <Login />
        },
        {
            path: "/register", element: <Register />
        },
        {
            path: "/404", element: <NotFound />
        },
        {
            path: "*", element: <Navigate to={"/404"} />
        }
    ])
}

export default Routes
