import React from 'react'

const List = React.memo(() => {
  console.log('@List render')
  return (
    <>
      <ul></ul>
    </>
  )
})

function App() {
  console.log('@App render')
  return (
    <div>
      <h1>Counter: </h1>
      <button>increment</button>
      <button>decrement</button>
      <List />
    </div>
  )
}

export default App
