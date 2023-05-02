import { useStore } from 'effector-react'
import React from 'react'
import { $counterStore, decrement, increment } from './stores/counter.store'
import { $usersStore, fetchUsersFX } from './stores/users.store'
import { useEvent } from 'effector-react/effector-react.mjs'

const List = React.memo(() => {
  const { users } = useStore($usersStore)
  const fetchUsers = useEvent(fetchUsersFX)
  const pending = useStore(fetchUsersFX.pending)
  React.useEffect(() => {
    setTimeout(fetchUsers, 1500)
  }, [])
  console.log('@List render', pending)
  if (!users.length) return <h1>Идёт подгрузка пользователей...</h1>
  return (
    <>
      <ul>
        {users.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  )
})

function App() {
  const { counter } = useStore($counterStore)
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
