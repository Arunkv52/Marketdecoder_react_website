import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Optionselling from './pages/Optionselling'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/Optionselling" element={<Optionselling />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
