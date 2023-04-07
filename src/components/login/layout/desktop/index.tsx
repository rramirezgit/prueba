import React from 'react'
import styles from './deskLayout.module.css'
import logo from '@/assets/img/logo.svg'
import Image from 'next/image'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import useChangeStep from '@/hooks/logoup/useChangeStep'
import { useRouter } from 'next/router'

interface DeskLayoutProps {
  children?: React.ReactNode
}

export const StyledBackButton = styled(Button)({
  color: '#B7C9CF'
})

const DeskLayout = ({ children }: DeskLayoutProps) => {
  const { handlePrevStep, showStepOne } = useChangeStep()
  const router = useRouter()

  const showBackButton = router.pathname === '/logup' && !showStepOne

  return (
    <div className={styles.login}>
      <div className={styles.information}>
        <Image src={logo} alt="logo" />
        <div className={styles.infoContainer}>
          <div className={styles.title}>Frase del día</div>
          <div className={styles.info}>
            “Si la versión tuya de hace 5 años pudiera verte ahora mismo,
            estarían orgullosos. Sigue adelante y no te detengas”
          </div>
        </div>
      </div>
      <div className={styles.contentForm}>
        {showBackButton && (
          <StyledBackButton
            onClick={handlePrevStep}
            className={styles.backButton}
          >
            {'< volver'}
          </StyledBackButton>
        )}
        {children}
      </div>
    </div>
  )
}

export default DeskLayout
