import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId
    },
  },
})

// action - changes a bit of the store
export const { enterRoom } = appSlice.actions

// selector - pulls the data from the store
export const selectRoomId = (state) => state.app.roomId

export default appSlice.reducer
