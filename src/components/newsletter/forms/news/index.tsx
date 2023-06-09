import { Formik } from 'formik'
import React from 'react'
import initialValues from './initialValues'
import validationSchema from './validationSchema'
import NewsOptions from './newsOptions'

interface NewsFormProps {
  id: string
}

const NewsForm = ({ id }: NewsFormProps) => {
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
      {({ values, submitForm }) => {
        // console.log({ values })
        return (
          <>
            <NewsOptions values={values} id={id} submitForm={submitForm} />
          </>
        )
      }}
    </Formik>
  )
}

export default NewsForm
