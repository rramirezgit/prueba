import { Formik } from 'formik'
import React from 'react'
import HeaderTemplateFrom from './header'
import initialValues from './initialValues'
import validationSchema from './validationSchema'

const FormNewsletter = () => {
  const inialValuesForm = initialValues()
  const validationSchemaForm = validationSchema()
  return (
    <Formik
      initialValues={inialValuesForm}
      onSubmit={values => {
        console.log(values)
      }}
      validationSchema={validationSchemaForm}
    >
      {({ handleSubmit, values, handleChange }) => {
        // console.log({ values })
        return (
          <>
            <HeaderTemplateFrom values={values} />
          </>
        )
      }}
    </Formik>
  )
}

export default FormNewsletter
