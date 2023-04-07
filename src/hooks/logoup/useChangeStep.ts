import { setShowStepOne } from '@/store/slices/logup'
import { useAppDispatch, useAppSelector } from '../redux'

const useChangeStep = () => {
  const dispatch = useAppDispatch()
  const { showStepOne } = useAppSelector(state => state.logup)

  const handleNextStep = () => {
    dispatch(setShowStepOne(false))
  }

  const handlePrevStep = () => {
    dispatch(setShowStepOne(true))
  }

  return {
    handleNextStep,
    handlePrevStep,
    showStepOne
  }
}

export default useChangeStep
