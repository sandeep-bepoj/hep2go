import React from 'react'
import { Container } from "@mui/material";
import{Link} from 'react-router-dom'
import ExerciseSidebar from '../../Components/ExerciseSidebar/ExerciseSidebar'
import Footer from '../../Components/Foter/Footer'
import MyStuffFooter from '../../Components/Foter/MystufFooter/MyStuffFooter'
import Navbar from '../../Components/Navbar/Navbar'


function Exercises() {
  const dummydata = [
    {
      id: 1,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000325.jpg?pgf=9798aaf7ce5d9f60b93870d74ce88440",
    },
    {
      id: 2,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000273.jpg?pgf=06cab2812a94e56592e514c1707eecce",
    },
    {
      id: 3,
      img: "https://media.hep2go.com/ex_images/026001-027000/121/image_026176.jpg?pgf=bade2e6dc0966b463a3480000ed5d057",
    },
    {
      id: 3,
      img: "https://media.hep2go.com/ex_images/026001-027000/121/image_026176.jpg?pgf=bade2e6dc0966b463a3480000ed5d057",
    },
    {
      id: 4,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000342.jpg?pgf=170e08ced14b5ef87e934903e857e561",
    },
    {
      id: 5,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000281.jpg?pgf=bb327565c7bd0d8900b20378009d8635",
    },
    {
      id: 6,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000327.jpg?pgf=c9129159b29007668c12c6c95e7dfa63",
    },
    {
      id: 7,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000335.jpg?pgf=d3ce7c715939f6a948885a0e2ddbc334",
    },
    {
      id: 8,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000276.jpg?pgf=0622d98469fd2eae4261c25df6e92439",
    },
    {
      id: 8,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000276.jpg?pgf=0622d98469fd2eae4261c25df6e92439",
    },
    {
      id: 9,
      img: "https://media.hep2go.com/ex_images/000001-001000/121/image_000277.jpg?pgf=b6a9dfe464981403809bd83deb4391d6",
    },
    {
      id: 10,
      img: "https://media.hep2go.com/ex_images/017001-018000/121/image_017389.jpg?pgf=9e543fc94842f68c8c16e2a5b68b8204",
    },
  ];
  return (
    <div>
      <Navbar />
      <Container s>
        <div className="m-2 row  ">
          <div className="col-md-6 col-sm-12 d-flex justify-content-between align-items-center mt-2">
            Lumbar Thoracic {">"} All {">"} All
            <div>Sort By Most Sent</div>
          </div>

          <div className="col-md-6 col-sm-12 d-flex justify-content-end fullwidth align-items-center mt-2">
            
            <div className='ml-2'> 1</div>
            <div className='ml-2'>2</div>
            <div className='ml-2'>3</div>
            <div className='ml-2 '>4</div>
            <div className='ml-2'>5</div>
            <div className='ml-2'>6</div>
            <div className='ml-2'>7</div>
            <div className='ml-2'>8</div>
            
            {/* <div> */}

            <img
              src="https://www.hep2go.com/pieces/page_turn_Rt.jpg"
              alt=""
              className='ml-2'
              width={23}
              height={23}
              />
            <img
              src="https://www.hep2go.com/pieces/page_turner_end_Rt.jpg"
              alt=""
              className='ml-2'
              width={23}
              height={23}
              />
              {/* </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12 minusmargin">
            <Container>
              <ExerciseSidebar />
            </Container>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="row p-3">
              {dummydata.map((elm) => {
                return (
                  <>

                    <div className="col-sm-6 col-md-3 d-flex justify-content-center align-items-center mt-2">
                  <Link to="/exercise/:edit">
                      <img src={elm.img} alt="" />
                  </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <MyStuffFooter />
      <Footer />
    </div>
      
      
  )
}

export default Exercises
