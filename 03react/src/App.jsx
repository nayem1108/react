// import { useState } from 'react'
import './App.css'
import Card from './components/card'
import NewCard from './components/NewCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl text-3xl'>Tailwind Test</h1>

      <Card username="nayem" name="Nayem" btnText="Visit Profile" />
      {/* <Card channel="new test" myArr={[1, 2, 3, 4]} /> */}
      <NewCard username="test" name="Test User new card" btnText="Click Me" />
    </>
  )
}

export default App
