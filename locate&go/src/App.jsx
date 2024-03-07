// import { useState } from 'react'
import './App.css'
import {
  Route,
  Routes,
  // Switch,
} from 'react-router-dom'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import MoversQuote from './pages/MoversQuote'
import Signup from './pages/Signup'
import Movinginfo from './pages/Movinginfo'

function App() {

  return (
      <Routes>
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/moversquote" element={<MoversQuote/>} />
        <Route path="/movinginfo" element={<Movinginfo/>} />
      </Routes>
  )
}

export default App
