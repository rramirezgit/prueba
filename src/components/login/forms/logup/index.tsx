import React from 'react'
import FormLayout from '../formLayout'
import useChangeStep from '@/hooks/logoup/useChangeStep'
import LogUpStepOne from './stepOne'
import LogUpStepTwo from './stepTwo'

const LogupForm = () => {
  const { showStepOne } = useChangeStep()

  return (
    <FormLayout>{showStepOne ? <LogUpStepOne /> : <LogUpStepTwo />}</FormLayout>
  )
}

export default LogupForm
