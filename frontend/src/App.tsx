import { useState } from 'react'
import './App.css'
import Dasboard from './components/Dasboard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <div >
      <Dasboard/>
      </div>
    </>
  )
}

export default App
