import { configureStore } from '@reduxjs/toolkit'
import logupReducer from './slices/logup'

export const store = configureStore({
  reducer: {
    logup: logupReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch