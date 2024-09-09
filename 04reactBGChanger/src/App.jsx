import { useState } from 'react'
import './App.css'
import Btn from './components/Btn'

function App() {

  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-full'>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</button>
            <button className='outline-none px-3 py-2 rounded-xl text-white shadow-lg' style={{ backgroundColor: 'blue' }} onClick={() => setColor('blue')}>Blue</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'olive' }} onClick={() => setColor('olive')}>Olive</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'gray' }} onClick={() => setColor('gray')}>Gray</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>Yellow</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'purple' }} onClick={() => setColor('purple')}>Purple</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'lavender' }} onClick={() => setColor('lavender')}>Lavender</button>
            <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{ backgroundColor: 'white' }} onClick={() => setColor('white')}>White</button>
            <button className='outline-none px-3 py-2 rounded-xl text-white shadow-lg' style={{ backgroundColor: 'black' }} onClick={() => setColor('black')}>Black</button>
            <button className='outline-none px-3 py-2 rounded-xl text-white shadow-lg' style={{ backgroundColor: '#123454' }} onClick={() => setColor('olive')}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
