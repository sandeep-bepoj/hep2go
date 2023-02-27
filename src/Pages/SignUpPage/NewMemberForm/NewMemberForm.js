import React from 'react'
import { Logo } from '../../../Assets'
import './newmemberform.css'
import { useLocation } from 'react-router-dom';

function NewMemberForm() {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <div>
        <div id="Layer5" />
        <center>
          <table width={1024} height={536} border={0} bordercolor="orange" cellPadding={0} cellSpacing={0}>
            <tbody><tr>
                <td width={693} height={536} colSpan={4} align="left" valign="top">

                  <form name="form_membership" method="POST" >

                    <table width={1018} border={0} bordercolor="green" cellPadding={3} cellSpacing={0}>
                      <tbody><tr>
                          <td width={7} height={23}>&nbsp;</td>
                          <td width={469}>&nbsp;</td>
                          <td width={38}>&nbsp;</td>
                          <td width={460}>&nbsp;</td>
                          <td width={14}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={23}>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={106}>&nbsp;</td>
                          <td colSpan={3} valign="top"><img src={Logo} alt="logo" width={257} height={85} /></td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={281} rowSpan={10}>&nbsp;</td>
                          <td height={23} colSpan={3} valign="top"><br />        </td>
                          <td rowSpan={8}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={43} colSpan={3}><strong><span className="style96">{location.pathname ==="/new-member-form-pro"?"Pro":"Free"} Plan - Single User  - Please Fill Out the Form</span></strong><br /></td>
                        </tr>
                        <tr>
                          <td height={34} colSpan={3}>
                            <span className="style931">
                              <label>
                                <input type="text" name="firstname" defaultValue />
                              </label>
                              First Name *     </span></td>
                        </tr>
                        <tr>
                          <td height={4} colSpan={3} valign="top">
                            <span className="style931">
                              <label>
                                <input type="text" name="lastname" defaultValue />
                              </label>
                              Last Name, Title <span className="style95">&nbsp;<span className="style89">(Example: Smith, PT, CSCS)</span></span> *</span></td>
                        </tr>
                        
                        <tr>
                          <td height={28} colSpan={3}>
                            <span className="style931">
                              <label>
                                <input name="companyname" type="text" defaultValue />
                              </label>
                              Company Name</span></td>
                        </tr> 
                        <tr>
                        </tr><tr>
                          <td height={28} colSpan={3}>
                            <span className="style931">
                              <label>
                                <input name="experience" type="text" size={5} maxLength={2} defaultValue />
                              </label>
                              Years Experience</span></td>
                        </tr>
                        <tr>
                          <td height={37} colSpan={3}>
                            <span className="style931">
                              <label>
                                <select name="occupation">
                                  <option selected="selected">-----------------</option>
                                  <option>Clinic Owner</option>
                                  <option>Director of Rehab</option>
                                  <option>Rehab Manager</option>
                                  <option>Physical Therapist</option>
                                  <option>PTA</option>
                                  <option>PT Tech</option>
                                  <option>PT Student</option>
                                  <option>PTA Student</option>
                                  <option>Occupational Therapist</option>
                                  <option>COTA</option>
                                  <option>OT Student</option>
                                  <option>OTA Student</option>
                                  <option>OT Tech</option>
                                  <option>Kinesiologist</option>
                                  <option>Orthopedic Doctor</option>
                                  <option>Osteopathic Doctor</option>
                                  <option>Other MD</option>
                                  <option>Chiropractor</option>
                                  <option>Chiro Tech</option>
                                  <option>Chiro Student</option>
                                  <option>Speech Therapist</option>
                                  <option>Athletic Trainer</option>
                                  <option>Athletic Trainer Student</option>
                                  <option>University Professor</option>
                                  <option>Clinical Instructor</option>
                                  <option>Office Administrator</option>
                                  <option>Other. . .</option>
                                </select>
                              </label>
                              Occupation      </span></td>
                        </tr>
                        <tr>
                          <td height={34} colSpan={1}>
                            <span className="style931">
                              <label>
                                <input type="text" name="field" defaultValue />
                              </label>
                              Work Setting &nbsp;<span className="style89">(Ex. &nbsp;Out Patient, SNF, etc) </span></span></td>
                        </tr>
                        <tr>
                          <td height={28} colSpan={3} valign="bottom">
                            <span className="style931">
                              <label>
                                <input type="text" name="email" defaultValue />
                              </label>
                              Email Address       <span className="style89">(Email confirmation will be sent to activate)</span> *</span></td>
                        </tr>
                        <tr>
                          <td />
                          <td height={28} colSpan={3} valign="bottom">
                            <span className="style931">
                              <label>
                                <input type="text" name="email_r" />
                              </label>
                              Repeat Email *     </span></td>
                        </tr>
                        <tr>
                          <td />
                          <td height={28} colSpan={3} valign="bottom">
                            <span className="style931">
                              <label>
                                <input type="password" name="password" />
                              </label>
                              Create Password *     </span></td>
                        </tr>
                        <tr>
                          <td />
                          <td height={28} colSpan={3} valign="bottom">
                            <span className="style931">
                              <label>
                                <input type="password" name="password_confirm" />
                              </label>
                              Repeat Password *     </span></td>
                        </tr>
                        <tr>
                          <td />
                          <td height={48} colSpan={3} valign="bottom">
                            <div className="g-recaptcha" data-sitekey="6LcmP0UUAAAAACJ_txIlnImCPVA1RoEMob3B8lDi" />
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td height={32} align="right" valign="middle"><span id="agreeTermsSpan" /><span style={{display: 'none'}}><input id="agree_terms" name="agree_terms" type="radio" defaultValue="b1" /></span><span className="style931">I agree to the <strong>Terms Of Use</strong></span> <br /></td>
                          <td height={32} align="right" valign="top">&nbsp;</td>
                          <td height={32} align="left" valign="middle" bgcolor="#FFFFFF">Submit</td>
                        </tr>
                        <tr>
                          <td height={60} align="right" valign="middle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td height={60} align="right" valign="middle">&nbsp;</td>
                          <td height={60} align="right" valign="middle">&nbsp;</td>
                          <td height={60} align="left" valign="middle"><strong>Cancel</strong></td>
                        </tr>
                        <tr>
                          <td height={18} colSpan={4} valign="bottom">&nbsp;</td>
                        </tr>
                      </tbody></table>
                  </form>
                </td>
              </tr>
            </tbody></table>
        </center>
      </div>
  )
}

export default NewMemberForm
