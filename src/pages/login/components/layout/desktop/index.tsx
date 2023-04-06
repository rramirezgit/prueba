import React from 'react'
import styles from './deskLayout.module.css'
import logo from '@/assets/img/logo.svg'
import Image from 'next/image'

interface DeskLayoutProps {
  children?: React.ReactNode
}

const DeskLayout = ({ children }: DeskLayoutProps) => {
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
      <div className={styles.contentForm}>{children}</div>
    </div>
  )
}

export default DeskLayout
