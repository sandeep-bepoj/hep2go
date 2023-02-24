import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <center>
        <table width={1024} border={0} cellPadding={0} cellSpacing={0}>
          <tbody><tr>
              <td width={120} height={47}><a href="http://www.hep2go.com/index_b.php?userRef=gciaake"><img src="https://www.hep2go.com/images/medium-logos/logo-bk.jpg" alt="" width={120} height={47} border={0} /></a></td>
              <td width={120}><a href="http://www.hep2go.com/exercises.php?userRef=gciaake"><img src="https://www.hep2go.com/buttons/standard_bbb.jpg" alt="" name="Image4" width={120} height={47} border={0} id="Image4" /></a></td>
              <td width={120}><a href="http://www.hep2go.com/my_routines/my_routines_private.php?userRef=gciaake" ><img src="https://www.hep2go.com/buttons/exs_ball_bbb.jpg" alt="" name="Image5" width={120} height={47} border={0} id="Image5" /></a></td>
              <td width={120}><img src="https://www.hep2go.com/buttons/quick_bbb.jpg" alt="" width={120} height={47} /></td>
              <td width={67} align="left" bgcolor="#000000"><img src="https://www.hep2go.com/buttons/search_bbb.jpg" alt="" width={60} height={47} /></td>
              <td width={205} background="https://www.hep2go.com/buttons/search_end_bbb.jpg" bgcolor="#000000" style={{paddingBottom: '3px'}}>
                <input id="f_search_kind" name="f_search_kind" type="hidden" defaultValue="exs" />
                <div id="searchBoxDiv" className="searchBox" style={{width: '200px', padding: '0px', margin: '0px', paddingLeft: '0px'}}>
                  <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                    <tbody><tr>
                        <td width={502} align="left" valign="middle">
                          <input id="f_search" name="f_search" type="text" defaultValue style={{width: '300px', fontSize: '17px'}} className="ui-autocomplete-input" autoComplete="off" /></td>
                        <td width={32} align="right" valign="top" style={{paddingRight: '1px', paddingTop: '4px'}}>
                        </td>
                          {/* <img src="https://www.hep2go.com/images/search_field_arrow.jpg" border={0}  /> */}
                      </tr>
                    </tbody></table>
                </div>
              </td>
              <td width={272} align="left" valign="middle" background="https://www.hep2go.com/buttons/search_end_bbb.jpg" bgcolor="#000000" style={{paddingRight: '5px'}}><a href="javascript: goSearch();" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('searchImg','','https://www.hep2go.com/buttons/mag_glass_bbb.jpg',1)"><img src="https://www.hep2go.com/buttons/mag_glass_bbb.jpg" alt="Search Site" id="searchImg" name="searchImg" width={26} height={46} border={0} /></a> </td>
            </tr>
          </tbody></table>
        <table width={745} border={0} cellPadding={0} cellSpacing={0}>
          <tbody><tr>
              <td height={23} colSpan={7} valign="top" bgcolor="#666666">
                <table width={799} border={0} cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td height={23} className="style54">
                        <table width={799} border={0} cellSpacing={0} cellPadding={0}>
                          <tbody><tr>
                              <td height={17} align="right" className="style54">
                                <table width={1024} border={0} cellSpacing={0} cellPadding={0}>
                                  <tbody><tr>
                                      <td width={115} align="left" bgcolor="#000000" className="style54" style={{paddingLeft: '3px'}}>
                                        &nbsp;<a className="profile_link" href="http://www.hep2go.com/my_routines/account_settings.php?userRef=gciaake"><img src="https://www.hep2go.com/images/gear-icon.jpg" alt="Account Settings" border={0} /></a></td>
                                      <td width={326} align="left" bgcolor="#000000" className="style54">&nbsp;</td>
                                      <td width={133} height={21} align="right" valign="middle" bgcolor="#000000" style={{paddingRight: '10px'}}>
                                        <span style={{all: 'revert', color: '#FFF'}}><a href="http://www.hep2go.com/log-in-2.php?userRef=gciaake" className="profile_link">Log in</a></span><span style={{color: '#FFFFFF'}}>&nbsp;|&nbsp;</span>
                                        <a href="http://www.hep2go.com/register_options.php?userRef=gciaake" className="profile_link"><span style={{color: '#FFFFFF'}}>Sign Up</span></a></td>
                                      <td width={10} bgcolor="#000000">&nbsp;</td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table>
      </center>
  )
}

export default Navbar
