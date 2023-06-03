import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface newsletterState {
  textHeader: string
  color: string
  imgHeader: string
  imgSponsored: string
  haveSponsored: boolean
}

const initialState: newsletterState = {
  color: '',
  textHeader: '',
  imgHeader: '',
  imgSponsored: '',
  haveSponsored: true
}

export const newsletter = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<newsletterState>) => {
      state.color = action.payload.color
      state.textHeader = action.payload.textHeader
      state.imgHeader = action.payload.imgHeader
      state.imgSponsored = action.payload.imgSponsored
      state.haveSponsored = action.payload.haveSponsored
    }
  }
})

export const { setValue } = newsletter.actions

export default newsletter.reducer
