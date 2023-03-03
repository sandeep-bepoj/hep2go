import React from "react";
import { Logo } from "../../../Assets";
import "./newmemberform.css";
import { Link, useLocation } from "react-router-dom";

function NewMemberForm() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div>
        <img src={Logo} alt="logo" className="mt-3" width={257} height={85} />

        <td height={43} colSpan={3}>
          <strong>
            <span className="style96">
              {location.pathname === "/new-member-form-pro" ? "Pro" : "Free"}{" "}
              Plan - Single User - Please Fill Out the Form
            </span>
          </strong>
          <br />
        </td>

        <div className="m-2">
          <input type="text" style={{width:"50%",marginRight:"15px"}}/>  First Name * 
        </div>
        <div className="m-2">
          <input type="text"style={{width:"50%",marginRight:"15px"}} />Last Name, Title *
        </div>
        <div className="m-2">
          <input type="text" style={{width:"50%",marginRight:"15px"}}/>Company Name
        </div>
        <div className="m-2">
          <input type="text"style={{width:"50%",marginRight:"15px"}} /> Years Experience
        </div>
        <div className="m-2">
        <select name="occupation" onkeypress="return submit_form(event, submit_membership_form, 'form_membership');">
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
      </select>Occupation
        </div>
        <div className="m-2">
          <input type="text" style={{width:"50%",marginRight:"15px"}} />Work Setting  
        </div>
        <div className="m-2">
          <input type="text" style={{width:"50%",marginRight:"15px"}}/>Email Address
        </div>
        <div className="m-2">
          <input type="text" style={{width:"50%",marginRight:"15px"}}/>Repeat Emai*
        </div>
        <div className="m-2">
          <input type="text"style={{width:"50%",marginRight:"15px"}} />Create Password *
        </div>
        <div className="m-2">
          <input type="text" style={{width:"50%",marginRight:"15px"}} />Repeat Password *
        </div>
        <div className="m-2">
          <input type="radio" name="" id="" /><span >I agree to the <strong class="style93">Terms Of Use</strong></span><br />
         
        </div>
        <div className="m-5">
         <Link to="/index-home"> <strong class="style93 m-3">Submit</strong><strong class="style93 m-3">Cancel</strong></Link>
        </div>

      </div>
    </div>
  );
}

export default NewMemberForm;
