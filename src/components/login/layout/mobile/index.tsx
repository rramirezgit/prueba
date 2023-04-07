import React from 'react'
import logo from '@/assets/img/logo.svg'
import Image from 'next/image'
import styles from './mobileLayout.module.css'
import { Box } from '@mui/material'
import { StyledBackButton } from '../desktop'
import useChangeStep from '@/hooks/logoup/useChangeStep'
import { useRouter } from 'next/router'

interface MobileLayoutProps {
  children?: React.ReactNode
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const { handlePrevStep, showStepOne } = useChangeStep()
  const router = useRouter()

  const showBackButton = router.pathname === '/logup' && !showStepOne
  return (
    <Box
      className={styles.login}
      style={{
        minHeight: showStepOne ? '800px' : '900px'
      }}
    >
      {showBackButton && (
        <StyledBackButton
          onClick={handlePrevStep}
          className={styles.backButton}
        >
          {'< volver'}
        </StyledBackButton>
      )}
      <Box
        className={styles.logoContainer}
        style={{
          margin: showStepOne ? '102px 0px 0px 0px' : '102px 0px 33px 0px'
        }}
      >
        <Image src={logo} alt="logo" width={143.25} height={52.08} />
      </Box>
      <div className={styles.formContainer}>{children}</div>
    </Box>
  )
}

export default MobileLayout
