import { createEvent, createStore } from 'effector'

const defaultState = {
  counter: 0,
}

export const increment = createEvent()
export const decrement = createEvent()

export const counterStore = createStore(defaultState)
  .on(increment, state => ({ ...state, counter: ++state.counter }))
  .on(decrement, state => ({ ...state, counter: --state.counter }))
