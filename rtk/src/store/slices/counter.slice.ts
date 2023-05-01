import { createSlice } from '@reduxjs/toolkit'

interface IState {
  counter: number
}

const initialState: IState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
