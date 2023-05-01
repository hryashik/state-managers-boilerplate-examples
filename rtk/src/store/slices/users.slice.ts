import { UserEntity } from '@/entities/User'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const data: UserEntity[] = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then((data) => data.json())
  return data
})

interface IState {
  users: UserEntity[]
}

const initialState: IState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserEntity[]>) => {
        state.users = action.payload
      }
    )
  },
})

export default usersSlice.reducer
