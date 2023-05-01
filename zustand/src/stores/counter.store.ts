import { create } from 'zustand'

interface IStore {
  counter: number
  increment: () => void
  decrement: () => void
}

const counterStore = create<IStore>(set => ({
  counter: 0,
  increment() {
    set(state => ({ counter: state.counter + 1 }))
  },
  decrement() {
    set(state => ({ counter: state.counter - 1 }))
  },
}))

export default counterStore
