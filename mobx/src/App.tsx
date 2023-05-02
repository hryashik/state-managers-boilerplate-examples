import React from 'react'
import { counterStore } from './stores/counter.store'
import { observer } from 'mobx-react'

// Вместо react.memo можно использовать observer
const List = observer(() => {
  console.log('@List render')
  return (
    <>
      <ul></ul>
    </>
  )
})

const App = observer(() => {
  const { counter, increment, decrement } = counterStore
  console.log('@App render')
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <List />
    </div>
  )
})

export default App
