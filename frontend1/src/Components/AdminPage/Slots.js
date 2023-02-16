import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-grid-system';

import axios from 'axios';

function SlotsPage() {


    const [show, setShow] = useState(false);

    const [option, setOption] = useState()
    const [slots, setslots] = useState()

    const [slotrows, setslotrows] = useState([])
    const [storeid, setstoreid] = useState()
    const [slotrowsbooked, setslotrowsbooked] = useState()

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

    }, [slots], [slotrows], [storeid], [applicants], [slotrowsbooked])


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
        console.log(storeid, "IDDDDDDDDDDD stored sucessssssssssssssss");
        const id = storeid;
        console.log(id, "SLOOOOOOOOTTTTTTTT IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
        axios.get(`http://localhost:3001/admin/slotbox/${id}`).then((response) => {

            console.log("############## Slot box Booked", response.data.value);
            setslotrowsbooked(response.data.value)

        }).catch((err) => console.log(err))

    }

    console.log(slotrowsbooked, "*******************************************");

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
                <div style={{ display: 'flex', textAlign:'center', justifyContent: 'space-between', flexWrap: 'wrap', paddingRight: '50px', paddingLeft: '60px'}} >
                    {slotrows.map((slot, index) => {

                        return <div key={index}>

                            {slot.isSlotboxbooked ? <div style={{ backgroundColor: "grey", width: '60px', height: '60px' }}></div> : <div name={slot.name} id={slot._id} onClick={handleShow} style={{ width: '60px', height: '60px', backgroundColor: 'orange', cursor: 'pointer', textAlign: 'center', paddingTop: '15px' }}>{slot.name}</div>}
                            <br />

                        </div>
                    })}
                </div>

            </div>




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

export default SlotsPage
