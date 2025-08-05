import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home.'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />

      <h1 className='text-red-400'>This is a main page of the website</h1>
    </>
  )
}

export default App
