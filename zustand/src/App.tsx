import React from 'react'
import counterStore from './stores/counter.store'

const List = () => {
  console.log('@List render')
  return (
    <>
      <ul>s</ul>
    </>
  )
}

function App() {
  const { counter, increment, decrement } = counterStore(state => state)
  console.log('@App render')
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <List />
    </div>
  )
}

export default App
