import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import "../../../Components/Navbar/navbar.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import MyStuffFooter from "../../../Components/Foter/MystufFooter/MyStuffFooter";
import Footer from "../../../Components/Foter/Footer";
import { Container } from "@mui/material";

function Following() {
  return (
    <>
    <Navbar />
      <Container>
        <Container style={{ backgroundColor: "#ffffff" }}>
          <div className="row m-1">
            <div className="col-sm-12 col-md-2 ">
              <Sidebar />
            </div>
            <div className="col-sm-12 col-md-10">
              <div
                style={{
                  borderBottom: "2px solid blue",
                  marginTop: "15px",
                  fontSize: "18px",
                }}
              >
                Following{" "}
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <MyStuffFooter />
      <Footer />
    </>
  );
}

export default Following;
