import React from 'react'
import counterStore from './stores/counter.store'
import usersStore from './stores/users.store'

const List = React.memo(() => {
  const { users, fetchUsers } = usersStore()
  console.log('@List render')
  React.useEffect(() => {
    setTimeout(() => fetchUsers(), 1500)
  }, [])
  if (!users.length) return <h1>Идет загрузка пользователей...</h1>
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
  const { counter, increment, decrement } = counterStore()
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
