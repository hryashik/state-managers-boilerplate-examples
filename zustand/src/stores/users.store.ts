import { create } from 'zustand'
import { UserEntity } from '../entities/User'

interface IUserStore {
  users: UserEntity[]
  fetchUsers: () => void
}

const usersStore = create<IUserStore>(set => ({
  users: [],
  async fetchUsers() {
    const data: UserEntity[] = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then(resp => resp.json())
    set(() => ({ users: data }))
  },
}))

export default usersStore
