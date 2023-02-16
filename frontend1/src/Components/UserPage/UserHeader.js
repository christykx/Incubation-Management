import React from 'react'
import {useCookies} from 'react-cookie'

import {useNavigate} from 'react-router-dom'

function UserHeader() {
    const navigate=useNavigate()

    const logout=()=>{
      localStorage.removeItem("user")
      navigate('/')
    }
  return (
    <div style={{ background:'#002f34',height:'50px'}} >
      <ul>
      <li style={{listStyle:'none',cursor:'pointer',color:'white',textAlign:'right',padding:'10px'}} onClick={logout}>
            Logout 
        </li>
      </ul>    </div>
  )
}

export default UserHeader
