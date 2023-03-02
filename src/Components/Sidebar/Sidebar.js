import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CreteExercise,
  ExerciesImg,
  FavImg,
  FollowingImg,
  ProfileDef,
  ProfileImg,
  RoutinesImg,
} from "../../Assets";
import "./sidebar.css";
function Sidebar() {

  return (
    <div className="sidebar">
      <div>
        <div className="row font-23">
          <div className="col-sm-12 col-md-12 d-flex justify-content-center align-items-center">
            <img src={ProfileDef} className="img-fluid" alt="ProfileDef" />{" "}
          </div>
          <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2"><img src={ProfileImg} style={{marginRight:"8px"}} alt="FavImg"/><Link  className=" font-23" to="/my-stuff/profile">Profile</Link> </div>
          <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2"><img src={ExerciesImg}  style={{marginRight:"8px"}} alt=""/><Link  className=" font-23" to="/my-stuff/my-exercises"> My Exercises</Link> </div>
          <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2"><img src={FavImg}  style={{marginRight:"8px"}} alt="FavImg"/> <Link className=" font-23"  to="/my-stuff/my-favorites">My Favorites </Link></div>
          <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2"><img src={RoutinesImg}  style={{marginRight:"8px"}} alt=""/><Link  className=" font-23" to="/my-stuff/my-routines">My Routines</Link> </div>
          <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2"><img src={FollowingImg}  style={{marginRight:"8px"}} alt=""/> <Link className=" font-23"  to="/my-stuff/following">Following </Link></div>
          <div className="col-sm-6 col-md-12 d-flex align-items-center mt-2"><img src={CreteExercise}  style={{marginRight:"8px"}} alt=""/><Link  className=" font-23" to="">Create Exercise</Link> </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
