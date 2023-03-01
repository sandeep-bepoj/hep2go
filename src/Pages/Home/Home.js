import React from "react";
import "./home.css";
import { TryoutImg, loginimg, signup } from "../.././Assets";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
function Home() {
  return (
    <Container maxWidth="xl">
      <div className="d-flex justify-content-center">
          <Link to="/aggrement">
            <img src={TryoutImg} className="img-fluid mt-5" alt="" />
          </Link>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div  style={{ margin: "0px 15px 0px 20px" }}>
            <td width={815} height={102}>
              <div align="left">
                <span className="style96">
                  <span className="style142">
                    <strong>HEP2go.com</strong>
                  </span>{" "}
                  is for rehabilitation professionals such as physical
                  therapists, PTA's, occupational therapists, COTA's, athletic
                  trainers, chiropractors, orthopedic doctors, sports doctors
                  and more to create home exercise programs for patients and or
                  clients. <br />
                  <br />
                  HEP stands for Home Exercise Program and we offer optimized
                  solutions for physical therapy, occupational therapy,
                  trainers, doctors and other rehab disciplines.
                  <br />
                  <br />
                  Sign up for{" "}
                  <span className="style98">
                    <strong>FREE</strong>
                  </span>{" "}
                  membership features such as saving exercise details, creating
                  exercises and printing your HEP's.
                </span>
              </div>
            </td>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="m-4">
            <td
              width={97}
              height={44}
              align="right"
              valign="middle"
              bgcolor="#FFFFFF"
            >
              <Link to="/login">
                <img
                  src={loginimg}
                  alt="login img"
                  width={52}
                  height={52}
                  border={0}
                />
              </Link>
            </td>
            <td width={297} align="left" valign="middle" bgcolor="#FFFFFF">
              <Link to="/login">
                &nbsp;&nbsp;<span className="style137">Log in</span>
              </Link>
            </td>

            <tr>
              <td height={44} align="right" valign="middle" bgcolor="#FFFFFF">
                <Link to="/sign-up">
                  <span className="style137">
                    <img
                      src={signup}
                      alt="sign up img"
                      width={52}
                      height={52}
                      border={0}
                    />
                  </span>
                </Link>
              </td>
              <td align="left" valign="middle" bgcolor="#FFFFFF">
                <Link to="/sign-up">
                  &nbsp;&nbsp;
                  <span className="style137">New Member Sign Up - Free</span>
                </Link>
              </td>
            </tr>
          </div>
        </div>
      </div>
      <span className="style79">
        <br />
        <br />

        <br />
        <div className=" text-center mt-5" style={{ color: "black" }}>
          © 2010- 2023 HEP2go, Inc., All Rights Reserved
        </div>
        <br />
      </span>
    </Container>
  );
}

export default Home;
