import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Changecolor from './components/Changecolor'

function App() {
  return (
    <div className="App">
      <Login />
      <Profile />
      <Changecolor />
    </div>
  )
}

export default App
