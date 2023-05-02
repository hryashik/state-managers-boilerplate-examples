import { makeAutoObservable } from 'mobx'
import { UserEntity } from '../entities/User'

class Store {
  users: UserEntity[] = []
  constructor() {
    makeAutoObservable(this)
  }
}
