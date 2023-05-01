import { useSelector } from 'react-redux'
import { decrement, increment } from './store/slices/counter.slice'
import { RootState, useAppDispatch } from './store/store'

function App() {
  const dispatch = useAppDispatch()
  const counter = useSelector((state: RootState) => state.counter.counter)
  console.log('@App render')
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App
