import React from "react";
import { Logo } from "../../Assets";
import "./aggremnet.css";

const Aggrement = () => {
  return (
    <>
      <div>
        <div id="Layer5" />
        <center>
          <table
            width={839}
            height={553}
            border={0}
            cellPadding={0}
            cellSpacing={0}
          >
            <tbody>
              <tr>
                <td width={839} colSpan={4} align="left" valign="top">
                  <table
                    width={836}
                    height={529}
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                  >
                    <tbody>
                      <tr>
                        <td width={32} height={72}>
                          &nbsp;
                        </td>
                        <td width={40}>&nbsp;</td>
                        <td width={641}>&nbsp;</td>
                        <td width={67}>&nbsp;</td>
                        <td width={56}>&nbsp;</td>
                      </tr>
                      <tr>
                        <td height={178}>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td align="center">
                          <a href="index.php">
                            <img src={Logo} alt="logo" width={254} height={84} />
                          </a>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td height={43}>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td height={175} bgcolor="#F0F0F0" />
                        <td
                          height={175}
                          colSpan={4}
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
                          <span className="style97">SITE AGREEMENT</span>
                          <br />
                          <br />
                          This Site is intended for Rehabilitation Professionals
                          such as Physical Therapists, Occupational Therapists,
                          PTA's, COTA's, Athletic Trainers, Chiropractors,
                          Orthopedic Doctors, Sports Doctors and more.
                          <p />
                          <p>
                            Please seek additional Medical advice before
                            attempting any exercises or instructions on this
                            site. HEP2go.com is not responsible for any outcomes
                            of using this site.{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height={144}
                          rowSpan={3}
                          align="center"
                          valign="bottom"
                          bgcolor="#F0F0F0"
                        >
                          <span className="style89" />
                        </td>
                        <td
                          height={14}
                          colSpan={2}
                          align="left"
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
                          <label />
                        </td>
                        <td colSpan={2} valign="bottom" bgcolor="#F0F0F0" />
                      </tr>
                      <tr>
                        <td
                          height={21}
                          colSpan={2}
                          align="right"
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
                          <form name="form1">
                            <label>
                              <input
                                name="accept"
                                type="radio"
                                defaultValue="false"
                              />
                            </label>
                            <span className="style92">
                              I Do <u>NOT</u> Agree
                              <label>
                                &nbsp;&nbsp;
                                <input
                                  name="accept"
                                  type="radio"
                                  defaultValue="true"
                                />
                              </label>
                              I Agree
                            </span>
                            &nbsp;&nbsp;
                          </form>
                        </td>
                        <td
                          colSpan={2}
                          align="center"
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
                          
                            ENTER
                          
                        </td>
                      </tr>
                      <tr>
                        <td
                          height={20}
                          colSpan={2}
                          align="center"
                          valign="middle"
                          bgcolor="#F0F0F0"
                        >
                          &nbsp;
                        </td>
                        <td valign="middle" bgcolor="#F0F0F0">
                          &nbsp;
                        </td>
                        <td bgcolor="#F0F0F0">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
};

export default Aggrement;
