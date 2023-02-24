import React from 'react'
import './home.css'
import {TryoutImg,loginimg,signup} from '../.././Assets'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
       <div id="Layer5" />
        {/* Adds nice icon when iphone or ipad adds website to the devices desktop - added by TJ */}
        <link rel="apple-touch-icon" href="app-icon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="app-icon-72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="app-icon-114.png" />
        {/* End icon adder - added by TJ */}
        <center>
          <br />
          <table width={1375} height={658} border={0} cellPadding={0} cellSpacing={0}>
            <tbody><tr>
                <td width={1375} height={658} colSpan={4} align="left" valign="top" bgcolor="#FFFFFF">
                  <form id="form1" name="form_login" method="post" action="login.php">
                    <table width={1290} height={1013} border={0} cellPadding={0} cellSpacing={0}>
                      <tbody><tr>
                          <td height={2} colSpan={3} />
                        </tr>
                        <tr>
                          <td height={622} colSpan={3} align="center"><Link href="index_enter.php"><img src={TryoutImg} width={1100} height={600} alt="" /></Link></td>
                        </tr>
                        <tr>
                          <td width={896} height={177} rowSpan={2} align="right" valign="top" bgcolor="#FFFFFF"><table width={821} border={0}>
                              <tbody><tr>
                                  <td width={815} height={102}><div align="left"><span className="style96"><span className="style142"><strong>HEP2go.com</strong></span>  is for rehabilitation professionals such as physical therapists, PTA's, occupational therapists, COTA's, athletic trainers, chiropractors, orthopedic doctors, sports doctors and more to create home exercise programs for patients and or clients. <br />
                                        <br />
                                        HEP stands for Home Exercise Program and we offer optimized solutions for physical therapy, occupational therapy, trainers, doctors and other rehab disciplines.  
                                        <br />
                                        <br />
                                        Sign up for <span className="style98"><strong>FREE</strong></span> membership features such as saving exercise details, creating  exercises and printing your HEP's.</span></div></td>
                                </tr>
                              </tbody></table></td>
                          <td width={97} height={44} align="right" valign="middle" bgcolor="#FFFFFF"><a href="log-in-2.php?userRef=gciaake"><img src={loginimg} width={52} height={52} border={0} /></a></td>
                          <td width={297} align="left" valign="middle" bgcolor="#FFFFFF"><Link to='/login'>&nbsp;&nbsp;<span className="style137">Log in</span></Link></td>
                        </tr>
                        <tr>
                          <td height={44} align="right" valign="middle" bgcolor="#FFFFFF"><a href="register_options.php?userRef=' . $userRef . '"><span className="style137"><img src={signup} width={52} height={52} border={0} /></span></a></td>
                          <td align="left" valign="middle" bgcolor="#FFFFFF"><a href="register_options.php?userRef=' . $userRef . '">&nbsp;&nbsp;<span className="style137">New Member Sign Up -  Free</span></a></td>
                        </tr>
                        <tr>
                          <td height={2} colSpan={3} />
                        </tr>
                        <tr>
                          <td height={201} colSpan={3} align="center" valign="bottom"><span className="style79"><br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <span className="style89">© 2010-
                                2023 
                                HEP2go, Inc., All Rights Reserved</span></span><br /></td>
                        </tr>
                      </tbody></table>
                  </form>
                </td>
              </tr>
            </tbody></table>
        </center>
        <div id="usersDiv" />
      </div>

  )
}

export default Home
