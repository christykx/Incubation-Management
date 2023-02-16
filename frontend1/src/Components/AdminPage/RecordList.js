import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AdminHeader from './AdminHeader';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import './RecordList.css'

function RecordList() {

    const [applicants, setapplicants] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/admin/applicantlist').then((response) => {

            console.log("response.data", response.data);

            setapplicants(response.data)
            console.log("Applicants oooooooooo", applicants);
            // PostDetails(response.data)

        }).catch((err) => {
            console.log(err.message);
        })

    }, [])



    return (
        <div>
            <AdminHeader />
            <br />
            <h1 className='textfont' style={{ textAlign: 'center' }}>RECORD LIST</h1>
            <br />
            <div className='container' >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Company Name</th>
                            <th>Company Details</th>
                            <th>Pending</th>
                            <th>Under Process</th>
                            <th>Approved</th>

                        </tr>
                    </thead>
                    <tbody>
                        {applicants && applicants.map((applicant, index) => {
                            //  console.log("USERDATAAAAA",applicant.userData);
                            if (applicant.isPending && applicant.userData) {

                                return <tr key={applicant._id}>
                                    <td>{index + 1}</td>
                                    <td>{applicant.userData?.companyName}</td>
                                    <td>{applicant.userData?.textdesc2}</td>


                                    {
                                        applicant.isDisapprove ?
                                            <td style={{ color: 'red' }}>Disapproved</td>
                                            : (applicant.isPending && <td><ProgressBar style={{ width: '120%' }} striped variant="danger" now={100} /></td>)
                                    }

                                    {
                                        applicant.isDisapprove ?
                                            <td style={{ color: 'red' }}>Disapproved</td>
                                            : (applicant.isApprove && <td><ProgressBar style={{ width: '115%' }} striped variant="warning" now={100} /></td>)
                                    }

                                    {
                                        applicant.isDisapprove ?
                                            <td style={{ color: 'red' }}>Disapproved</td>
                                            : (applicant.isApprove && <td><ProgressBar variant="success" now={100} /></td>)
                                    }


                                    {/*                                     
                             {applicant.isPending && <td><ProgressBar style={{ width: '120%' }} striped variant="danger" now={100} /></td>}
                             {applicant.isApprove && <td><ProgressBar style={{ width: '115%' }} striped variant="warning" now={100} /></td>}
                             {applicant.isApprove && <td><ProgressBar variant="success" now={100} /></td>} */}

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

export default RecordList

