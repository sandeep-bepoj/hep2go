import React from "react";
import {
  Container,
} from "@mui/material";
import {Link} from 'react-router-dom'
import { LoginIm,Logo,Signup, ProfileDef } from "../../Assets";

function Login() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center align-items-center">
        <Link to="/"> <img src={Logo} alt="" /></Link>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-5 m-2 ">
            <h1
              className="text-center p-1 rounded"
              style={{ backgroundColor: "black", color: "white" }}
            >
              SIGN IN TO HEP2go
            </h1>

            <div style={{ backgroundColor: "#f0f0f0" }} className="m-3">
              <label className="inputtext" htmlFor="">
                Email
              </label>
              <br />
              <input className="inputLogin" type="text" />
              <br />
              <label className="inputtext" htmlFor="">
                Password
              </label>
              <br />
              <input className="inputLogin" type="text" />
              <br />
              <input className="mt-3" type="checkbox" name="" id="" />
              <label className="inputtext">Remember Email</label>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
              {" "}
              <Link to="/index-home">

              <img
                src={LoginIm}
                alt="login"
                width={103}
                height={32}
                border={0}
                />
                </Link>
              <span style={{ marginLeft: "50px", fontSize: "18px" }}>
                Cancel
              </span>
            </div>
           <Link to="/forgot-password"> <div className="text-center mt-4 font-23">Change or Forgot Password?</div></Link>
            {/* <div className="d-flex justify-content-center align-items-center"> <img src={LoginIm} alt=""/> cancel</div> */}
          </div>
          <div className="col-sm-12 col-md-5 m-2">
            <h1
              className="text-center p-1 rounded"
              style={{ backgroundColor: "black", color: "white" }}
            >
              NEED AN ACCOUNT ?
            </h1>
            <div
            
            style={{ backgroundColor: "#f0f0f0" }}
            >
            <div className="text-center mt-4 font-23">FREE and PRO Membership</div>
                <div className=" d-flex align-items-center justify-content-center">
                <Link to="/sign-up">
                <img className="m-5" src={Signup} alt="" />
                </Link>
                </div>

            
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
