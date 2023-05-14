import React from 'react'
import { Form, Formik } from 'formik'
import stylesForm from '../../forms.module.css'
import useChangeStep from '@/hooks/logoup/useChangeStep'
import { StyledButton } from '../../../../common/inputs/styled'
import { InputsStepOne } from '../inputs'
import * as yup from 'yup'
import DatePicker from '@/components/common/inputs/datePicker'
import { TextInput } from '@/components/common/inputs/TextField'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setStepOne } from '@/store/slices/logup'

const validationSchema = yup.object({
  name: yup.string().required('Ingrese un nombre'),
  lastname: yup.string().required('Ingrese un apellido'),
  date: yup.string().required('Ingrese una fecha'),
  email: yup.string().email('Email no válido').required('Ingrese un email')
})

const LogUpStepOne = () => {
  const { handleNextStep } = useChangeStep()
  const dispatch = useAppDispatch()
  const {
    stepOne: { name, lastname, date, email }
  } = useAppSelector(state => state.logup)

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          lastname: lastname || '',
          date: date || '',
          email: email || ''
        }}
        onSubmit={values => {
          dispatch(setStepOne(values))
          handleNextStep()
          return
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form className={stylesForm.form} onSubmit={handleSubmit}>
            {InputsStepOne.map(input => (
              <>
                {input.type !== 'date' ? (
                  <TextInput key={input.name} {...input} />
                ) : (
                  <DatePicker key={input.name} {...input} />
                )}
              </>
            ))}

            <StyledButton type="submit">continuar</StyledButton>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LogUpStepOne
