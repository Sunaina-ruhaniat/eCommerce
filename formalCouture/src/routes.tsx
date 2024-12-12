import React from 'react'
import LoginForm from './Components/Login/LoginForm'

const routes = [
  {
    path: '',
    element: <LoginForm />,
  },
  {
    path: 'login',
    element: <LoginForm />,
  },
]

export default routes
