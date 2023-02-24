import React from "react";
import './signUp.css'
import { LOgo ,FreePlan,ProBadge,ProPlan,GreyTick,OrangeTick,LogoChange,HideMode,} from "../../Assets";
function SignUp() {
  return (
    <div>
      <center>
        <div id="player1" className="player">
          <video width={400} className="center" controls autoPlay>
            <source
              src="https://www.hep2go.com/video_samples/mobile-web-viewer-sample.mov"
              type="video/mp4"
            />
          </video>
        </div>
        <div id="player2" className="player">
          <video width={1100} className="center" controls autoPlay>
            <source
              src="https://www.hep2go.com/video_samples/copy-text-sample-A.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div id="player3" className="player">
          <video width={1100} className="center" controls autoPlay>
            <source
              src="https://www.hep2go.com/video_samples/GT-A.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div id="player4" className="player">
          <video width={1100} className="center" controls autoPlay>
            <source
              src="https://www.hep2go.com/video_samples/apply-A.mp4"
              type="video/mp4"
            />
          </video>
        </div>
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
                                <a href="../index_b.php?userRef=gciaake">
                                  <img
                                    src={LOgo}
                                    width={257}
                                    height={85}
                                    border={0}
                                  />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td
                                height={44}
                                colSpan={2}
                                bgcolor="#F6F6F6"
                                className="text12 white"
                              >
                                &nbsp;&nbsp;&nbsp;
                                <a href="index_b.php" />
                                &nbsp;&nbsp;&nbsp;
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
                                          src="images/blue-line.jpg"
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
                                        <img src="images/Vdots.jpg" alt="" />
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
                                        <img src={ProBadge} />
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
                                                  <a href="index_new_member_form.php">
                                                    <img
                                                      src={FreePlan}
                                                      width={159}
                                                      height={41}
                                                      border={0}
                                                    />
                                                  </a>
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
                                                  <a
                                                    href="index_new_member_form_pro.php?userRef=gciaake"
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
                                                  </a>
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
                                        <img src="images/Hline.jpg" alt="" />
                                      </td>
                                      <td colSpan={2} align="center">
                                        <img src="images/Hline.jpg" alt="" />
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
                                    <tr
                                    style={{backgroundColor:"gray"}}
                                    >
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
                                        <img src={ProBadge} />
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
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td bgcolor="#FFF" />
                                      <td align="center" bgcolor="#FFF">
                                        <img
                                          src={OrangeTick}
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
                                          width={40}
                                          height={40}
                                        />
                                      </td>
                                      <td bgcolor="#FFFFFF" />
                                      <td align="center" bgcolor="#FFFFFF">
                                        <img
                                          src={OrangeTick}
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
                                          <a href="details-share.php"></a>
                                          <a href="details-share.php?userRef=gciaake">
                                            <left>
                                              <b>Details</b>
                                            </left>
                                          </a>
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
                                            src="images/print-card-images/apply_below.png"
                                            width={23}
                                            height={30}
                                          />
                                          &nbsp;will copy the sets, reps,
                                          duration, frequency and all values set
                                          on one exercise to all exercise items
                                          below it while on the Exercise Editor
                                          Page. This dramatically increases the
                                          speed of creating HEPs. &nbsp;
                                          <a
                                            href="javascript:void(0)"
                                            onclick="playMobileExample(4)"
                                          >
                                            <br />
                                            <b>Watch Video</b>
                                          </a>
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
                                          <a
                                            href="javascript:void(0)"
                                            onclick="playMobileExample(3)"
                                          >
                                            <br />
                                            <b>Watch Video</b>
                                          </a>
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
                                          <a
                                            href="javascript:void(0)"
                                            onclick="playMobileExample(1)"
                                          >
                                            {" "}
                                            <br />
                                            <b>Watch Video</b>
                                          </a>
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
                                          <a href="index_new_member_form.php">
                                            <img
                                              src="images/free-plan.jpg"
                                              width={159}
                                              height={41}
                                              border={0}
                                            />
                                          </a>
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
                                          <a
                                            href="index_new_member_form_pro.php"
                                            className="style90"
                                          >
                                            <img
                                              src="images/pro-plan.jpg"
                                              alt="Sign Up for a single Pro membership"
                                              width={159}
                                              height={41}
                                              border={0}
                                            />
                                          </a>
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
                                              <a href="log-in-2.php?userRef=gciaake">
                                                <strong>log in</strong>
                                              </a>{" "}
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
                                                <a href="pro-staff.php?userRef=gciaake">
                                                  <strong>Learn More</strong>
                                                </a>
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
                                              <a href="multiple_accounts_1.php?userRef=gciaake">
                                                <img
                                                  src="images/upgrade_pro_others.jpg"
                                                  alt=""
                                                  border={0}
                                                />
                                              </a>
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
                                                <a
                                                  href="javascript: history.back(1);"
                                                  title="Go Back To Previous Page"
                                                  className="link18"
                                                  style={{ color: "#00B9FF" }}
                                                >
                                                  <u>Back To Previous Page</u>
                                                </a>
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
        <div>
        <div id="proHideDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('Hide')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text22 bold black" style={{paddingTop: '20px', paddingLeft: '30px'}}>
                      Hide Mode</td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 grey" style={{paddingTop: '5px', paddingLeft: '30px', paddingRight: '30px'}}>
                      Select exercises to toggle them as "hidden" or "shown" from the browsing pages. When your finished, click the "DONE" button.
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proExsDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('Exs')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text22 bold black" style={{paddingTop: '30px', paddingLeft: '30px'}}>
                      Hide Mode</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text18 grey" style={{paddingTop: '5px', paddingLeft: '30px', paddingRight: '30px'}}>
                      Select any exercises and hide them from the category pages for a faster browsing experience<br /><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://www.hep2go.com/images/hide-mode-small-2.png" border={0} />
                    </td>
                  </tr>
                </tbody></table>
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center" valign="top" className="text22 bold black" style={{paddingTop: '20px', paddingLeft: '10px', paddingBottom: '10px'}}>
                      Pro Membership Required
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <a href="/register_options.php?userRef=gciaake"><img src="https://www.hep2go.com/images/get_pro.png" border={0} /></a>
                    </td>
                  </tr>
                </tbody></table>
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingBottom: '10px', paddingTop: '0px', paddingLeft: '10px'}}><br />
                      <br />
                      Already a PRO member? <a href="/log-in-2.php" className="link16 bold black">Sign In</a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proRoutinesDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('Routines')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text22 bold black" style={{paddingTop: '20px', paddingLeft: '10px'}}>
                      You already have 2 saved routines
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 grey" style={{paddingTop: '10px'}}>
                      Get PRO for Saving Unlimited Routines
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style={{paddingTop: '5px', paddingLeft: '10px'}}>
                      <a href="/register_options.php?userRef=gciaake"><img src="https://www.hep2go.com/images/get_pro.png" border={0} /></a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingTop: '20px', paddingLeft: '10px'}}>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proShareDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('Share')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text22 bold black" style={{paddingTop: '20px', paddingLeft: '30px'}}>
                      Share Your Saved Routines
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingTop: '5px', paddingLeft: '30px'}}>
                      Allow only specific members access to your saved routines. 
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingLeft: '10px'}}>
                      Sign Up for HEP2go PRO
                    </td>
                  </tr>
                  <tr>
                  </tr><tr>
                    <td align="center" valign="top" style={{paddingTop: '5px'}}>
                      <a href="/register_options.php?userRef=gciaake"><img src="https://www.hep2go.com/images/get_pro.png" border={0} /></a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingTop: '20px', paddingLeft: '10px'}}>
                      Already a PRO member? <a href="/log-in-2.php" className="link14 bold grey">Sign In</a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proShareExsDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('ShareExs')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text22 bold black" style={{paddingTop: '20px', paddingLeft: '10px'}}>
                      Share Your Private Exercises
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingTop: '5px'}}>
                      Allow only specific members access to your private exercises.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingLeft: '10px'}}>
                      Sign Up for HEP2go PRO
                    </td>
                  </tr>
                  <tr>
                  </tr><tr>
                    <td align="center" valign="top" style={{paddingTop: '5px'}}>
                      <a href="/register_options.php?userRef=gciaake"><img src="https://www.hep2go.com/images/get_pro.png" border={0} /></a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingTop: '20px', paddingLeft: '10px'}}>
                      Already a PRO member? <a href="/log-in-2.php" className="link14 bold grey">Sign In</a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proCustomizeDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('Customize')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text22 bold black" style={{paddingTop: '30px', paddingLeft: '23px'}}>
                      Logo and color theme</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text18 grey" style={{paddingTop: '5px', paddingLeft: '23px', paddingRight: '20px'}}>
                      Customize logo and theme color on HEPs for print, e-mail, Text, or QR Delivery.<br /><br />
                      <img src="https://www.hep2go.com/images/change-logo-small-2.png" />
                    </td>
                  </tr>
                </tbody></table>
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center" valign="top" className="text22 bold black" style={{paddingTop: '20px', paddingLeft: '10px'}}>
                      Pro Membership Required
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style={{paddingTop: '5px'}}>
                      <a href="/register_options.php?userRef=gciaake"><img src="https://www.hep2go.com/images/get_pro.png" border={0} /></a>
                    </td>
                  </tr>
                </tbody></table>
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingBottom: '10px', paddingLeft: '10px'}}><br />
                      Already a PRO member? <a href="/log-in-2.php" className="link16 bold black">Sign In</a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proLoginDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('Login')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center" style={{paddingLeft: '10px'}}><img src="https://www.hep2go.com/images/popup_2_logo.gif" />&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text18 black" style={{paddingTop: '20px', paddingLeft: '20px', paddingRight: '15px'}}>
                      Print home exercise programs for <strong>FREE</strong>.&nbsp; Please log in or sign up to use this feature.<br /><br />
                      <br />
                      <center><button type="button" onclick="goFullLogin();" style={{backgroundColor: '#00b9ff', color: '#fff', fontSize: '16px', height: '40px', border: '0px', width: '150px'}}>LOGIN</button></center>
                      <br />
                    </td>
                  </tr>
                </tbody></table>
              {/*
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="75" align="left" valign="middle" class="text14 bold grey" style="padding-top: 20px; padding-left: 80px;">
Email:
</td>
<td align="left" valign="middle" style="padding-top: 20px; padding-left: 10px;">
<input id="f_email" name="f_email" type="text" style="width: 150px;" onkeypress="proKeypress(event)" />
</td>
<td align="left" valign="bottom" style="padding-left: 5px;"><div id="proUsersImgDiv"><a href="javascript: proShowUsers();"><img src="https://www.hep2go.com/images/arrow_down2.gif" alt="Remembered Email List" width="20" border="0" /></a></div></td>
</tr>
<tr>
<td align="left" valign="middle" class="text14 bold grey" style="padding-top: 10px; padding-left: 80px;">
Password:
</td>
<td align="left" valign="middle" style="padding-top: 10px; padding-left: 10px;">
<input id="f_pass" name="f_pass" type="password" style="width: 150px;" onkeypress="proKeypress(event)" />
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td align="left" valign="middle" style="padding-left: 9px; padding-top: 10px;"><input id="f_remember_me" name="f_remember_me" type="checkbox" value="1" /><span class="style96" style="padding-left: 5px;">Remember Email</span></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td align="left" valign="middle" style="padding-top: 10px; padding-left: 10px;">
<input name="" type="button" value="Login" onclick="goProLogin()" />
</td>
<td>&nbsp;</td>
</tr>
</table>

*/}
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center" valign="top" className="text14 grey" style={{paddingTop: '20px'}}><br />
                      Not a Member? <a href="/register_options.php?userRef=gciaake" className="link14 bold grey">Sign Up</a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proExsHideDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('ExsHide')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td style={{paddingLeft: '20px'}}><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
                      You are in "Hide Mode", toggle exercises as "shown" or "hidden" by clicking on an exercise image.
                    </td>
                  </tr>
                  <tr>
                    <td align="right" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingLeft: '30px', paddingRight: '20px'}}>
                      <input name type="button" defaultValue="OK" onclick="closePro('ExsHide')" style={{width: '60px'}} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proPayPalRedirectDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('PayPalRedirect')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/logo_secure.jpg" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text20 bold black" style={{paddingTop: '30px'}}>
                      Pay by Credit Card, Debit Card<br />
                      OR with a paypal account
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style={{paddingTop: '20px'}}>
                      <img src="https://www.hep2go.com/images/credit_cards.jpg" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text16 black" style={{paddingTop: '20px'}}>
                      You will now be redirected to<br />
                      PayPal"s Secure Payment<br />
                      Process..
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style={{paddingTop: '30px'}}>
                      <input id="paypalOKBtn" name="paypalOKBtn" type="button" defaultValue="OK" onclick="window.location.href='../multiple_accounts_0.php?userRef=gciaake&period=monthly'" style={{width: '60px'}} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proPayPalRedirectYearDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('PayPalRedirectYear')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/logo_secure.jpg" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text20 bold black" style={{paddingTop: '30px'}}>
                      Pay by Credit Card, Debit Card<br />
                      OR with a paypal account
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style={{paddingTop: '20px'}}>
                      <img src="https://www.hep2go.com/images/credit_cards.jpg" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text16 black" style={{paddingTop: '20px'}}>
                      You will now be redirected to<br />
                      PayPal"s Secure Payment<br />
                      Process..
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style={{paddingTop: '30px'}}>
                      <input id="paypalOKBtn" name="paypalOKBtn" type="button" defaultValue="OK" onclick="window.location.href='../multiple_accounts_0.php?userRef=gciaake&period=annually'" style={{width: '60px'}} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proPayPalRedirectNameDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('PayPalRedirectName')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/logo_secure.jpg" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text20 bold black" style={{paddingTop: '30px'}}>
                      Pay by Credit Card, Debit Card<br />
                      OR with a paypal account
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style={{paddingTop: '20px'}}>
                      <img src="https://www.hep2go.com/images/credit_cards.jpg" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text16 black" style={{paddingTop: '20px'}}>
                      You will now be redirected to<br />
                      PayPal"s Secure Payment<br />
                      Process..
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style={{paddingTop: '30px'}}>
                      <input id="paypalOKBtn" name="paypalOKBtn" type="button" defaultValue="OK" onclick="window.location.href='http://www.hep2go.com/paypal/post.php?userRef=gciaake&kind=name'" style={{width: '60px'}} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proPayPalUpgradedDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('PayPalUpgraded')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text20 bold black" style={{paddingTop: '30px'}}>
                      You Have Signed Up for<br />
                      <span className="green">HEP2go PRO</span><br />
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text18 black" style={{paddingTop: '30px', paddingLeft: '10px', paddingRight: '10px'}}>
                      <span className="bold">Instructions:</span> Please refresh your browser after a few minutes. HEP2go Pro features are not activated until we receive payment confirmation.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" className="red" style={{paddingTop: '20px'}}>This may take a few minutes...
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style={{paddingTop: '30px'}}>
                      <input name type="button" defaultValue="OK" onclick="closePro('PayPalUpgraded')" style={{width: '60px'}} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proNewEmailDiv" className="proPopup1Background" style={{position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('NewEmail')" />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_1_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" className="text18 grey" style={{paddingTop: '5px', paddingLeft: '30px', paddingRight: '30px'}}><br />
                      You have attempted to change the email address associated with your account. An email has been sent to you at the new email address. <br />
                      <br />
                      Please confirm and activate the new email address with the link provided in the email we sent you. <br />
                      <br />
                      Please note... the password has not changed.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingRight: '10px'}}>
                      <input name type="button" defaultValue="OK" onclick="closePro('NewEmail')" style={{width: '60px'}} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proRoutineMaxNamesDiv" className="proPopup1Background" style={{width: '400px', position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('RoutineMaxNames')" style={{left: '352px'}} />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_2_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 grey" style={{paddingTop: '30px', paddingLeft: '20px', paddingRight: '20px'}}>
                      You currently have a Free membership. Only 2 routine names are available with a Free membership. You can still save this routine, but you cannot change its name.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingBottom: '10px'}}>
                      <a href="javascript: closePro('RoutineMaxNames');"><img src="https://www.hep2go.com/my_routines/images/btn_ok_free.gif" border={0} /></a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proRoutineSaveUnSharedExsDiv" className="proPopup1Background" style={{width: '400px', position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('RoutineRoutineSaveUnSharedExs')" style={{left: '352px'}} />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="center"><img src="https://www.hep2go.com/images/popup_2_logo.gif" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" className="text18 grey" style={{paddingTop: '30px', paddingLeft: '20px', paddingRight: '20px'}}>
                      You are trying to save a routine that has exercises that weren't shared to you. These exercises won't be visible in your routine.
                    </td>
                  </tr>
                </tbody></table>
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="right" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingBottom: '10px', paddingRight: '10px'}}>
                      <a href="javascript: closePro('RoutineSaveUnSharedExs');"><img src="https://www.hep2go.com/my_routines/images/btn_cancel_pro.gif" border={0} /></a>
                    </td>
                    <td align="left" valign="top" className="text18 bold black" style={{paddingTop: '30px', paddingBottom: '10px', paddingLeft: '10px'}}>
                      <a href="javascript: closePro('RoutineSaveUnSharedExs'); goSaveRoutine_1();"><img src="https://www.hep2go.com/my_routines/images/btn_save_pro.gif" border={0} /></a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proPayPalSelectMonthDiv" className="proPopup1Background" style={{width: '500px', position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('PayPalSelectMonth')" style={{left: '452px'}} />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="left" valign="top" className="text24 bold" style={{paddingLeft: '30px', paddingTop: '30px', paddingBottom: '5px'}}>
                      Choose a payment method
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style={{paddingLeft: '30px', paddingTop: '5px', paddingBottom: '30px'}}>
                      Do not change your payment method on the next screen
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="middle" style={{padding: '20px'}}>
                      <div id="f_cc" align="center" className="settingsButton buttonEnabled" style={{width: '275px', height: '35px', paddingTop: '15px'}} onclick="window.location.href='http://www.hep2go.com/multiple_accounts_0.php?userRef=gciaake&tender=c&period=monthly'">Credit Card or Bank Card</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="middle" style={{padding: '20px', paddingBottom: '90px'}}>
                      <div id="f_pp" align="center" className="settingsButton buttonEnabled" style={{width: '275px', height: '35px', paddingTop: '15px'}} onclick="window.location.href='http://www.hep2go.com/multiple_accounts_0.php?userRef=gciaake&tender=p&period=monthly'">PayPal Account</div>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proPayPalSelectYearDiv" className="proPopup1Background" style={{width: '500px', position: 'absolute', display: 'none', zIndex: 2001}}>
          <div className="proPopup1CloseDiv" onclick="closePro('PayPalSelectYear')" style={{left: '452px'}} />
          <div className="proPopup1BorderMiddle">
            <div className="proPopup1BorderInner">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td align="left" valign="top" className="text24 bold" style={{paddingLeft: '30px', paddingTop: '30px', paddingBottom: '50px'}}>
                      Choose a payment method
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="middle" style={{padding: '20px'}}>
                      <div id="f_cc_y" align="center" className="settingsButton buttonEnabled" style={{width: '275px', height: '35px', paddingTop: '15px'}} onclick="window.location.href='http://www.hep2go.com/multiple_accounts_0.php?userRef=gciaake&tender=c&period=annually'">Credit Card or Bank Card</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="middle" style={{padding: '20px', paddingBottom: '90px'}}>
                      <div id="f_pp_y" align="center" className="settingsButton buttonEnabled" style={{width: '275px', height: '35px', paddingTop: '15px'}} onclick="window.location.href='http://www.hep2go.com/multiple_accounts_0.php?userRef=gciaake&tender=p&period=annually'">PayPal Account</div>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div id="proUsersDiv" />
      </div>
      </center>
    </div>

  );
}

export default SignUp;
