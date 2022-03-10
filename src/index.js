import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer, toast } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <ToastContainer theme="colored" autoClose={2000} />
    <Register />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
