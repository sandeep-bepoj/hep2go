import React from 'react'
import { Container } from '@mui/material'
function MyStuffFooter() {
  return (
    <Container className='mt-3' >
      <div style={{backgroundColor:"black"}}>

    <div style={{ display: 'flex', justifyContent: 'flex-end',paddingTop:"8px" }}>
      <img src="https://www.hep2go.com/images/layout-2.gif" alt="Imge 1" style={{marginRight:"10px"}} width="24" height="24" />
      <img src="https://www.hep2go.com/images/gear.gif" alt="Imae 2"style={{marginRight:"10px"}} width="24" height="24" />
      <img src="https://www.hep2go.com/images/hep-editor.gif"style={{marginRight:"10px"}} alt="Imge 3" width="24" height="24" />
    </div>
    <div style={{position:"absolute"}}> </div>
    <div className="  d-flex justify-content-between align-items-center" >
      <div><img className="img-fluid" src="https://www.hep2go.com/images/carousel_left.gif" alt="" /></div>
      <div><img className="img-fluid" src="https://www.hep2go.com/images/carousel_empty.gif" alt="" /></div>
      <div><img className="img-fluid" src="https://www.hep2go.com/images/carousel_right.gif" alt="" /></div>
    </div>
      </div>
    </Container>
  )
}

export default MyStuffFooter
