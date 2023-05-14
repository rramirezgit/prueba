import React from 'react'
import styles from './formLayout.module.css'
import google from '@/assets/img/icons/google.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'

interface FormLayoutProps {
  children?: React.ReactNode
}

const FormLayout = ({ children }: FormLayoutProps) => {
  const router = useRouter()
  return (
    <Box
      className={styles.formContainer}
      sx={{ gap: { xs: '16px', md: '35px' } }}
    >
      <div className={styles.title}>¡Bienvenido!</div>
      <div className={styles.newContainer}>
        <div className={styles.new}>
          {router.pathname === '/login' ? '¿Nuevo?' : '¿Ya eres miembro?'}
        </div>
        <Link
          href={router.pathname === '/login' ? '/logup' : '/login'}
          className={styles.link}
        >
          {router.pathname === '/login' ? 'Registrate' : 'Login'}
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
    </Box>
  )
}

export default FormLayout
