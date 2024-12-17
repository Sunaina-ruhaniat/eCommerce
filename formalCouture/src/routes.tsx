import React from 'react'
import LoginForm from './Components/Login/LoginForm'
import Home from './Components/Home/Home'

const routes = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'login',
    element: <LoginForm />,
  },
]

export default routes
