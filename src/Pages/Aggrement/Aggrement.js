import React from "react";
import { Logo } from "../../Assets";
import "./aggremnet.css";
import { Container } from "@mui/material";

import { Link } from "react-router-dom";
const Aggrement = () => {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div>
        <Container maxWidth="xl" style={{width:"100%"}} >
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
              <Link to="/index-home">
                <img alt="logo" src={Logo} width={254} height={84} />
              </Link>
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
            <td height={175} colSpan={4} valign="middle" bgcolor="#F0F0F0">
              <span className="style97">SITE AGREEMENT</span>
              <br />
              <br />
              This Site is intended for Rehabilitation Professionals such as
              Physical Therapists, Occupational Therapists, PTA's, COTA's,
              Athletic Trainers, Chiropractors, Orthopedic Doctors, Sports
              Doctors and more.
              <p />
              <p>
                Please seek additional Medical advice before attempting any
                exercises or instructions on this site. HEP2go.com is not
                responsible for any outcomes of using this site.{" "}
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
                  <input name="accept" type="radio" defaultValue="false" />
                </label>
                <span className="style92">
                  I Do <u>NOT</u> Agree
                  <label>
                    &nbsp;&nbsp;
                    <input name="accept" type="radio" defaultValue="true" />
                  </label>
                  I Agree
                </span>
                &nbsp;&nbsp;
              </form>
            </td>
            <td colSpan={2} align="center" valign="middle" bgcolor="#F0F0F0">
              <Link to="/index-home" className="style95">
                ENTER
              </Link>
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
        </Container>
      </div>
      </div>
    </>
  );
};

export default Aggrement;
