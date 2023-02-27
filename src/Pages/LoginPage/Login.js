import React from "react";
import { Link } from "react-router-dom";
import { LoginIm, Signup, Logo } from "../.././Assets";

function Login() {
  return (
    <div>
      <center>
        <table
          width={957}
          height={707}
          border={0}
          cellPadding={0}
          cellSpacing={0}
        >
          <tbody>
            <tr>
              <td
                width={957}
                height={707}
                colSpan={4}
                align="left"
                valign="top"
              >
                <form
                  id="form1"
                  name="form_login"
                  method="post"
                >
                  <table
                    width={908}
                    height={596}
                    border={0}
                    cellPadding={2}
                    cellSpacing={0}
                  >
                    <tbody>
                      <tr>
                        <td height={5} colSpan={5} />
                        <td width={380} />
                        <td width={15} />
                      </tr>
                      <tr>
                        <td height={6} colSpan={5} />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td height={7} colSpan={5} />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        {/*td height="281" rowspan="11">&nbsp;</td*/}
                        <td
                          height={251}
                          colSpan={2}
                          rowSpan={3}
                          align="left"
                          valign="top"
                        />
                        <td
                          height={224}
                          colSpan={3}
                          align="left"
                          valign="middle"
                        >
                          <img
                            src={Logo}
                            alt="hpe2go"
                            width={260}
                            height={86}
                            border={0}
                          />
                        </td>
                        <td height={224} align="left" valign="top">
                          &nbsp;
                        </td>
                        <td rowSpan={3}>&nbsp;</td>
                      </tr>
                      <tr>
                        <td
                          height={42}
                          colSpan={2}
                          align="left"
                          valign="middle"
                          bgcolor="#333333"
                          style={{ color: "white" }}
                          className="style99"
                        >
                          &nbsp; SIGN IN TO HEP2go{" "}
                        </td>
                        <td width={23}>&nbsp;</td>
                        <td bgcolor="#333333" style={{ color: "white" }}>
                          &nbsp;&nbsp;
                          <span className="style99">NEED AN ACCOUNT ?</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height={64}
                          colSpan={2}
                          align="left"
                          valign="bottom"
                          bgcolor="#F0F0F0"
                        >
                          <table
                            width={336}
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                          >
                            <tbody>
                              <tr>
                                <td
                                  width={268}
                                  height={39}
                                  align="left"
                                  valign="top"
                                >
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
                        <td>&nbsp;</td>
                        <td align="center" valign="middle" bgcolor="#F0F0F0">
                          <span className="style96">
                            FREE and PRO Membership
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td width={2} height={58} align="right" valign="top">
                          &nbsp;
                        </td>
                        <td width={12} align="left" valign="top" />
                        <td
                          height={58}
                          colSpan={2}
                          align="left"
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
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
                        <td
                          rowSpan={2}
                          align="center"
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
                          <table width={114} height={34} border={0}>
                            <tbody>
                              <tr>
                                <td
                                  width={152}
                                  align="center"
                                  valign="middle"
                                  bgcolor="#00B9FF"
                                >
                                    <img
                                      src={Signup}
                                      alt="sign up"
                                      width={103}
                                      height={32}
                                      border={0}
                                    />
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
                          align="left"
                          valign="middle"
                          bgcolor="#F0F0F0"
                          style={{ paddingLeft: "9px" }}
                        >
                          &nbsp;
                          <input
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            defaultValue={1}
                          />
                          <span
                            className="style96"
                            style={{ paddingLeft: "5px" }}
                          >
                            Remember Email
                          </span>
                        </td>
                        <td width={9}>&nbsp;</td>
                        <td width={24}>&nbsp;</td>
                      </tr>
                      <tr>
                        <td width={2} height={59} align="left" valign="bottom">
                          &nbsp;
                        </td>
                        <td width={12} align="left" valign="bottom">
                          &nbsp;
                        </td>
                        <td
                          width={181}
                          height={59}
                          align="left"
                          valign="middle"
                        >
                          <table width={144} height={35} border={0}>
                            <tbody>
                              <tr>
                                <td width={134}>
                                  <div align="center">
                                      <img
                                        src={LoginIm}
                                        alt="login"
                                        width={103}
                                        height={32}
                                        border={0}
                                      />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          width={226}
                          height={59}
                          align="left"
                          valign="middle"
                        >
                          
                            Cancel
                        
                        </td>
                      </tr>
                      <tr>
                        <td width={2} height={57} align="left" valign="bottom">
                          &nbsp;
                        </td>
                        <td width={12} align="left" valign="bottom">
                          &nbsp;
                        </td>
                        <td colSpan={2} align="center">
                          <Link style={{color:'black'}} to="/forgot-password">
                            Change or Forgot Password?
                          </Link>
                        </td>
                        <td align="right" />
                      </tr>
                      <tr>
                        <td />
                        <td valign="bottom">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Login;
