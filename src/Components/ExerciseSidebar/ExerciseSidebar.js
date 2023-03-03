import React from "react";
import "./style.css";
import { Container } from "@mui/material";
function ExerciseSidebar() {
  return (
    <Container>
        <div className="row " style={{ background: "#eeeeee",overflow:"hidden" }}>
        <div className="col-sm-12 col-md-12 d-flex align-items-center mt-2 bg-black ">

          <span className="sidebarText"> Group</span>
         
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
          
          <span className="sidebarText">HEP2g + Others</span>
        </div>
        <div className="col-sm-12 col-md-12 d-flex align-items-center mt-2 bg-black ">
          
          <span className="sidebarText">Category{" "}</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1 ">
         
          <span className="sidebarText"> Ankle and Foot{" "}</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
        
          <span className="sidebarText">  Cervical{" "}</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
          
          <span className="sidebarText">Education</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
        
          <span className="sidebarText">  Elbow and Hand</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
          
          <span className="sidebarText">Hip and Knee</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
          
          <span className="sidebarText">Lumbar Thoracic</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
         
          <span className="sidebarText"> Shoulder</span>
        </div>
        <div className="col-sm-12 col-md-12 d-flex align-items-center mt-2 bg-black ">
          
          <span className="sidebarText">Position</span>
        </div>
        <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2 sidebarText1">
         
          <span className="sidebarText"> All</span>
        </div>
      </div>
    </Container>
  );
}

export default ExerciseSidebar;
