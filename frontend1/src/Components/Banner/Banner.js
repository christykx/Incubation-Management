import React from 'react'
import {useNavigate} from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }} className='bannerbg'>
            <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <img style={{ width: '100%' }} src='https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg' alt='homeimage' />
            </div>
            <div style={{textAlign:'center',marginTop:'14% '}}>
                <h1>Welcome</h1>
                <br/>
               <div ><button style={{border:'2px solid black',borderStyle:'dashed',backgroundColor:'white',padding:'2px'}} onClick={()=>{navigate('/login')}}>User Login</button></div>
                <br/>
                <div><button style={{border:'2px solid black',borderStyle:'dashed',backgroundColor:'white',padding:'2px'}} onClick={()=>{navigate('/admin')}}>Admin Login</button></div>

            </div>
        </div>
    )
}

export default Banner
