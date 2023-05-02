import { makeAutoObservable } from 'mobx'

class Store {
  counter: number = 0
  constructor() {
    makeAutoObservable(this)
  }
  increment = () => {
    this.counter++
  }
  decrement = () => {
    this.counter--
  }
}

export const counterStore = new Store()
