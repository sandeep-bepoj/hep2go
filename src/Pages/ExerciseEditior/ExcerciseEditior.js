import React from 'react'
import { Logo} from '../../Assets'
import {Container} from "@mui/material"
const ExcerciseEditior = () => {
  return (
    <Container>
    <div>
      {" "}
      <img src={Logo} alt="" /> Selected Exercise
      __________________________________________{" "}
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center mt-2 ">
        <div className="border">
          <img
            style={{ width: "340px", height: "214px" }}
            src="https://media.hep2go.com/ex_images/026001-027000/219/image_026176.jpg?iid=74ea77db423116a3dd786ca5a0e70fbf"
            alt=""
          />
        </div>
      </div>
      <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center mt-2">
        <textarea
          id="f_description"
          name="f_description"
          class="style70"
          style={{ width: "340px", height: "214px" }}
        >
          BRIDGING ELASTIC BAND ABDUCTION While lying on your back, place an
          elastic band around your knees and pull your knees apart. Hold
          this and then tighten your lower abdominal muscles, squeeze your
          buttocks and raise your buttocks off the floor/bed as creating a
          "Bridge" with your body.
        </textarea>
      </div>
      <div
        className="col-sm-12 col-md-4  leftmarf"
        
      >
        <div >
          <label htmlFor="">Raps</label>
          <select
            id="f_repeats"
            name="f_repeats"
            className="style74"
            style={{ width: "110px" }}
          >
            <option value={-1}>__________</option>
            <option value={1} selected>
              1 Time
            </option>
            <option value={2}>2 Times</option>
            <option value={3}>3 Times</option>
            <option value={4}>4 Times</option>
            <option value={5}>5 Times</option>
            <option value={6}>6 Times</option>
            <option value={7}>7 Times</option>
            <option value={8}>8 Times</option>
            <option value={9}>9 Times</option>
            <option value={10}>10 Times</option>
            <option value={11}>11 Times</option>
            <option value={12}>12 Times</option>
            <option value={13}>13 Times</option>
            <option value={14}>14 Times</option>
            <option value={15}>15 Times</option>
            <option value={16}>16 Times</option>
            <option value={17}>17 Times</option>
            <option value={18}>18 Times</option>
            <option value={19}>19 Times</option>
            <option value={20}>20 Times</option>
            <option value={21}>21 Times</option>
            <option value={22}>22 Times</option>
            <option value={23}>23 Times</option>
            <option value={24}>24 Times</option>
            <option value={25}>25 Times</option>
            <option value={26}>26 Times</option>
            <option value={27}>27 Times</option>
            <option value={28}>28 Times</option>
            <option value={29}>29 Times</option>
            <option value={30}>30 Times</option>
            <option value={31}>31 Times</option>
            <option value={32}>32 Times</option>
            <option value={33}>33 Times</option>
            <option value={34}>34 Times</option>
            <option value={35}>35 Times</option>
            <option value={36}>36 Times</option>
            <option value={37}>37 Times</option>
            <option value={38}>38 Times</option>
            <option value={39}>39 Times</option>
            <option value={40}>40 Times</option>
            <option value={41}>41 Times</option>
            <option value={42}>42 Times</option>
            <option value={43}>43 Times</option>
            <option value={44}>44 Times</option>
            <option value={45}>45 Times</option>
            <option value={46}>46 Times</option>
            <option value={47}>47 Times</option>
            <option value={48}>48 Times</option>
            <option value={49}>49 Times</option>
            <option value={50}>50 Times</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Holds</label>
          <select
            id="f_hold"
            name="f_hold"
            className="style74"
            style={{ width: "110px" }}
          >
            <option value={-1}>__________</option>
            <option value={0}>0 Seconds</option>
            <option value={1} selected>
              1 Second
            </option>
            <option value={2}>2 Seconds</option>
            <option value={3}>3 Seconds</option>
            <option value={4}>4 Seconds</option>
            <option value={5}>5 Seconds</option>
            <option value={6}>6 Seconds</option>
            <option value={7}>7 Seconds</option>
            <option value={8}>8 Seconds</option>
            <option value={9}>9 Seconds</option>
            <option value={10}>10 Seconds</option>
            <option value={11}>11 Seconds</option>
            <option value={12}>12 Seconds</option>
            <option value={13}>13 Seconds</option>
            <option value={14}>14 Seconds</option>
            <option value={15}>15 Seconds</option>
            <option value={20}>20 Seconds</option>
            <option value={25}>25 Seconds</option>
            <option value={30}>30 Seconds</option>
            <option value={35}>35 Seconds</option>
            <option value={45}>45 Seconds</option>
            <option value={60}>1 Minute</option>
            <option value={120}>2 Minutes</option>
            <option value={180}>3 Minutes</option>
            <option value={240}>4 Minutes</option>
            <option value={300}>5 Minutes</option>
            <option value={360}>6 Minutes</option>
            <option value={420}>7 Minutes</option>
            <option value={480}>8 Minutes</option>
            <option value={540}>9 Minutes</option>
            <option value={600}>10 Minutes</option>
            <option value={720}>12 Minutes</option>
            <option value={900}>15 Minutes</option>
            <option value={1200}>20 Minutes</option>
            <option value={1500}>25 Minutes</option>
            <option value={1800}>30 Minutes</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Complete</label>
          <select
            id="f_complete"
            name="f_complete"
            className="style74"
            style={{ width: "110px" }}
          >
            <option value={-1}>__________</option>
            <option value={1} selected>
              1 Set
            </option>
            <option value={2}>2 Sets</option>
            <option value={3}>3 Sets</option>
            <option value={4}>4 Sets</option>
            <option value={5}>5 Sets</option>
            <option value={6}>6 Sets</option>
            <option value={7}>7 Sets</option>
            <option value={8}>8 Sets</option>
            <option value={9}>9 Sets</option>
            <option value={10}>10 Sets</option>
            <option value={11}>11 Sets</option>
            <option value={12}>12 Sets</option>
            <option value={13}>13 Sets</option>
            <option value={14}>14 Sets</option>
            <option value={15}>15 Sets</option>
            <option value={16}>16 Sets</option>
            <option value={17}>17 Sets</option>
            <option value={18}>18 Sets</option>
            <option value={19}>19 Sets</option>
            <option value={20}>20 Sets</option>
          </select>{" "}
          sets
        </div>
        <div>
          <label htmlFor="">Perform</label>

          <select
            id="f_perform"
            name="f_perform"
            className="style74"
            style={{ width: "60px" }}
          >
            <option value={-1}>__________</option>
            <option value={1} selected>
              1
            </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Time{"(s)"}</label>

          <select
            id="f_times"
            name="f_times"
            className="style74"
            style={{ width: "100px" }}
          >
            <option value="a Day" selected>
              a Day
            </option>
            <option value="a Week">a Week</option>
            <option value="an Hour">an Hour</option>
            <option value>__________</option>
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <a href="/exercise">
            <img
              src="/static/media/back-b.74ea78f93fd776ed5859.jpg"
              alt=""
              name="Image3"
              width={51}
              height={51}
              border={0}
              id="Image3"
            />
            <br />
           
          </a>
          <img
            src="/static/media/save-b.cac8d90fe1118bb208b4.jpg"
            alt=""
            name="Image3"
            width={51}
            height={51}
            border={0}
            id="Image3"
          />
          <br />
         
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            name="Image3"
            width={51}
            height={51}
            border={0}
            id="Image3"
          />
          <br />
          
          <img
            src="/static/media/add-b.1ef26bb4e569ac5da271.jpg"
            alt=""
            name="Image3"
            width={94}
            height={49}
            border={0}
            id="Image3"
          />
          <br />
        
        </div>
      </div>
    </div>
  </Container>
  )
}

export default ExcerciseEditior