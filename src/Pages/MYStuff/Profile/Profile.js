import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import "../../../Components/Navbar/navbar.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import MyStuffFooter from "../../../Components/Foter/MystufFooter/MyStuffFooter";
import Footer from "../../../Components/Foter/Footer";
function Profile() {
  return (
    <>
      <Navbar />

      <div>
        <div id="Layer5" />
        <center>
          <table
            width={1020}
            height={"fit-content"}
            border={0}
            cellPadding={0}
            cellSpacing={0}
          >
            <div className="d-flex">
              <div style={{ width: "20%" }}>
                <Sidebar />
              </div>
             
              <table width="90%" border={0} cellSpacing={0} cellPadding={0}>
                <div style={{borderBottom:"2px solid blue",width:"90%" ,marginTop:"15px",fontSize:"18px"}}>Profile  </div>

                </table>
            </div>
          </table>
          <MyStuffFooter />
          <Footer />
        </center>
      </div>
    </>
  );
}

export default Profile;
