import React from 'react'
import { Form, Formik } from 'formik'
import stylesForm from '../../forms.module.css'
import { StyledButton } from '../../../../common/inputs/styled'
import { InputsStepTwo } from '../inputs'
import * as yup from 'yup'
import { TextInput } from '@/components/common/inputs/TextField'
import CheckLabel from '@/components/common/inputs/checkLabel'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setStepTwo } from '@/store/slices/logup'
import CheckLabelFormik from '@/components/common/inputs/CheckLabelFormik'

const validationSchema = yup.object({
  username: yup.string().required('Ingrese un nombre de usuario'),
  password: yup
    .string()
    .required('empty')
    .min(8, 'minLength')
    .matches(/^(?=.*\d)/, 'number')
    .matches(/^(?=.*[!@#$%^&*])/, 'special'),
  confirmPassword: yup
    .string()
    .required('Ingrese una contraseña')
    .oneOf([yup.ref('password'), ''], 'Las contraseñas no coinciden'),
  TermsConditions: yup.boolean().oneOf([true], 'Debe aceptar los terminos'),
  Newsletter: yup.boolean()
})

const LogUpStepTwo = () => {
  const dispatch = useAppDispatch()
  const {
    stepTwo: { username, password }
  } = useAppSelector((state: any) => state.logup)

  return (
    <>
      <Formik
        initialValues={{
          username: username || '',
          password: password || '',
          confirmPassword: password || '',
          TermsConditions: false,
          Newsletter: false
        }}
        onSubmit={values => {
          dispatch(
            setStepTwo({
              username: values.username,
              password: values.password
            })
          )
          return
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form className={stylesForm.form} onSubmit={handleSubmit}>
            {InputsStepTwo.map(input => (
              <TextInput key={input.name} {...input} />
            ))}
            <div className={stylesForm.checks}>
              <CheckLabelFormik
                name={'TermsConditions'}
                label={
                  <div>
                    {'Acepto los '}
                    <Link className={stylesForm.link} href={''}>
                      Terminos y Condiciones
                    </Link>
                  </div>
                }
              />
              <CheckLabel label={<div>Subscribirse al Newsletter </div>} />
              <StyledButton type="submit">Finalizar</StyledButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LogUpStepTwo
