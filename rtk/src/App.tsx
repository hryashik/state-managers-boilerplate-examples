import { useSelector } from 'react-redux'
import { decrement, increment } from './store/slices/counter.slice'
import { RootState, useAppDispatch } from './store/store'
import React from 'react'
import { fetchUsers } from './store/slices/users.slice'

const List = React.memo(() => {
  const dispatch = useAppDispatch()
  const users = useSelector((state: RootState) => state.usersSlice.users)
  console.log('@List render')
  React.useEffect(() => {
    setTimeout(() => dispatch(fetchUsers()), 1500)
  }, [])

  if (!users.length) return <h1>Идёт загрузка списка...</h1>
  return (
    <>
      <ul>
        {users.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  )
})

function App() {
  const dispatch = useAppDispatch()
  const counter = useSelector((state: RootState) => state.counterSlice.counter)
  console.log('@App render')
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <List />
    </div>
  )
}

export default App
