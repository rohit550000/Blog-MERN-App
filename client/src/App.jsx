import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Home,About,Dashboard,SignIn,SignUp,Projects} from './pages'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App