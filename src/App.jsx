import React from 'react'
import Netflix from './pages/Netflix'
import {Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    
      <Routes>
        <Route  path="/" element={<Netflix />} />
        <Route  path='/login' element={<Login />}></Route>
        <Route  path='/signup' element={<Signup />}></Route>
      </Routes>
    
  )
}

export default App