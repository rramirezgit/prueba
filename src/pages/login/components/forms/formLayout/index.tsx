import React from 'react'
import styles from './formLayout.module.css'
import google from '@/assets/img/icons/google.svg'
import Link from 'next/link'
import Image from 'next/image'

interface FormLayoutProps {
  children?: React.ReactNode
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>¡Bienvenido!</div>
      <div className={styles.newContainer}>
        <div className={styles.new}>¿Nuevo?</div>
        <Link href="/register" className={styles.link}>
          Registrate
        </Link>
      </div>
      <div className={styles.googleButton}>
        <Image src={google} alt="google" width={20} height={20} />
        Sign in with Google
      </div>
      <div className={styles.orContainer}>
        <span className={styles.or}>OR</span>
      </div>
      {children}
    </div>
  )
}

export default FormLayout
