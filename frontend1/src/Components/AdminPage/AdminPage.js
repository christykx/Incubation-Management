import React, { useContext, useEffect, useState } from 'react'
import './AdminPage.css'
import Table from 'react-bootstrap/Table';
import AdminHeader from './AdminHeader';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { PostContext } from '../../store/PostContext'
import { useRouteLoaderData } from 'react-router-dom';



function AdminPage() {

  const [applicants, setapplicants] = useState([])
  //  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [pending, setpending] = useState(false)
  const [approve, setapprove] = useState(false)
  const [disapprove, setdisapprove] = useState(false)


  // const { setPostDetails } = useContext(PostContext)
  // const { PostDetails } = useContext(PostContext)

  // console.log(".........................",PostDetails);

  useEffect(() => {

    axios.get('http://localhost:3001/admin/applicantlist').then((response) => {

      console.log("response.data", response.data);

      setapplicants(response.data)
      console.log("Applicants oooooooooo", applicants);
      // PostDetails(response.data)

    }).catch((err) => {
      console.log(err.message);
    })

  }, [pending, approve, disapprove])



  const showDetail = (id) => {
    axios.get(`http://localhost:3001/admin/applicant/${id}`).then((res) => {
      console.log("##############3", res.data);

      setModalShow(res.data, true)
      //  console.log(modalShow,'mmmmmmmmmm');
    })

  }


  const showpending = (id) => {
    axios.get(`http://localhost:3001/admin/pending/${id}`).then((response) => {
      console.log("############## pending", response.data);

      setpending(true)
    }).catch((err) => console.log(err))
  }


  const approveApplicant = (id) => {
    axios.get(`http://localhost:3001/admin/approve/${id}`).then((response) => {
      console.log("############## approve", response.data);

      setapprove(true)
    }).catch((err) => console.log(err))
  }

  const disapproveApplicant = (id) => {
    axios.get(`http://localhost:3001/admin/disapprove/${id}`).then((response) => {
      console.log("############## disapprove", response.data);

      setdisapprove(true)
    }).catch((err) => console.log(err))
  }


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span style={{ padding: '55vh' }}>Details</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Details in detail</h4> */}


          {/* {modalShow && modalShow.map((applicant, index) => {
             console.log("USERDATAAAAA",applicant);
   */}
          {/* if (applicant.userData) {

              return */}

          <div >

            <p>Name : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.name}</span></p><br />
            <p>Address : <span style={{ fontWeight: 'bolder' }}>{modalShow.userData?.address}</span> </p><br />
            <p>City : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.city}</span></p><br />
            <p>State : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.state}</span></p><br />
            <p>Email : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.email}</span></p><br />
            <p>Phone no : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.phone}</span></p><br />
            <p>Company Name : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.companyName}</span></p><br />
            <p>Company Logo :<img style={{ width: '90px', height: '90px' }} src={modalShow.userData?.url} alt="Logo" /></p><br />
            <p>Describe Your Team and Background : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc1}</span></p><br />
            <p>Describe Your Company and Products : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc2}</span></p><br />
            <p>Describe the problem you are trying to solve : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc3}</span></p><br />
            <p>What is unique about your solution : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc4}</span></p><br />
            <p>What is value proposition for the customer : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc5}</span></p><br />
            <p>Who are your competitors and what is your competative advantage : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc6}</span> </p><br />
            <p>Explain your revenue model : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc7}</span></p><br />
            <p>What is the potential market size of the product : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc8}</span></p><br />
            <p>How do you market or plan to market your products and services : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc9}</span></p><br />
            <p>Type of Incubation needed : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.incubationtype}</span></p><br />
            <p>Upload a detailed business proposal : <span style={{ fontWeight: 'bolder' }}> {modalShow.userData?.textdesc10}</span></p><br />

          </div>
          {/* // }

          // })
  
          // } */}


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }





  return (
    <div className='adminbg'>
      <AdminHeader />
      <br />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className='container'>
        <h1 className="textfont">New Applicant List</h1>
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Company Name</th>
              <th>Company Details</th>
              <th></th>
              <th></th>

            </tr>
          </thead>
          <tbody>


            {applicants && applicants.map((applicant, index) => {
              //  console.log("USERDATAAAAA",applicant.userData);
              if (!applicant.isPending && applicant.userData) {

                return <tr key={applicant._id}>

                  <td>{index + 1}</td>
                  <td>{applicant.userData?.companyName}</td>
                  <td>{applicant.userData?.textdesc2}</td>
                  <td><button onClick={() => {
                    showDetail(applicant._id)
                  }} style={{ backgroundColor: 'black', color: 'white', borderRadius: '5px', border: 'none' }}>Open</button></td>
                  <td><button onClick={() => {
                    showpending(applicant._id)
                  }} style={{ backgroundColor: 'orange', color: 'white', borderRadius: '5px', border: 'none' }}>Pending</button></td>
                </tr>
              }
            })

            }


          </tbody>
        </Table>
      </div>


      <br />
      <div className='container'>
        <h1 className="textfont">Pending Applicant List</h1>
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Company Name</th>
              <th>Company Details</th>
              <th></th>
              <th></th>
              <th></th>


            </tr>
          </thead>
          <tbody>





            {applicants && applicants.map((applicant, index) => {
              if (applicant.isPending) {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{applicant.userData?.companyName}</td>
                  <td>{applicant.userData?.textdesc2}</td>
                  <td><button onClick={() => showDetail(applicant._id)} style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', border: 'none' }}>Open</button></td>
                 
                 
                  {applicant.isApprove ?
                    <td style={{ color: "green" }}>Approved</td> :
                   (applicant.isDisapprove? <td style={{ color: "green" }}>Disapproved</td>: <td><button onClick={() => approveApplicant(applicant._id)} style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px', border: 'none' }}>Approve</button></td>
                   )
                  }
                  {applicant.isApprove ?
                    <td style={{ color: "green" }}>Approved</td> :
                  ( applicant.isDisapprove? <td style={{ color: "green" }}>Disapproved</td>: <td><button onClick={() => disapproveApplicant(applicant._id)} style={{ backgroundColor: 'grey', color: 'white', borderRadius: '5px', border: 'none' }}>Disapprove</button></td>
                  )
                 }

                </tr>
              }
            })

            }


          </tbody>
        </Table>
      </div>
      <br /><br />
    </div>
  )
}

export default AdminPage


