import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemText,
  Container,
  Input,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LoginIm, Logo, Signup, ProfileDef } from "../Assets";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import ExerciseSidebar from "../Components/ExerciseSidebar/ExerciseSidebar";
import MyStuffFooter from "../Components/Foter/MystufFooter/MyStuffFooter";
import Footer from "../Components/Foter/Footer";
import SignUp from "./SignUpPage/SignUp";

function Test() {
  return (
    <>
      <div className="doraemon-container">
  <div className="head"></div>
  <div className="body"></div>
  <div className="belly"></div>
  <div className="whiskers">
    <div className="whisker"></div>
    <div className="whisker"></div>
    <div className="whisker"></div>
    <div className="whisker"></div>
    <div className="whisker"></div>
    <div className="whisker"></div>
    <div className="whisker"></div>
    <div className="whisker"></div>
  </div>
  <div className="eyes"></div>
  <div className="nose"></div>
  <div className="mouth"></div>
  <div className="pocket"></div>
  <div className="bell"></div>
</div>

    </>
  );
}

export default Test;
