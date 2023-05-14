import { Formik } from 'formik'
import React from 'react'
import { Inputs } from './inputs'
import { StyledButton } from '../../../common/inputs/styled'
import styles from './login.module.css'
import stylesForm from '../forms.module.css'
import Link from 'next/link'
import * as yup from 'yup'
import FormLayout from '../formLayout'
import { TextInput } from '@/components/common/inputs/TextField'
import CheckLabel from '@/components/common/inputs/checkLabel'

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
          <form onSubmit={handleSubmit} className={stylesForm.form}>
            {Inputs.map(input => (
              <TextInput key={input.name} {...input} />
            ))}
            <StyledButton type="submit">Login</StyledButton>
            <div className={styles.footer}>
              <CheckLabel label={<div>Remember me </div>} />
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
