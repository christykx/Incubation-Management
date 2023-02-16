import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserHeader from '../UserPage/UserHeader'
import { useCookies } from 'react-cookie'
import Axios from 'axios'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


function FormSubmit() {
  return (
    <div>
      <UserHeader />
      <img style={{ width: '100px', height: '100px', marginLeft: '45%', marginTop: '40px' }} src="https://sourcecloud.co.uk/wp-content/uploads/2020/01/kisspng-business-internet-service-organization-computer-so-web-page-green-registration-success-button-5aa99d9f3957f7.4709551515210653752349.png" alt="success image" />
      <br /><br />
      <h1 style={{ textAlign: 'center' }}>Your application completed  successfully</h1>
    </div>
  )
}

export default FormSubmit

