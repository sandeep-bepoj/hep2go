import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPage/Login";
import SignUp from './Pages/SignUpPage/SignUp';

const App = () => {
  return (
    <>
       <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App