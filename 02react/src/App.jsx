import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)


  const addValue = () => {
    if (counter >= 20) throw new Error("Value can't be greater than 20");
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if (counter < 1) throw new Error("Value must be greater than 0");
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Main aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
