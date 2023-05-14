import LogupForm from '@/components/login/forms/logup'
import DeskLayout from '@/components/login/layout/desktop'
import MobileLayout from '@/components/login/layout/mobile'
import { useMediaQuery } from '@mui/material'
import React from 'react'

const Logup = () => {
  const mobile = useMediaQuery('(min-width: 900px)')

  return (
    <>
      {mobile ? (
        <DeskLayout>
          <LogupForm />
        </DeskLayout>
      ) : (
        <MobileLayout>
          <LogupForm />
        </MobileLayout>
      )}
    </>
  )
}

export default Logup
