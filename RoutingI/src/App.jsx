import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AllProducts } from './Routes/AllProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <AllProducts/>
     <h1>helllo</h1>
    </div>
  )
}

export default App
