import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface logupState {
  showStepOne: boolean
  stepOne: {
    name: string
    lastname: string
    date: string
    email: string
  }
  stepTwo: {
    username: string
    password: string
  }
}

const initialState: logupState = {
  showStepOne: true,
  stepOne: {
    name: '',
    lastname: '',
    date: '',
    email: ''
  },
  stepTwo: {
    username: '',
    password: ''
  }
}

export const logupSlice = createSlice({
  name: 'logup',
  initialState,
  reducers: {
    setShowStepOne: (state, action: PayloadAction<boolean>) => {
      state.showStepOne = action.payload
    },
    setStepOne: (state, action: PayloadAction<logupState['stepOne']>) => {
      state.stepOne = {
        ...action.payload,
        date: action.payload.date // convert Date to ISO string
      }
    },
    setStepTwo: (state, action: PayloadAction<logupState['stepTwo']>) => {
      state.stepTwo = action.payload
    }
  }
})

export const { setShowStepOne, setStepOne, setStepTwo } = logupSlice.actions

export default logupSlice.reducer
