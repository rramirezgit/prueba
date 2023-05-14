interface InputProps {
  name: string
  type?: 'text' | 'email' | 'password' | 'date'
  placeholder?: string
  autoComplete?: string
  variant?: 'standard' | 'outlined' | 'filled'
  [x: string]: any
}

export const InputsStepOne: InputProps[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Nombre',
    autoComplete: 'off',
    variant: 'standard'
  },
  {
    name: 'lastname',
    type: 'text',
    placeholder: 'Apellido',
    autoComplete: 'off',
    variant: 'standard'
  },
  {
    name: 'date',
    type: 'date',
    placeholder: 'Fecha de nacimiento',
    autoComplete: 'off',
    variant: 'standard'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    autoComplete: 'off',
    variant: 'standard'
  }
]

export const InputsStepTwo: InputProps[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Nombre de usuario',
    autoComplete: 'off',
    variant: 'standard'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Contraseña',
    autoComplete: 'off',
    variant: 'standard',
    showError: false,
    options: [
      {
        type: 'info',
        info: 'Mínimo 8 caracteres',
        name: 'minLength'
      },
      {
        type: 'info',
        info: 'Debe contener al menos un número',
        name: 'number'
      },
      {
        type: 'info',
        info: 'Caracter especial (!,@,#,$,ect)',
        name: 'special'
      }
    ]
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirmar contraseña',
    autoComplete: 'off',
    variant: 'standard'
  }
]
