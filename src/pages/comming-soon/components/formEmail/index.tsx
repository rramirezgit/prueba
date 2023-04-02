import { Box } from '@mui/material'
import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik'
import Styles from './formEmail.module.css'
import * as yup from 'yup'
import { StyledButton, StyledInput } from './styled'
import { postPresubscription } from '@/services/comming-soon'
import { typePresuscription } from '@/services/comming-soon/types'

const validationSchema = yup.object({
  email: yup.string().email('Correo no válido').required('Ingrese un email')
})

export default function FormEmail(): JSX.Element {
  const handleSubmit = (
    values: typePresuscription,
    { setErrors }: FormikHelpers<typePresuscription>
  ) => {
    postPresubscription(values)
      .then(() => {
        setErrors({ email: 'Se ha enviado exitosamente!' })
      })
      .catch(() => {
        setErrors({ email: 'Error al enviar el correo' })
      })
  }

  return (
    <>
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, handleChange }) => (
          <Form className={Styles.formContent}>
            <Box
              className={Styles.form}
              sx={{
                flexDirection: {
                  xs: 'column',
                  md: 'row'
                },
                gap: {
                  xs: '23px',
                  md: '14px'
                }
              }}
            >
              <Box className={Styles.content}>
                <StyledInput
                  autoComplete="off"
                  name="email"
                  onChange={handleChange}
                  placeholder="Doe@email.com"
                  variant="standard"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={
                    errors?.email === 'Se ha enviado exitosamente!'
                      ? Styles.errorActive
                      : Styles.error
                  }
                />
              </Box>
              <StyledButton variant="contained" type="submit">
                JOIN
              </StyledButton>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}
