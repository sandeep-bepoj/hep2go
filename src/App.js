import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";
import Aggrement from "./Pages/Aggrement/Aggrement";
import './App.css'
import NewMemberForm from "./Pages/SignUpPage/NewMemberForm/NewMemberForm";
import Index from "./Pages/Index/Index";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/aggrement" element={<Aggrement />} />
        <Route path="/new-member-form-free" element={<NewMemberForm />} />
        <Route path="/new-member-form-pro" element={<NewMemberForm />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  );
};

export default App;
