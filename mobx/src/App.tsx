import React from 'react'
import { counterStore } from './stores/counter.store'
import { observer } from 'mobx-react'
import { usersStore } from './stores/users.store'
import { toJS } from 'mobx'

// Вместо react.memo можно использовать observer
const List = observer(() => {
  const fetchUsers = usersStore.fetchUsers
  const users = toJS(usersStore.users)
  console.log('@List render')
  React.useEffect(() => {
    setTimeout(fetchUsers, 1500)
  }, [])
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
