import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

import Nav from './components/Nav'
import Count from './components/Counter'
import Display from './components/Display'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Nav/>
       <Routes>
        <Route path='/c' element={<Count/>}/>
        <Route path='/b' element={<Display/>}/>
       </Routes>
       
      

    </>
  )
}

export default App
