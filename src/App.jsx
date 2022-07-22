import React from 'react'
import Netflix from './pages/Netflix'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    
  )
}

export default App