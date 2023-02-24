import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPage/Login";

const App = () => {
  return (
    <>
       <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App