import { Box, Button, TextField, styled } from '@mui/material'
import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik'
import Styles from './formEmail.module.css'
import * as yup from 'yup'

interface Values {
  email: string
}
const validationSchema = yup.object({
  email: yup.string().email('Correo no válido').required('Ingrese un email')
})

const StyledInput = styled(TextField)({
  '& .MuiInputBase-root': {
    width: '100%',
    height: '42px',
    '&::after': {
      borderBottom: '2px solid var(--primary_yellow)'
    }
  }
})

const StyledButton = styled(Button)({
  width: '92px',
  height: '42px',
  background: 'var(--primary_yellow)',
  '&:hover': {
    background: 'var(--primary_yellow)'
  }
})

export default function FormEmail(): JSX.Element {
  return (
    <>
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={(values: Values, { setErrors }: FormikHelpers<Values>) => {
          console.log(values)
          setErrors({ email: 'Se ha enviado exitosamente!' })
        }}
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
