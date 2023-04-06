import { ErrorMessage, useField } from 'formik'
import { StyledInput } from '../styled'
import styles from './input.module.css'

interface Props {
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: any
}

export const TextInput = (props: Props) => {
  const [field] = useField(props)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <StyledInput {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className={styles.error}
      />
    </div>
  )
}
