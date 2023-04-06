import { Formik } from 'formik'
import React from 'react'
import { Inputs } from './inputs'
import { TextInput } from '../input'
import { Checkbox } from '@mui/material'
import { StyledButton } from '../styled'
import styles from './login.module.css'
import Link from 'next/link'
import * as yup from 'yup'
import FormLayout from '../formLayout'

const validationSchema = yup.object({
  email: yup.string().email('Email no válido').required('Ingrese un email'),
  password: yup.string().required('Ingrese una contraseña')
})

const LoginForm = () => {
  return (
    <FormLayout>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            {Inputs.map(input => (
              <TextInput key={input.name} {...input} />
            ))}
            <StyledButton type="submit">Login</StyledButton>
            <div className={styles.footer}>
              <div className={styles.rememberMe}>
                <Checkbox sx={{ padding: 0, margin: '0px 10px 0px 0px' }} />
                <div>Remember me </div>
              </div>
              <Link href="/register" className={styles.forgotPassword}>
                Olvidé mi contraseña
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </FormLayout>
  )
}

export default LoginForm
