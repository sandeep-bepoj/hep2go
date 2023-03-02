import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";
import Aggrement from "./Pages/Aggrement/Aggrement";
import './App.css'
import NewMemberForm from "./Pages/SignUpPage/NewMemberForm/NewMemberForm";

import IndexHome from "./Pages/Index/IndexHome";
import Forgot from "./Pages/LoginPage/ForgotPassword/Forgot";
import Upgrade from "./Pages/SignUpPage/Upgrade/Upgrade";
import Profile from "./Pages/MYStuff/Profile/Profile";
import MyExercise from "./Pages/MYStuff/My Exercises/MyExercise";
import Following from "./Pages/MYStuff/Following/Following";
import Favriotes from "./Pages/MYStuff/My Favorites/Favriotes";
import Routines from "./Pages/MYStuff/My Routines/Routines";
import Exercises from "./Pages/Exercises/Exercises";
import ExcerciseEditior from "./Pages/ExerciseEditior/ExcerciseEditior";
import Test from "./Pages/Test";


const App = () => {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Home />} /> {/*responsive */}
        <Route path="/login" element={<Login />} /> {/*responsive */}
        <Route path="/forgot-password" element={<Forgot />} />{/*responsive */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/upgrade-others" element={<Upgrade/>} />{/*responsive */}
        <Route path="/aggrement" element={<Aggrement />} /> {/*responsive */}
        <Route path="/new-member-form-free" element={<NewMemberForm />} />{/*responsive */}
        <Route path="/new-member-form-pro" element={<NewMemberForm />} />{/*responsive */}
        <Route path="/index-home" element={<IndexHome />} />{/*responsive */}
        <Route path="/my-stuff/my-exercises" element={<MyExercise />} />{/*responsive */}
        <Route path="/my-stuff/following" element={<Following />} />{/*responsive */}
        <Route path="/my-stuff/my-favorites" element={<Favriotes />} />{/*responsive */}
        <Route path="/my-stuff/my-routines" element={<Routines />} />{/*responsive */}
        <Route path="/my-stuff/profile" element={<Profile />} />{/*responsive */}
        <Route path="/exercise" element={<Exercises />} />{/*responsive */}
        <Route path="/test" element={<Test />} />
        <Route path="/exercise/:edit" element={<ExcerciseEditior />} />

      </Routes>
    </>
  );
};

export default App;
