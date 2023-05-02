import { makeObservable, observable, action } from 'mobx'
import { UserEntity } from '../entities/User'

const url = 'https://jsonplaceholder.typicode.com/users'

class Store {
  users: UserEntity[] = []
  constructor() {
    makeObservable(this, {
      users: observable,
      addUsers: action,
    })
  }
  fetchUsers = async () => {
    const data = await fetch(url).then(data => data.json())
    this.addUsers(data)
  }
  addUsers = (data: UserEntity[]) => {
    this.users = data
  }
}

export const usersStore = new Store()
