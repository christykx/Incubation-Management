import React from 'react'
import {useNavigate} from 'react-router-dom'

function AdminHeader() {
  const navigate=useNavigate()
  return (
    <div style={{ background:'#002f34',height:'50px'}} >
      <ul style={{display:'flex',justifyContent:'space-evenly',color:'white',paddingTop:'10px',fontWeight:'bolder',fontSize:'19px'}} className="textfont">
        <li style={{listStyle:'none',cursor:'pointer'}}  onClick={()=>{navigate('/adminpage')}}>
            Application List
        </li>
        <li style={{listStyle:'none',cursor:'pointer'}} onClick={()=>{navigate('/recordlist')}}>
            Record Track
        </li>
        <li style={{listStyle:'none',cursor:'pointer'}} onClick={()=>{navigate('/slots')}}>
            Booking Slots
        </li>
        <li style={{listStyle:'none',cursor:'pointer'}} onClick={()=>{navigate('/admin')}}>
            Logout 
        </li>
      </ul>
    </div>
  )
}

export default AdminHeader
