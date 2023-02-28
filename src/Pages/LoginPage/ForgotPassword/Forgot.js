import React from 'react'
import { Logo, Submit } from '../../../Assets'
import './forgot.css'
function Forgot() {
  return (
    <div>
      <div>
        <div id="Layer5" />
        <center>
          <table width={"100vw"} height={"100vh"} border={0} cellPadding={0} cellSpacing={0}>
            <tbody><tr>
                <td height={540} colSpan={4} align="left" valign="top">
                  <form action="forgot_password_notice.php" method="post" name="form_forgot_password" className="style90" id="form_forgot_password">
                    <table width={984} height={607} border={0} cellPadding={0} cellSpacing={0}>
                      <tbody><tr>
                          <td width={274}>&nbsp;</td>
                          <td colSpan={2}>&nbsp;</td>
                          <td width={178}>&nbsp;</td>
                          <td width={29}>&nbsp;</td>
                          <td width={33}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={14}>&nbsp;</td>
                          <td colSpan={2}>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={119} align="center" valign="bottom" />
                          <td height={119} align="center" valign="bottom" />
                          <td height={119} align="center" valign="bottom"><a href="index.php?userRef=gciaake"><img src={Logo} alt="" width={271} height={89} border={0} /></a></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={251} rowSpan={9}>&nbsp;</td>
                          <td height={19} colSpan={2} valign="bottom">&nbsp;</td>
                          <td rowSpan={9}>&nbsp;</td>
                          <td rowSpan={9}>&nbsp;</td>
                          <td rowSpan={9}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={18} colSpan={2}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={18} colSpan={2}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={18} colSpan={2}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={24} colSpan={2} align="left" valign="bottom">&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={20} colSpan={2} align="left">&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={18} colSpan={2} align="left">&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={38} colSpan={2} align="left" bgcolor="#333333" className="style89"><strong>&nbsp;&nbsp;</strong>Reset/Verify your account</td>
                        </tr>
                        <tr>
                          <td height={111} colSpan={2} align="center" valign="middle" bgcolor="#F0F0F0">
                            <label> <span className="style96"><br />
                                &nbsp;<span className="style90">Email</span></span>
                              <input name="email" type="text" style={{width: '255px', fontSize: '16pt'}} />
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={144} rowSpan={4} align="center" valign="bottom"><span className="style89">&nbsp;</span></td>
                          <td width={7} height={4} bgcolor="#F0F0F0" />
                          <td width={463} align="left" valign="middle" bgcolor="#F0F0F0" />
                          <td rowSpan={4} valign="middle">&nbsp;</td>
                          <td rowSpan={2} valign="bottom"></td>
                          <td rowSpan={4}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={45} colSpan={2} align="center" bgcolor="#F0F0F0"><table width={156} border={0} cellPadding={3}>
                              <tbody><tr>
                                  <td width={146} height={41}><div align="center"><a href="/"><img src={Submit} alt="" width={103} height={32} border={0} /></a></div></td>
                                </tr>
                              </tbody></table>          <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="style90">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><strong><span className="style92">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</strong></td>
                        </tr>
                        <tr>
                          <td height={66} colSpan={2} align="center" valign="bottom">Cancel</td>
                          <td rowSpan={2} valign="bottom">&nbsp;</td>
                        </tr>
                        <tr>
                          <td height={14} colSpan={2}>&nbsp;</td>
                        </tr>
                      </tbody></table>
                  </form>
                </td>
              </tr>
            </tbody></table>
        </center>
      </div>
    </div>
  )
}

export default Forgot
