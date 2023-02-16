import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'



function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const [error, seterror] = useState({});
    const [issubmit, setissubmit] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        seterror(validate(email, password));
        setissubmit(true)
        // const {name,phone,email,password}=user

    }



    useEffect(() => {
        console.log(error);
        if (Object.keys(error).length === 0 && issubmit) {
            // console.log(user);
            Axios.post('http://localhost:3001/admin/adminlogin', {
                // name: user.name,
                // phone: user.phone,
                email: email,
                password: password
            }).then((response) => {
                if (response.status) {
                    // alert("success")
                    navigate('/adminpage')
                }
                else {

                    alert("Something went wrong")
                }
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
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {/* <h1>LOGIN FORM</h1> */}
            <div style={{ marginTop: '80px' }}>
                <img style={{ width: '100%' }} src='https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg' alt='homeimage' />
            </div>
            <div className="adminloginParentDiv" col-md-6 col-sm-12 style={{ marginTop: '10%' }}>
                <h1 style={{ color: '#002f34', textAlign: 'center' }} className="textfont">Admin Login</h1>
                <form style={{ textAlign: 'center' }}>
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />

                    <input
                        className="input"
                        type="email"
                        value={email}
                        style={{backgroundColor:'pink'}}
                        onChange={(e) => setEmail(e.target.value)}
                        id="fname"
                        name="email"
                        defaultValue="admin@gmail.com"
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
                        style={{backgroundColor:'rgb(247, 229, 232)'}}
                        onChange={(e) => setPassword(e.target.value)}
                        id="lname"
                        name="password"
                        defaultValue="1234"
                    />
                    <br />
                    <p style={{ color: 'red' }}>{error.password}</p>

                    <br />
                    <button onClick={handleLogin}>Login</button>
                </form>

            </div>

        </div>
    )
}

export default AdminLogin
