import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import {
  Logo,
  FreePlan,
  ProBadge,
  ProPlan,
  GreyTick,
  UpgradePro,
  OrangeTick,
  LogoChange,
  HideMode,
  blueline,
  Vdots,
  applybelow,
  Hline,
} from "../../Assets";
function SignUp() {
  return (
    <div className="container-xxl">
      <center>
        
        <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              <td align="center" valign="top">
                {/* Background Cell */}
                <table width={1260} border={0} cellSpacing={0} cellPadding={50}>
                  <tbody>
                    <tr>
                      <td width={1160} height={2597} align="left" valign="top">
                        {/* Main Cell */}
                        &nbsp;&nbsp;
                        <table
                          width="85%"
                          border={0}
                          cellSpacing={0}
                          cellPadding={0}
                        >
                          {/* Main Table */}
                          <tbody>
                            <tr>
                              <td
                                height={18}
                                colSpan={2}
                                align="center"
                                bgcolor="#F6F6F6"
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/index-home">
                                  <img
                                    src={Logo}
                                    alt="logo"
                                    width={257}
                                    height={85}
                                    border={0}
                                  />{" "}
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={200}
                                colSpan={2}
                                align="center"
                                valign="middle"
                                bgcolor="#F6F6F6"
                                className="text36"
                              >
                                <strong>Membership Plans</strong>
                                <p className="text18">
                                  Plans are per person. Discounts are applied to
                                  multiple member upgrades.
                                  <br />
                                  See <b>Group Plans</b> at bottom of the page
                                  for multiple member sign up and group rates.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={13}
                                colSpan={2}
                                align="left"
                                valign="top"
                                bgcolor="#F6F6F6"
                              />
                            </tr>
                            <tr>
                              <td
                                height={702}
                                colSpan={2}
                                align="left"
                                valign="top"
                                bgcolor="#FFFFFF"
                              >
                                <table width={1080} border={0}>
                                  <tbody>
                                    <tr>
                                      <td colSpan={5} valign="top">
                                        <img
                                          src={blueline}
                                          width={1083}
                                          height={4}
                                          alt=""
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={50} colSpan={2}>
                                        &nbsp;
                                      </td>
                                      <td width={21} rowSpan={32}>
                                        <br />
                                        <br />
                                        <img src={Vdots} alt="" />
                                      </td>
                                      <td colSpan={2}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={42}
                                        colSpan={2}
                                        align="center"
                                        className="text26"
                                      >
                                        <strong>Free</strong>
                                      </td>
                                      <td
                                        colSpan={2}
                                        align="center"
                                        className="text30"
                                      >
                                        <img src={ProBadge} alt="pro badge" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={52}
                                        colSpan={2}
                                        align="center"
                                        className="text26"
                                      >
                                        <strong>$0.00</strong>
                                      </td>
                                      <td
                                        colSpan={2}
                                        align="center"
                                        className="text26"
                                      >
                                        <strong>$4.95/mo</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        colSpan={2}
                                        align="center"
                                        className="black"
                                      >
                                        Single member
                                      </td>
                                      <td
                                        colSpan={2}
                                        align="center"
                                        className="black"
                                      >
                                        Single member Pro subscription
                                        $4.95/month or $49.95/year
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} align="center">
                                        {" "}
                                        <table width={300} border={0}>
                                          <tbody>
                                            <tr>
                                              <td width={294} height={26}>
                                                <div align="center">
                                                  <Link to="/new-member-form-free">
                                                    <img
                                                      src={FreePlan}
                                                      alt="free plan"
                                                      width={159}
                                                      height={41}
                                                      border={0}
                                                    />
                                                  </Link>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td height={89} valign="top">
                                                &nbsp;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <div align="center" />
                                        <div align="center"></div>
                                      </td>
                                      <td colSpan={2} align="center">
                                        {" "}
                                        <table width={300} border={0}>
                                          <tbody>
                                            <tr>
                                              <td width={294} height={26}>
                                                <div align="center">
                                                  <Link
                                                    to="/new-member-form-pro"
                                                    className="style90"
                                                  >
                                                    <br />
                                                    <img
                                                      src={ProPlan}
                                                      alt="Sign Up for a single Pro membership"
                                                      width={159}
                                                      height={41}
                                                      border={0}
                                                    />
                                                  </Link>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td height={89} valign="top">
                                                <div
                                                  align="center"
                                                  style={{
                                                    color: "#00b9ff",
                                                    fontSize: "18px",
                                                  }}
                                                >
                                                  <p className="darkGrey">
                                                    <br />
                                                    <br />
                                                    <span className="lightgrey grey style2">
                                                      <span className="lightgrey grey">
                                                        Want to Upgrade an
                                                        existing account or
                                                        upgrade Other Members?
                                                        Please{" "}
                                                      </span>
                                                    </span>
                                                    <span className="grey style2">
                                                      <span className="grey">
                                                        <a
                                                          href="https://www.hep2go.com/log-in-2.php?"
                                                          className="orange"
                                                        >
                                                          Log in
                                                        </a>
                                                      </span>
                                                    </span>
                                                    <span className="lightgrey grey style2">
                                                      <span className="lightgrey grey">
                                                        {" "}
                                                        First
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <div align="center" />
                                        <div align="center"></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} align="center" />
                                      <td colSpan={2} align="center" />
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        align="center"
                                      >
                                        <img src={Hline} alt="" />
                                      </td>
                                      <td colSpan={2} align="center">
                                        <img src={Hline} alt="" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center">&nbsp;</td>
                                      <td align="left" className="black">
                                        <br />
                                        <strong>Free Features</strong>
                                        <br />
                                        <br />
                                      </td>
                                      <td align="center">&nbsp;</td>
                                      <td align="left">
                                        <span className="bold">
                                          <br />
                                        </span>
                                        <span className="black">
                                          <strong>Pro Features</strong>
                                        </span>
                                        <br />
                                        <br />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        width={66}
                                        height={48}
                                        valign="top"
                                        align="right"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        width={464}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Access to 1,000s of exercises and other
                                        educational content
                                      </td>
                                      <td
                                        width={55}
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        width={461}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Access to 1,000s of exercises and other
                                        educational content
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        width={66}
                                        height={46}
                                        valign="top"
                                        align="right"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        width={464}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        2 Saved routines
                                      </td>
                                      <td
                                        width={55}
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        width={461}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Unlimited saved routines
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={36}
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        height={45}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Print HEPs
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Print HEPs
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        height={45}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Printed HEPs to show a QR Code for
                                        patient scanning
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        height={40}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Email delivery of HEPs
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        SMS text delivery HEPs
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        height={45}
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        QR code delivery of HEPs via screen
                                        display
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        valign="top"
                                        colSpan={2}
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Company logo branding
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Hide Mode enabled - Hide exercises you
                                        don't need
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Share Private Exercises and Routines
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        "Apply To All Below" enabled
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Fully integrated Google Translate for
                                        HEPs
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={51}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        valign="top"
                                        align="right"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        "Copy Text" - Copy the exercise titles
                                        and values of the current HEP to
                                        clipboard
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        Mobile web viewer for HEP recipients
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        height={45}
                                        colSpan={2}
                                        valign="top"
                                        align="center"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="right"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        •{" "}
                                      </td>
                                      <td
                                        align="left"
                                        valign="top"
                                        className="darkGrey"
                                      >
                                        "Sketch Pro" tool enabled
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td height={44} colSpan={2} />
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                align="left"
                                valign="top"
                                style={{ border: "0px solid #999999" }}
                              >
                                <table
                                  border={0}
                                  cellSpacing={0}
                                  cellPadding={8}
                                >
                                  <tbody>
                                    <tr style={{ backgroundColor: "gray" }}>
                                      <td width={0} bgcolor="#FFFFFF" />
                                      <td
                                        width={810}
                                        height={83}
                                        valign="bottom"
                                        bgcolor="#FFFFFF"
                                        className="text36"
                                      >
                                        Plan Details
                                      </td>
                                      <td
                                        width={24}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        width={63}
                                        align="center"
                                        valign="bottom"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        Free
                                      </td>
                                      <td
                                        width={0}
                                        valign="bottom"
                                        bgcolor="#FFFFFF"
                                      />
                                      <td
                                        width={77}
                                        align="center"
                                        valign="bottom"
                                        bgcolor="#FFFFFF"
                                        style={{
                                          color: "#00b9ff",
                                          fontSize: "28px",
                                        }}
                                      >
                                        <img src={ProBadge} alt="badge" />
                                      </td>
                                      <td
                                        width={3}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text14 bold white"
                                      />
                                    </tr>
                                    <tr>
                                      <td height={91} className="backWhite" />
                                      <td height={120} bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Access to All Content</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Build HEPs from 1,000's of therapeutic
                                          exercises
                                        </span>
                                        .
                                      </td>
                                      <td
                                        height={91}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        height={91}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      >
                                        <img
                                          src={GreyTick}
                                          alt="grey tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td height={91} bgcolor="#FFFFFF" />
                                      <td
                                        height={91}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      >
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td
                                        height={91}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      />
                                    </tr>
                                    <tr>
                                      <td className="backWhite" />
                                      <td height={120} bgcolor="#FFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Create Custom Exercises</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Create new exercises with custom
                                          title, description, sets, reps,
                                          frequency, etc. Set as public or
                                          private.{" "}
                                        </span>
                                      </td>
                                      <td align="center" bgcolor="#FFF">
                                        &nbsp;
                                      </td>
                                      <td align="center" bgcolor="#FFF">
                                        <img
                                          src={GreyTick}
                                          alt="grey tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td bgcolor="#FFF" />
                                      <td align="center" bgcolor="#FFF">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF" />
                                    </tr>
                                    <tr>
                                      <td className="backWhite" />
                                      <td height={120} bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Print HEPs to printer</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          {" "}
                                          Create custom HEP as printed handout
                                          to send to your printer or save as a
                                          PDF.
                                        </span>
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF">
                                        &nbsp;
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF">
                                        <img
                                          src={GreyTick}
                                          alt="grey tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td bgcolor="#FFFFFF" />
                                      <td align="center" bgcolor="#FFFFFF">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td
                                        align="center"
                                        bordercolor="#FFFFFF"
                                        bgcolor="#ffffff"
                                      />
                                    </tr>
                                    <tr>
                                      <td className="backWhite" />
                                      <td height={144} bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>
                                            QR Code on prints for online access
                                          </b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          {" "}
                                          QR code on printed HEPs for
                                          patients/clients to scan and view
                                          their HEP online. Allows for video
                                          viewing and saving a PDF of the HEP.{" "}
                                        </span>
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF">
                                        &nbsp;
                                      </td>
                                      <td
                                        height={144}
                                        align="center"
                                        bgcolor="#FFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td bgcolor="#FFFFFF" />
                                      <td align="center" bgcolor="#FFFFFF">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td
                                        align="center"
                                        bordercolor="#FFFFFF"
                                        bgcolor="#ffffff"
                                      />
                                    </tr>
                                    <tr>
                                      <td className="backWhite" />
                                      <td height={135} bgcolor="#FFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Send HEPs via email</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          {" "}
                                          Deliver custom HEP via email. Set
                                          expiration of online access. Set an
                                          expiration date for online access.
                                        </span>
                                      </td>
                                      <td
                                        height={135}
                                        align="center"
                                        bgcolor="#FFF"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        height={135}
                                        align="center"
                                        bgcolor="#FFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td height={135} bgcolor="#FFF" />
                                      <td
                                        height={135}
                                        align="center"
                                        bgcolor="#FFF"
                                      >
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td
                                        height={135}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      />
                                    </tr>
                                    <tr>
                                      <td height={160} className="backWhite" />
                                      <td bgcolor="#FFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>SMS Delivery of HEPs</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Send HEPs using a phone number to a
                                          smart phone for easy, fast and
                                          reliable retrieval. Set expiration of
                                          online access. Set an expiration date
                                          for online access.{" "}
                                          <a href="https://www.hep2go.com/sms-instructions.php?userRef=gciaake">
                                            <br />
                                            <b>Details</b>
                                          </a>
                                        </span>
                                      </td>
                                      <td align="center" bgcolor="#FFF">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td bgcolor="#FFF" />
                                      <td align="center" bgcolor="#FFF">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF" />
                                    </tr>
                                    <tr>
                                      <td height={174} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>
                                            QR Code Delivery of HEPs on screen
                                            display
                                          </b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Deliver HEPs by displaying a QR code
                                          on your device screen. The QR code can
                                          be scanned by your patient/client
                                          while they are next to you or you can
                                          share your screen during
                                          telehealth/zoom online sessions.
                                        </span>
                                        <span className="text22">
                                          Set an expiration date for online
                                          access.
                                        </span>
                                        <a href="https://www.hep2go.com/sms-instructions.php?userRef=gciaake">
                                          <br />
                                          <b>Details</b>
                                        </a>
                                        <br />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="backWhite" />
                                      <td height={153} bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Save routines/protocols</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Create and save sets of exercises as a
                                          "routine" for common conditions for
                                          easy and fast deployment of HEPs.
                                        </span>
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        2<br />
                                        Routines
                                      </td>
                                      <td bgcolor="#FFFFFF" />
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Unlimited Routines
                                      </td>
                                      <td
                                        align="center"
                                        bordercolor="#FFFFFF"
                                        bgcolor="#ffffff"
                                      />
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                      <td height={410} bgcolor="#FFFFFF" />
                                      <td
                                        valign="middle"
                                        bgcolor="#FFFFFF"
                                        style={{
                                          borderBottom: "1px solid #e8e8e8",
                                        }}
                                      >
                                        <p>
                                          <span
                                            style={{
                                              fontSize: "24px",
                                              color: "#F2A911",
                                            }}
                                          >
                                            <b>Company Logo Branding</b>
                                            <br />
                                          </span>
                                          <span className="text22">
                                            Add your business logo and matching
                                            color on all HEPs.
                                          </span>
                                          <br />
                                          <img
                                            src={LogoChange}
                                            alt="logo"
                                            width={687}
                                            height={232}
                                          />
                                          <br />
                                          <a href="details-change-logo.php">
                                            {" "}
                                          </a>
                                        </p>
                                        <a href="details-change-logo.php?userRef=gciaake">
                                          <left>
                                            <b>Details</b>
                                          </left>
                                        </a>
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        style={{
                                          borderBottom: "1px solid #e8e8e8",
                                        }}
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        valign="top"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                        style={{
                                          borderBottom: "1px solid #e8e8e8",
                                        }}
                                      >
                                        <br />
                                        No
                                      </td>
                                      <td
                                        bgcolor="#FFFFFF"
                                        style={{
                                          borderBottom: "1px solid #e8e8e8",
                                        }}
                                      />
                                      <td
                                        align="center"
                                        valign="top"
                                        bgcolor="#FFFFFF"
                                        style={{
                                          borderBottom: "1px solid #e8e8e8",
                                        }}
                                      >
                                        <br />
                                        <br />
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" bgcolor="#FFFFFF">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={412} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Hide Mode</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Speed up browsing and building of HEPs
                                          by hiding specific exercises you do
                                          not want to see. You can set any
                                          exercise as "hidden" or
                                          "shown&amp;ququot; from the browsing
                                          pages to further customize your needs
                                          and make your browsing more efficient.
                                          &nbsp;&nbsp;
                                        </span>
                                        <br />
                                        <br />
                                        <img
                                          src={HideMode}
                                          alt="orange tick"
                                          width={641}
                                          height={194}
                                        />{" "}
                                        <a href="details-hide-2.php?userRef=gciaake">
                                          <br />
                                          <left>
                                            <b>Details</b>
                                          </left>
                                        </a>{" "}
                                        <br />{" "}
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        valign="top"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        <br />
                                        <br />
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td
                                        align="center"
                                        valign="top"
                                        className="options"
                                      >
                                        <br />
                                        <br />
                                        <br />
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={180} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <p>
                                          <span
                                            style={{
                                              fontSize: "24px",
                                              color: "#F2A911",
                                            }}
                                          >
                                            <b>
                                              Share Private Exercises and
                                              Routines
                                            </b>
                                            <br />
                                          </span>
                                          <span className="text22">
                                            Allow only employees, co-workers or
                                            colleagues to use private exercises
                                            and routines but keep content hidden
                                            from public use.{" "}
                                          </span>
                                          <br />
                                            <left>
                                              <b>Details</b>
                                            </left>
                                        </p>
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={199} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Copy Text</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Copies the routine name, exercise
                                          titles, sets, reps, frequency, hold
                                          time and the HEP online access code of
                                          the HEP to your clipboard so that you
                                          can quickly and easily paste it to
                                          your documentation system.{" "}
                                          <a href="faqs_copy-text.php?userRef=gciaake">
                                            <br />
                                            <b>Details</b>
                                          </a>
                                        </span>
                                        {/*<a href=javascript:void(0) onClick=playMobileExample(2)>Watch Video</a>*/}
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={201} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>Apply To All Below</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          The "Apply to all below" button
                                          <img
                                            src={applybelow}
                                            alt="orange tick"
                                            width={23}
                                            height={30}
                                          />
                                          &nbsp;will copy the sets, reps,
                                          duration, frequency and all values set
                                          on one exercise to all exercise items
                                          below it while on the Exercise Editor
                                          Page. This dramatically increases the
                                          speed of creating HEPs. &nbsp;
                                          
                                            <br />
                                            <b>Watch Video</b>
                                          
                                        </span>
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={162} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>
                                            Integrated Google Translate for HEPs
                                          </b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Change the text on the HEP from
                                          English one of 92 different languages
                                          using the power of a fully integrated
                                          Google Translate API feature with the
                                          click of a button. &nbsp;
                                          
                                            <br />
                                            <b>Watch Video</b>
                                          
                                        </span>
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={159} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>
                                            Mobile Web Viewer for HEP recipients
                                          </b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Recipients of online HEPs (Emailed,
                                          SMS texted, or QR Code deliveries) can
                                          use their smart phone for a user
                                          friendly smart phone layout using
                                          their phone's browser.{" "}
                                          
                                            {" "}
                                            <br />
                                            <b>Watch Video</b>
                                          
                                        </span>
                                        <br />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <tr>
                                      <td height={159} bgcolor="#FFFFFF" />
                                      <td valign="middle" bgcolor="#FFFFFF">
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            color: "#F2A911",
                                          }}
                                        >
                                          <b>"Sketch Pro" feature enabled</b>
                                        </span>
                                        <br />
                                        <span className="text22">
                                          Once exercises have been added to the
                                          "HEP Editor" page, you can use the
                                          Sketch Pro tool to convert all
                                          exercise images to illustrations and
                                          adjust the level of detail shown. This
                                          can help with reducing printer ink
                                          usage.{" "}
                                        </span>
                                        <br />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                      <td
                                        align="center"
                                        bgcolor="#FFFFFF"
                                        className="text22"
                                      >
                                        No
                                      </td>
                                      <td className="backWhite" />
                                      <td align="center" className="options">
                                        <img
                                          src={OrangeTick}
                                          alt="orange tick"
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td align="center" className="options">
                                        &nbsp;
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={123}
                                colSpan={2}
                                align="left"
                                valign="bottom"
                                bgcolor="#F6F6F6"
                                className="text36"
                              >
                                <p>
                                  <br />
                                  <br />
                                  <br />
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={107}
                                colSpan={2}
                                align="left"
                                valign="middle"
                                bgcolor="#FFFFFF"
                                className="text36"
                              >
                                &nbsp;&nbsp;&nbsp;Membership Types
                              </td>
                            </tr>
                            <tr>
                              <td
                                width="7%"
                                height={81}
                                align="right"
                                valign="middle"
                                bgcolor="#FFFFFF"
                                className="text36"
                              >
                                <p>
                                  &nbsp;&nbsp;&nbsp;
                                  <br />
                                </p>
                              </td>
                              <td
                                width="93%"
                                height={81}
                                align="left"
                                valign="middle"
                                bgcolor="#FFFFFF"
                                className="text28"
                              >
                                Single Member Plan
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={170}
                                colSpan={2}
                                align="left"
                                valign="top"
                                bgcolor="#FFFFFF"
                              >
                                {" "}
                                <table
                                  width="100%"
                                  border={0}
                                  cellSpacing={0}
                                  cellPadding={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width={83}
                                        height={150}
                                        align="center"
                                        bgcolor="#FFFFFF"
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        width={265}
                                        align="left"
                                        valign="top"
                                        bgcolor="#FFFFFF"
                                      >
                                        <div align="left">
                                          <Link to="/new-member-form-free">
                                            <img
                                              src={FreePlan}
                                              alt="free plan"
                                              width={159}
                                              height={41}
                                              border={0}
                                            />
                                          </Link>
                                          <br />
                                          <br />
                                          <span className="text20">
                                            Sign Up for a Single Member{" "}
                                          </span>
                                          <span className="groupClassOver">
                                            <strong>FREE</strong>
                                          </span>{" "}
                                          <span className="text20">Plan</span>{" "}
                                        </div>
                                      </td>
                                      <td width={98} bgcolor="#FFFFFF">
                                        &nbsp;
                                      </td>
                                      <td
                                        width={632}
                                        align="left"
                                        valign="top"
                                        bgcolor="#FFFFFF"
                                      >
                                        <div align="left">
                                          <Link
                                            className="style90"
                                            to="/new-member-form-pro"
                                          >
                                            <img
                                              src={ProPlan}
                                              alt="Sign Up for a single Pro membership"
                                              width={159}
                                              height={41}
                                              border={0}
                                            />
                                          </Link>
                                          <br />
                                          <br />
                                          <span className="text20">
                                            Sign Up for a Single Member{" "}
                                          </span>
                                          <span
                                            className="style80"
                                            style={{
                                              color: "#00b9ff",
                                              fontSize: "23px",
                                            }}
                                          >
                                            <strong>PRO</strong>
                                          </span>
                                          <span className="text20"> Plan </span>
                                          <span className="text16">
                                            {" "}
                                            <br />
                                            <em>
                                              4.95 /month subscription or
                                              <b>
                                                <font color="#00e100"> </font>
                                              </b>{" "}
                                              $49.95/year subscription
                                            </em>
                                          </span>
                                        </div>
                                        <div>
                                          <p>
                                            <br />
                                            <span className="text20">
                                              Want to upgrade your existing
                                              account. Please{" "}
                                                <strong>log in</strong>
                                              first
                                            </span>
                                          </p>
                                        </div>
                                      </td>
                                      <td width={11} bgcolor="#FFFFFF">
                                        &nbsp;
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={10}
                                colSpan={2}
                                align="left"
                                valign="bottom"
                                bgcolor="#FFFFFF"
                              >
                                &nbsp;
                                <div align="center">
                                  <table
                                    width={962}
                                    border={0}
                                    align="left"
                                    cellSpacing={0}
                                    cellPadding={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          height={76}
                                          align="right"
                                          valign="bottom"
                                          bgcolor="#FFFFFF"
                                          className="text36"
                                        >
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </td>
                                        <td
                                          height={76}
                                          align="left"
                                          valign="bottom"
                                          bgcolor="#FFFFFF"
                                          className="text28"
                                        >
                                          Group Plans
                                        </td>
                                        <td
                                          height={76}
                                          align="center"
                                          valign="bottom"
                                          className="text36"
                                        >
                                          &nbsp;
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          width={85}
                                          height={262}
                                          bgcolor="#FFFFFF"
                                        >
                                          &nbsp;
                                        </td>
                                        <td width={870} bgcolor="#FFFFFF">
                                          <div>
                                            <p>
                                              <span className="text20">
                                                <br />
                                                Group plans are designed for
                                                organizations that have more
                                                than one person that need to
                                                build HEPs. Group plans allow
                                                you to pay for and manage your
                                                staff. Staff members will have
                                                their own individual log in
                                                credentials and if they leave
                                                your organization, they can be
                                                removed. It also allows for
                                                individual custom exercise
                                                details to be saved to their
                                                specifications for creating HEPs
                                                fast and efficiently. As the
                                                administrator you will have the
                                                ability to invite and remove
                                                members throughout the year to
                                                manage staffing changes.{" "}
                                              </span>
                                            </p>
                                            <p>
                                              <span className="text20">
                                                To get started, be sure you are
                                                logged in with a single member
                                                Pro OR Free membership account
                                                (this will be your admin
                                                account) click the "Upgrade
                                                Others" button below to start a{" "}
                                                <strong>Group Plan</strong>.
                                                Also, have your staff sign up
                                                for a Free membership account OR
                                                you can use their existing Free
                                                member account. Collect the
                                                email addresses your staff uses
                                                to log in and you're ready to
                                                go.{" "}
                                              </span>
                                              <br />
                                              <br />
                                              <em>
                                                
                                                  <strong>Learn More</strong>
                                                
                                              </em>
                                            </p>
                                            <span className="text20" />
                                            <p />
                                          </div>
                                        </td>
                                        <td width={7}>&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td height={250} bgcolor="#FFFFFF">
                                          &nbsp;
                                        </td>
                                        <td
                                          width={870}
                                          align="left"
                                          valign="top"
                                          bgcolor="#FFFFFF"
                                        >
                                          <div align="left">
                                            <br />
                                            <span className="text20">
                                              Ready to set up a Group Plan? Be
                                              sure to log in first and then
                                              click the "Upgrade Others" button
                                              below
                                            </span>
                                            .<br />
                                            <p>
                                              <Link to="/upgrade-others">
                                                <img
                                                  src={UpgradePro}
                                                  alt=""
                                                  border={0}
                                                />
                                              </Link>
                                              <br />
                                              <br />
                                            </p>
                                            <p>&nbsp;</p>
                                            <span className="text20">
                                              <p>
                                                <em>
                                                  Having trouble or have
                                                  questions?{" "}
                                                  <a href="contact.php?userRef=gciaake">
                                                    <strong>Contact Us</strong>
                                                  </a>{" "}
                                                  so we can help you
                                                </em>
                                                <br />
                                                <br />
                                              </p>
                                              <p>
                                                <br />
                                                <br />
                                                  <u>Back To Previous Page</u>
                                                <br />
                                                <br />
                                              </p>
                                            </span>
                                          </div>
                                        </td>
                                        <td>&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                  </p>
                                  <p />
                                  <p>&nbsp;</p>
                                  <p>&nbsp;</p>
                                  <p>&nbsp;</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {/* End Main Table */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default SignUp;
