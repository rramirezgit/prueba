import React from 'react'
import logo from '@/assets/img/logo.svg'
import Image from 'next/image'
import styles from './mobileLayout.module.css'

interface MobileLayoutProps {
  children?: React.ReactNode
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className={styles.login}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" width={143.25} height={52.08} />
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  )
}

export default MobileLayout
