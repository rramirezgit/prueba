interface InputProps {
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  autoComplete?: string
  variant?: 'standard' | 'outlined' | 'filled'
  [x: string]: any
}

export const Inputs: InputProps[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    autoComplete: 'off',
    variant: 'standard'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    autoComplete: 'off',
    variant: 'standard'
  }
]
