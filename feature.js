import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const bankApp = createSlice({
  name: 'bankAppStore',
  initialState,
  reducers: {
    bankUser: (state, {payload}) => {
     state.user = payload
     console.log(payload)
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { bankUser } = bankApp.actions

export default bankApp.reducer