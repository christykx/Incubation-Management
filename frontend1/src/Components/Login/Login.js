import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Login.css';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { AuthContext } from '../../authContext/AuthContext';
import axios from 'axios';


function Login() {

  const { currentUser } = useContext(AuthContext)


  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const [error, seterror] = useState({});
  const [issubmit, setissubmit] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    seterror(validate(email, password));
    setissubmit(true)
    // const {name,phone,email,password}=user

  }






  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && issubmit) {
      const details = {
        email: email,
        password: password,

      }

      login(details).then((response) => {
        console.log("detailssssss", details);


        console.log(response, "KItti poiiiiiiiiiiiiiiii");
        console.log(response.userid, "KItti poiiiiiiiiiiiiiiii");

        console.log("KItti poiiiiiiiiiiiiiiii");

        // console.log("detailssssss",details._id);

        let id = response.userid
        axios.get(`http://localhost:3001/users/login/${id}`).then((res) => {
          console.log("Login details", res.data);

         { res.data.userData ? navigate("/formsubmit") : navigate("/userpage")}

          // setModalShow(res.data, true)
          //  console.log(modalShow,'mmmmmmmmmm');
        })

      }).catch((err) => {     
        console.log("Hoiiiiiiiiiiii");
        console.log("Errorrr Alertt",err.response.data);   
        // alert(err.response.data)   
        console.log("-----login errrrr message---", err);

      }) 


    }

  }, [error])


  const validate = (email, password) => {
    const errors = {}

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
      errors.email = "Email id is required"
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format"
    }
    if (!password) {
      errors.password = "Password is required"
    } else if (password < 4) {
      errors.password = "Password must be more than 1 characters";
    }
    return errors;
  }



  return (

    <div className='loginbg' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {/* <h1>LOGIN FORM</h1> */}
      <div style={{ marginTop: '80px' }}>
        <img style={{ width: '100%' }} src='https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg' alt='homeimage' />
      </div>
      <div className="loginParentDiv" col-md-6 col-sm-12 style={{ marginTop: '10%' }}>
        <h1 style={{ color: '#002f34', textAlign: 'center' }} className="textfont">Login Here</h1>
        <form style={{ textAlign: 'center' }}>
          <br />
          <label htmlFor="fname">Email</label>
          <br />

          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <p style={{ color: 'red' }}>{error.email}</p>

          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <p style={{ color: 'red' }}>{error.password}</p>

          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
        <p style={{ textAlign: 'center' }} >Don't have an account? <span style={{ cursor: 'pointer', color: 'blue' }}
          onClick={() => {
            navigate('/signup')
          }}>Signup</span></p>
      </div>

    </div>

  )
}

export default Login
