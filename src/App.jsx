import React from 'react'
import { Route, Routes } from "react-router-dom"
import LoginForm from './components/refs/LoginForm'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/ref' element={<LoginForm/>}/>
      </Routes>
    </div>
  )
}

export default App
