import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminPage/AdminHeader'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-grid-system';

import axios from 'axios';

function Slt() {


  const [show, setShow] = useState(false);

  const [option, setOption] = useState()
  const [slots, setslots] = useState()

  const [slotrows, setslotrows] = useState([])
const [storeid,setstoreid]=useState()
const [slotrowsbooked,setslotrowsbooked]=useState()

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log("Handle show?????????????????");

    const sid = e.currentTarget.id;
    console.log(sid, "GOOOOOOOOOOOOOOOTTTTTTTTT");
    setstoreid(sid)
    setShow(true);
  }

  const [applicants, setapplicants] = useState([])


  console.log(applicants, "APPLICANTss");


  useEffect(() => {

    axios.get('http://localhost:3001/admin/applicantlist').then((response) => {


      console.log("response.data", response.data);

      setapplicants(response.data)
      console.log("Applicants oooooooooo", applicants);
      // PostDetails(response.data)
      Slotdisplay()


    }).catch((err) => {
      console.log(err.message);
    })

  }, [slots], [slotrows],[storeid],[applicants],[slotrowsbooked])


  function handleChange(e) {

    setOption(e.target.value,)
  }


  const handleSelect = () => {
    console.log("////////////", option);
    const id = option
    axios.get(`http://localhost:3001/admin/slotoption/${id}`).then((response) => {

      console.log("############## Slot Booked", response.data.value);
      setslots(response.data.value)
      Slotboxbooking()
      handleClose()
    }).catch((err) => console.log(err))

  }

  const Slotboxbooking = () => {
    console.log("SLOt box booking function");
    console.log(storeid,"IDDDDDDDDDDD stored sucessssssssssssssss");
    const id = storeid;
    console.log(id, "SLOOOOOOOOTTTTTTTT IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    axios.get(`http://localhost:3001/admin/slotbox/${id}`).then((response) => {

      console.log("############## Slot box Booked", response.data.value);
      setslotrowsbooked(response.data.value)

    }).catch((err) => console.log(err))
 
  }   

  console.log(slotrowsbooked,"*******************************************");

  const Slotdisplay = () => {
    axios.get('http://localhost:3001/admin/slotbook').then((response) => {
      console.log(response.data, ";;;;;;;;;;;;;;;;");
      console.log("############## Slot Booked");
      setslotrows(response.data)
    }).catch((err) => console.log(err.message))
  }

  return (
    <div className='adminbg'>
      <AdminHeader />
      <br />
      <h1 className='textfont' style={{ textAlign: 'center' }}>Booking Slot</h1><br />

      <div className='container'>
    <div style={{ display: 'flex', justifyContent: 'space-between' ,flexWrap:'wrap',paddingRight:'100px',paddingLeft:'60px',paddingBottom:'60px',paddingTop:'60px'}} >
        {slotrows.map((slot, index) => { 

          return <div key={index}>

    {slot.isSlotboxbooked? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div> : <div  name={slot.name} id={slot._id} onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>{slot.name}</div>}
<br/>
            {/* {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A1" id="A1" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A1</div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A2" id="A2" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A2  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A3" id="A3" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A3  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A4" id="A4" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A4  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A5" id="A5" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A5  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A6" id="A6" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A6  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A7" id="A7" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A7  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A8" id="A8" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A8  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A9" id="A9" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A9  </div>}
                        {applicant.isSlotbooked ? <div style={{backgroundColor:"grey",  width: '60px', height: '60px'}}></div>  :  <div name="A10" id="A10" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>A10 </div>}
                     */}

          </div>
        })}
</div>

      </div>


      <br />
      <hr style={{ border: '2px solid black' }} />
      <hr style={{ border: '2px solid black' }} />
      <br />
      <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }} >
        <Container>
          <Row>
            <Col sm={4} name="B1" id="B1" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>B1</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }}></Col>
            <Col sm={4} name="B2" id="B2" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>B2</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="B3" id="B3" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>B3</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="B4" id="B4" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>B4</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="B5" id="B5" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>B5</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="B6" id="B6" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>B6</Col>
          </Row>
        </Container>

        <div><hr style={{ border: '2px solid black', height: '100%', marginTop: '10%' }} /></div>
        <Container>
          <Row>
            <Col sm={4} name="C1" id="C1" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>C1</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="C2" id="C2" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>C2</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="C3" id="C3" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>C3</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="C4" id="C4" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>C4</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="C5" id="C5" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>C5</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="C6" id="C6" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>C6</Col>
          </Row>
        </Container>
        <div><hr style={{ border: '2px solid black', height: '100%', marginTop: '10%' }} /></div>
        <Container>
          <Row>
            <Col sm={4} name="D1" id="D1" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>D1</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="D2" id="D2" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>D2</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="D3" id="D3" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>D3</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="D4" id="D4" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>D4</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="D5" id="D5" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>D5</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="D6" id="D6" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>D6</Col>
          </Row>
        </Container>
        <div><hr style={{ border: '2px solid black', height: '100%', marginTop: '10%' }} /></div>

        <Container>
          <Row>
            <Col sm={4} name="E1" id="E1" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>E1</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="E2" id="E2" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>E2</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="E3" id="E3" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>E3</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="E4" id="E4" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>E4</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="E5" id="E5" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>E5</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="E6" id="E6" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>E6</Col>
          </Row>
        </Container>
        <div><hr style={{ border: '2px solid black', height: '100%', marginTop: '10%' }} /></div>

        <Container>
          <Row>
            <Col sm={4} name="F1" id="F1" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>F1</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="F2" id="F2" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>F2</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="F3" id="F3" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>F3</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="F4" id="F4" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>F4</Col>
          </Row>
          <br />
          <Row>
            <Col sm={4} name="F5" id="F5" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>F5</Col>
            <Col sm={4} style={{ width: '20px', height: '20px', backgroundColor: '' }} />
            <Col sm={4} name="F6" id="F6" onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>F6</Col>
          </Row>
        </Container>

      </div>

      <br /><br />


      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Book Your Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <select name='option' onChange={handleChange}>
            <option>Choose Company Name</option>
            {applicants && applicants.map((applicant, index) => {
              console.log(applicant._id, "IIIIIDDDDDDDDDDDD");

              if (applicant.isApprove && applicant.userData) {
                if (!applicant.isSlotbooked) {

                  return <option id='applicant._id' value={applicant._id}>{applicant.userData?.companyName}</option>

                }
              }

            })

            }
          </select>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSelect}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

    </div >
  )
}

export default Slt
