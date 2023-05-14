import LoginForm from '@/components/login/forms/login'
import DeskLayout from '@/components/login/layout/desktop'
import MobileLayout from '@/components/login/layout/mobile'
import { useMediaQuery } from '@mui/material'
import React from 'react'

const Login = () => {
  const mobile = useMediaQuery('(min-width: 900px)')

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
