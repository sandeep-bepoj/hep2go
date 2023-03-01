import React from "react";
import { Link } from "react-router-dom";
import { LoginIm, Signup, Logo } from "../.././Assets";
import { Container } from "@mui/material";

function Login() {
  return (
    <div className="d-flex justify-content-center ">
      <div>
        <Container maxWidth="xl" style={{ width: "100%" }}>
          <tr>
            <td
              height={251}
              colSpan={2}
              rowSpan={3}
              align="left"
              valign="top"
            />
            <td height={224} colSpan={3} align="center" valign="middle">
              <img src={Logo} alt="hpe2go" width={260} height={86} border={0} />
            </td>
            <td height={224} align="left" valign="top">
              &nbsp;
            </td>
            <td rowSpan={3}>&nbsp;</td>
          </tr>
          
          <tr>
            <td
              height={42}
              width={320}
              align="center"
              valign="middle"
              bgcolor="#333333"
              style={{ color: "white ", width: "100%" }}
              className="style99"
            >
              &nbsp; SIGN IN TO HEP2go{" "}
            </td>
          </tr>
          <tr>
            <td
              height={64}
              colSpan={2}
              align="center"
              valign="bottom"
              
              style={{ width: "100%" }}
            >
              <table width={320} border={0} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td width={268} height={39} align="center" valign="top">
                      &nbsp;&nbsp;
                      <span className="style96">Email</span>
                      <br />
                      &nbsp;
                      <input
                        type="text"
                        id="email"
                        name="email"
                        style={{ width: "225px", fontSize: "14pt" }}
                      />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td width={2} height={58} align="right" valign="top">
              &nbsp;
            </td>
            <td width={12} align="center" valign="top" />
            <td height={58} colSpan={2} align="center" valign="middle">
              <label>
                &nbsp;&nbsp;
                <span className="style96">Password</span>
                <br />
                &nbsp;
                <input
                  type="password"
                  name="password"
                  style={{ width: "225px", fontSize: "14pt" }}
                />
              </label>
            </td>
            <td rowSpan={4} valign="middle">
              &nbsp;
            </td>

            <td rowSpan={4} />
          </tr>
          <tr>
            <td width={2} height={38} align="left" valign="bottom">
              &nbsp;
            </td>
            <td width={12} align="left" valign="bottom" />
            <td
              colSpan={2}
              align="center"
              valign="middle"
              style={{ paddingLeft: "9px" }}
            >
              &nbsp;
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                defaultValue={1}
              />
              <span className="style96" style={{ paddingLeft: "5px" }}>
                Remember Email
              </span>
            </td>
          </tr>
          <tr>
            <td width={2} height={59} align="left" valign="bottom">
              &nbsp;
            </td>
            <td width={12} align="left" valign="bottom">
              &nbsp;
            </td>

            <div className=" d-flex align-items-center justify-content-center"> 
              {" "}
              <img
                src={LoginIm}
                alt="login"
                width={103}
                height={32}
                border={0}
              />
              <span style={{marginLeft:"50px",fontSize:"18px"}}>Cancel</span>
            </div>
          </tr>
          <tr>
            <td width={2} height={57} align="left" valign="bottom">
              &nbsp;
            </td>
            <td width={12} align="left" valign="bottom">
              &nbsp;
            </td>
            <td colSpan={2} align="center">
              <Link style={{ color: "black" }} to="/forgot-password">
                Change or Forgot Password?
              </Link>
            </td>
            <td align="right" />
          </tr>
          <tr>
            <td />
            <td valign="bottom">&nbsp;</td>
          </tr>
        </Container>
      </div>
    </div>
  );
}

export default Login;
