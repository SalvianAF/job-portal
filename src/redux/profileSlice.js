import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    data:{}
  },
  reducers: {
    updateProfile: (state, action) => {
      state.data = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer