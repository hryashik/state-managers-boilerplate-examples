import { createEvent, createStore, createEffect } from 'effector'
import { UserEntity } from '../entities/User'

const url = 'https://jsonplaceholder.typicode.com/users'

interface IDefaultState {
  users: UserEntity[]
}

const defaultState: IDefaultState = {
  users: [],
}

export const fetchUsersFX = createEffect(
  (): Promise<UserEntity[]> => fetch(url).then(data => data.json())
)

export const $usersStore = createStore(defaultState).on(
  fetchUsersFX.doneData,
  (state, payload) => ({
    users: payload,
  })
)
