import { Formik } from 'formik'
import React, { useEffect } from 'react'
import initialValues from './initialValues'
import validationSchema from './validationSchema'
import HeaderOptions from './HeaderOptions'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const HeaderForm = () => {
  const {
    templates: { news },
    templateIdEditing
  } = useSelector((state: RootState) => state.newsletter)

  const inialValuesForm = initialValues(templateIdEditing, news)
  const validationSchemaForm = validationSchema()

  return (
    <Formik
      initialValues={inialValuesForm}
      onSubmit={values => {
        console.log(values)
      }}
      validationSchema={validationSchemaForm}
    >
      {({ values }) => {
        // console.log({ values })
        return (
          <>
            <HeaderOptions values={values} />
          </>
        )
      }}
    </Formik>
  )
}

export default HeaderForm
