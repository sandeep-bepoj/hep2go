import React from 'react'

function MyStuffFooter() {
  return (
    <div>
       <table width={1024} border={0} cellSpacing={0} cellPadding={0}>
        <tbody><tr>
            <td width={797} height={20} valign="top" bgcolor="#000000">
              <table width={1024} border={0} cellPadding={0} cellSpacing={0} bgcolor="#000000">
                <tbody><tr>
                    <td width={536} height={34} bgcolor="#000000">&nbsp;</td>
                    <td width={50} align="center" valign="bottom" bgcolor="#000000" className="style46"><a href="javascript: showLayoutMenu();" onmouseout="MM_swapImgRestore(); layoutMenuOut()" onmouseover="MM_swapImage('layoutImg','','https://www.hep2go.com/images/layout-2-over.gif',1)"><img src="https://www.hep2go.com/images/layout-2.gif" alt="Layout" name="layoutImg" width={32} height={32} border={0} id="layoutImg" /></a></td>
                    <td width={1} />
                    <td width={50} align="center" valign="bottom" bgcolor="#000000" className="style46"><a href="javascript: showOptions();" onmouseout="MM_swapImgRestore(); optionsOut()" onmouseover="MM_swapImage('Image35','','https://www.hep2go.com/images/gear-over.gif',1); optionsOver();"><img src="https://www.hep2go.com/images/gear.gif" alt="Options Menu" name="Image35" width={32} height={32} border={0} id="optionsImg" /></a></td>
                    <td width={50} align="center" valign="bottom" bgcolor="#000000"><a href="javascript: goPrintCard();" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image30','','https://www.hep2go.com/images/hep-editor-over.gif',1)"><img src="https://www.hep2go.com/images/hep-editor.gif" alt="HEP Editor" name="Image30" width={32} height={32} border={0} id="Image30" /></a></td>
                  </tr>
                </tbody></table>
            </td>
          </tr>
          <tr>
            <td height={83} valign="top" bgcolor="#000000" style={{paddingTop: '1px', paddingLeft: '1px'}}>
              <div style={{width: '1024px', height: '83px', backgroundColor: '#D2D2D2'}}>
                <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                  <tbody>
                    <tr>
                      <td width={22} align="left">
                        <img src="https://www.hep2go.com/images/carousel_left.gif" width={22} height={83} style={{cursor: 'pointer'}} onclick="carouselLeft()" onmouseout="dimmerArrowOut(event)" title="Previous" />
                        {/* <div className="carouselDimmer" style={{width: '22px', height: '83px', top: '554px', left: '163px', display: 'block'}} onmouseover="dimmerArrowLeftOver(event)" /> */}
                      </td>
                      <td align="left" valign="top">
                        <div id="carouselDiv" style={{width: '980px', height: '83px', position: 'relative', overflow: 'hidden', backgroundColor: '#1E1E1E'}}><table width="100%" border={0} cellSpacing={0} cellPadding={0}><tbody><tr><td height={83} align="center" valign="middle" style={{backgroundColor: '#000000'}} ><img src="https://www.hep2go.com/images/carousel_empty.gif" width={632} height={53} /></td></tr></tbody></table></div>
                      </td>
                      <td width={22} align="right">
                        <img src="https://www.hep2go.com/images/carousel_right.gif" width={22} height={83} style={{cursor: 'pointer'}} onclick="carouselRight()" onmouseout="dimmerArrowOut(event)" title="Next" />
                        {/* <div className="carouselDimmer" style={{width: '22px', height: '83px', top: '554px', left: '1165px', display: 'block'}} onmouseover="dimmerArrowRightOver(event)" /> */}
                      </td>
                    </tr>
                  </tbody></table>
              </div>
              <div id="optionsDiv" style={{width: '140px', border: '1px solid #0AB4FF'}} onmouseover="javascript: optionsOver();" onmouseout="javascript: optionsOut();">
                <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td height={40} align="left" valign="middle" style={{paddingLeft: '5px', fontSize: '14px'}} onmouseover="menuItemOver(event)" onmouseout="menuItemOut(event)" onclick="goRemoveAllExs()">
                        Remove All Exs
                      </td>
                    </tr>
                    <tr>
                      <td height={50} align="left" valign="middle" style={{paddingLeft: '5px', fontSize: '14px'}} onmouseover="menuItemOver(event)" onmouseout="menuItemOut(event)" onclick="goLoadRoutine(); populateList(); ">
                        Load Routine
                      </td>
                    </tr>
                  </tbody></table>
              </div>
              {/* <div id="layoutMenuDiv" style={{border: '1px solid #0AB4FF'}} onmouseover="layoutMenuOver()" onmouseout="layoutMenuOut()">
                <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td height={30} align="left" valign="middle" className="mflMenus" style={{paddingLeft: '5px', fontSize: '14px'}} onmouseover="menuItemOver(event)" onmouseout="menuItemOut(event)" onclick="showLayout(6, 0)">
                        Large
                      </td>
                    </tr>
                    <tr>
                      <td height={30} align="left" valign="middle" className="mflMenuItemSelected" style={{paddingLeft: '5px', fontSize: '14px'}} onmouseover="menuItemOver(event)" onmouseout="menuItemOut(event)" onclick="showLayout(15, 0)">
                        Medium
                      </td>
                    </tr>
                    <tr>
                      <td height={30} align="left" valign="middle" className="mflMenus" style={{paddingLeft: '5px', fontSize: '14px'}} onmouseover="menuItemOver(event)" onmouseout="menuItemOut(event)" onclick="showLayout(35, 0)">
                        Small
                      </td>
                    </tr>
                  </tbody></table>
              </div> */}
              <div id="routineLoadDiv" style={{width: '400px', zIndex: 2001}}>
                <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td className="popupTopLeft" />
                      <td className="popupTop" />
                      <td className="popupTopRight" />
                    </tr>
                    <tr>
                      <td className="popupLeft" />
                      <td className="popupBody" align="left" valign="top">{/* popup Body */}
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="text">
                          <tbody><tr>
                              <td height={25} align="left" className="popupHeader" style={{paddingLeft: '5px'}}>
                                Load Routine
                              </td>
                              <td className="popupHeader">
                                <div id="closeRoutineLoadDiv" className="closeDiv" onclick="closeRoutineLoad()" />
                              </td>
                            </tr>
                          </tbody></table>
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="text">
                          <tbody><tr>
                              <td width={60} height={25} align="left" valign="middle" style={{paddingTop: '10px', paddingLeft: '10px'}}>
                                Routine:
                              </td>
                              <td height={25} align="left" valign="middle" style={{paddingTop: '10px'}}>
                                <select id="f_routines" name="f_routines"> </select> {/* modified for ajax call */}
                              </td>
                            </tr>
                          </tbody></table>
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="text">
                          <tbody><tr>
                              <td align="right" valign="middle" style={{paddingTop: '30px', paddingRight: '10px', paddingBottom: '20px'}}>
                                <input type="button" defaultValue="Load" onclick="doRoutineLoad()" style={{width: '60px'}} />
                              </td>
                              <td width={80} align="left" valign="middle" style={{paddingTop: '30px', paddingBottom: '20px'}}>
                                <input type="button" defaultValue="Close" onclick="closeRoutineLoad()" style={{width: '60px'}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>{/* End popup Body */}
                      <td className="popupRight" />
                    </tr>
                    <tr>
                      <td className="popupBottomLeft" />
                      <td className="popupBottom" />
                      <td className="popupBottomRight" />
                    </tr>
                  </tbody></table>
              </div>
              <div id="routineSaveDiv" style={{width: '400px', zIndex: 2001}}>
                <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td className="popupTopLeft" />
                      <td className="popupTop" />
                      <td className="popupTopRight" />
                    </tr>
                    <tr>
                      <td className="popupLeft" />
                      <td className="popupBody" align="left" valign="top">{/* popup Body */}
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="text">
                          <tbody><tr>
                              <td height={25} align="left" className="popupHeader" style={{paddingLeft: '5px'}}>
                                Save Routine
                              </td>
                              <td className="popupHeader">
                                <div id="closeRoutineSaveDiv" className="closeDiv" onclick="closeRoutineSave()" />
                              </td>
                            </tr>
                          </tbody></table>
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="text">
                          <tbody><tr>
                              <td width={110} height={25} align="left" valign="middle" style={{paddingTop: '10px', paddingLeft: '10px'}}>
                                Routine Name:
                              </td>
                              <td height={25} align="left" valign="middle" style={{paddingTop: '10px'}}>
                                <input id="f_routine_title" type="text" defaultValue style={{width: '230px'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="text">
                          <tbody><tr>
                              <td align="right" valign="middle" style={{paddingTop: '30px', paddingRight: '10px', paddingBottom: '20px'}}>
                                <input type="button" defaultValue="Save" onclick="doRoutineSave()" style={{width: '60px'}} />
                              </td>
                              <td width={80} align="left" valign="middle" style={{paddingTop: '30px', paddingBottom: '20px'}}>
                                <input type="button" defaultValue="Close" onclick="closeRoutineSave()" style={{width: '60px'}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>{/* End popup Body */}
                      <td className="popupRight" />
                    </tr>
                    <tr>
                      <td className="popupBottomLeft" />
                      <td className="popupBottom" />
                      <td className="popupBottomRight" />
                    </tr>
                  </tbody></table>
              </div>
              <div id="routinesLoadPopupDiv" style={{position: 'absolute', display: 'none', backgroundColor: '#FFFFFF', top: '300px', width: '500px', height: '250px', border: '1px solid #000000', zIndex: 10000}}>
                <table width="100%" cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td align="center" valign="middle" style={{paddingTop: '30px'}}>
                        There already are exercises in your HEP Editor
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="middle" style={{paddingTop: '30px'}}>
                        <div className="button buttonEnabled" onclick="doRoutinesMerge()">
                          Merge the routine with exercises already present
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="middle" style={{paddingTop: '30px'}}>
                        <div className="button buttonEnabled" onclick="doRoutinesLoad()">
                          Remove exercises already present and load the routine only
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="middle" style={{paddingTop: '30px'}}>
                        <div className="button buttonEnabled" onclick="doRoutinesCancel()">
                          Cancel
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
              </div>
              {/* <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\n.button\n  {\n  width: 450px;\n  height: 20px;\n  font-weight: bold;\n  border: none;\n  padding-top: 5px;\n  }\n\n.buttonEnabled\n  {\n  color: #FFFFFF;\n  background-color: #003466;\n  cursor: pointer;\n  }\n\n.buttonEnabled:hover\n  {\n  background-color: #006FDD;\n  }\n\n.buttonDisabled\n  {\n  color: #959595;\n  background-color: #5B84A2;\n  cursor: text;\n  }\n\n" }} /> */}
            </td>
          </tr>
        </tbody></table>
    </div>
  )
}

export default MyStuffFooter
