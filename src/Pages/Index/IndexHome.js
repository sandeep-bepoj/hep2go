import React from "react";
import { QrImg, Support2 } from "../../Assets";
import Footer from "../../Components/Foter/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
function IndexHome() {
  return (
    <>
      <Navbar />
      <div>
        <Container>
          <div className="d-flex row justify-content-center align-items-center p-1">
            <Link to="/index-home">
              <img
                src={QrImg}
                className="img-fluid"
                alt="QR code delivery of HEP"
              /> b
            </Link>
          </div>
          <div>
            <div className="p-3 text-center">
              HEP2go.com is for rehab professionals such as physical therapists,
              occupational therapists, athletic trainers, chiropractors,
              orthopedic doctors, etc to create and share home exercise programs
              for their patients and or clients.
            </div>
          </div>
          <div className="row justify-content-between align-items-center p-1">
            <div className="col-sm-12 col-md-4"><Link to="/exercise">
              <img
                src="https://www.hep2go.com/images/get-started-3.jpg"
                alt="Start Building a Home Exercise Program"
                name="Image8"
                className="img-fluid m-1"
                id="Image8"
              />
            </Link></div>
            <div className="col-sm-12 col-md-4"> <Link to="/login">
              <img
                src="https://www.hep2go.com/images/community-2.jpg"
                alt="Community Tool Box"
                name="Image11"
                className="img-fluid  m-1"
                id="Image11"
              />
            </Link></div>
            <div className="col-sm-12 col-md-4"><Link to="/login">
              <img
                src={Support2}
                alt="Technical Support"
                name="Image10"
                className="img-fluid  m-1"
                id="Image10"
              />
            </Link></div>
            
           
            
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default IndexHome;
