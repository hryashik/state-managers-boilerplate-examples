import { useStore } from 'effector-react'
import React from 'react'
import { counterStore, decrement, increment } from './stores/counter.store'

const List = React.memo(() => {
  console.log('@List render')
  return (
    <>
      <ul></ul>
    </>
  )
})

function App() {
  const { counter } = useStore(counterStore)
  console.log('@App render')
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <List />
    </div>
  )
}

export default App
