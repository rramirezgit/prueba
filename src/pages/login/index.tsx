import { useMediaQuery } from '@mui/material'
import React from 'react'
import DeskLayout from './components/layout/desktop'
import MobileLayout from './components/layout/mobile'
import LoginForm from './components/forms/login'

const Login = () => {
  const mobile = useMediaQuery('(min-width: 980px)')

  return (
    <>
      {mobile ? (
        <DeskLayout>
          <LoginForm />
        </DeskLayout>
      ) : (
        <MobileLayout>
          <LoginForm />
        </MobileLayout>
      )}
    </>
  )
}

export default Login
