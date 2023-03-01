import React from "react";
import { QrImg, Support2 } from "../../Assets";
import Footer from "../../Components/Foter/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
function IndexHome() {
  return (
    <>
      <div>
        <Navbar />
        <center>
          <table
            bgcolor="#FFFFFF"
            width="100%"
            border={0}
            cellPadding={1}
            cellSpacing={0}
          >
            <tbody>
              <tr>
                <td height={377} colSpan={3} align="center" valign="top">
                  <br />
                  <br />

                  <Link to="/index-home">
                    <img src={QrImg} alt="QR code delivery of HEP" />
                  </Link>
                  <br />
                </td>
                <td></td>
              </tr>
              <tr>
                <td height={67} colSpan={3} align="center">
                  <table width={765} border={0}>
                    <tbody>
                      <tr>
                        <td
                          width={759}
                          height={32}
                          align="center"
                          valign="middle"
                        >
                          <span className="style99">
                            HEP2go.com is for rehab professionals such as
                            physical therapists, occupational therapists,
                            athletic trainers, chiropractors, orthopedic
                            doctors, etc to create and share home exercise
                            programs for their patients and or clients.
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <center>
                <td width={340} align="center" height={169}>
                  <Link to="/exercise">
                    <img
                      src="https://www.hep2go.com/images/get-started-3.jpg"
                      alt="Start Building a Home Exercise Program"
                      name="Image8"
                      width={340}
                      height={169}
                      border={0}
                      id="Image8"
                    />
                  </Link>
                </td>
                <td width={340} align="center">
                  <Link to="/login">
                    <img
                      src="https://www.hep2go.com/images/community-2.jpg"
                      alt="Community Tool Box"
                      name="Image11"
                      width={340}
                      height={169}
                      border={0}
                      id="Image11"
                    />
                  </Link>
                </td>
                <td width={340} align="center">
                  <Link to="/login">
                    <img
                      src={Support2}
                      alt="Technical Support"
                      name="Image10"
                      width={340}
                      height={169}
                      border={0}
                      id="Image10"
                    />
                  </Link>
                </td>
              </center>
            </tbody>
          </table>
        </center>
        <Footer />
      </div>
    </>
  );
}

export default IndexHome;
