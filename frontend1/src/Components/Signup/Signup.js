import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Signup.css';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'



function Signup() {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    })


    const [error, seterror] = useState({});
    const [issubmit, setissubmit] = useState(false);

    // const [username, setUsername] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate()

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })

    }

 




    const postData = (e) => {
        e.preventDefault();
        seterror(validate(user));
        setissubmit(true)
        // const {name,phone,email,password}=user
        
        // Axios.post('http://localhost:3001/users/signup', {
        //     name: user.name,
        //     phone: user.phone,
        //     email: user.email,
        //     password: user.password
        // }).then((response) => {
        //     if (response.status) {
        //         // alert("success")


        //         // navigate('/form')
        //     }
        //     else {
        //         alert("Something went wrong")
        //     }
      
        // })


    }


    useEffect(() => {
        console.log(error);
        if (Object.keys(error).length === 0 && issubmit) {
            console.log(user);


            Axios.post('http://localhost:3001/users/signup', {
                name: user.name,
                phone: user.phone,
                email: user.email,
                password: user.password
            },{
                withCredentials:true,
            }).then((response) => {
                if (response.status) {
                    // alert("success")
    
            alert("Registration Completed Successfully")
    
                    navigate('/login')
                }else{

                    console.log("erorr")
                    // alert("Email already exist");
                    // alert("Something went wrong")     
                }
          
            }).catch((err) => {     
                console.log(err);
                alert(err.response.data)   
                console.log("-----errrrr---", err);
        
              })  

            // navigate('/form')
        }
    }, [error])

    const validate = (values) => {
        const errors = {}

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.name) {
            errors.name = "Username is required"
        }
        if (!values.phone) {
            errors.phone = "Phone number is required"
        }
        if (!values.email) {
            errors.email = "Email id is required"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format"
        }
        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password < 4) {
            errors.password = "Password must be more than 1 characters";
        }
  
        return errors;
    }

    return (
        <div className='signupbg' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingBottom: '10px' }}>
            {/*    
            {Object.keys(error).length === 0 && issubmit ?
                (<h5 style={{ color: "green",textAlign:'center',border:'2px solid green', borderStyle:'dashed',padding:'5px'}}>Registration Completed Successfully</h5>)
                :(<pre>{}</pre>)
            }
   

            {Object.keys(error).length === 0 && issubmit ?
                (<h5 style={{ color: "green" }}>Registered Successfully</h5>)
                :(<pre>{}</pre>)
            }
    */}
            {/* <h1>LOGIN FORM</h1> */}
            <div style={{ marginTop: '80px' }}>
                <img style={{ width: '100%' }} src='https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg' alt='homeimage' />
            </div>
            <div className="loginParentDiv" col-md-6 col-sm-12 style={{ marginTop: '4%' }}>

                <h1 style={{ color: '#002f34', textAlign: 'center' }} className="textfont">Register Here</h1>
                <form method='POST' style={{ textAlign: 'center' }}>
                    <br />
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        style={{ backgroundColor: 'transparent' }}
                        className="input"
                        type="text"
                        value={user.name}
                        onChange={handleInputs}
                        name="name"
                        defaultValue="John"
                    />
                    <br />
                    <p style={{ color: 'red' }}>{error.name}</p>
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        style={{ backgroundColor: 'transparent' }}

                        className="input"
                        type="number"
                        value={user.phone}
                        onChange={handleInputs}
                        name="phone"
                        defaultValue="Doe"
                    />
                    <br />
                    <p style={{ color: 'red' }}>{error.phone}</p>

                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />

                    <input
                        style={{ backgroundColor: 'transparent' }}

                        className="input"
                        type="email"
                        value={user.email}
                        onChange={handleInputs}
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <p style={{ color: 'red' }}>{error.email}</p>

                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        style={{ backgroundColor: 'transparent' }}

                        className="input"
                        type="password"
                        value={user.password}
                        onChange={handleInputs}
                        name="password"
                        defaultValue="Doe"
                    />
                    <br />
                    <p style={{ color: 'red' }}>{error.password}</p>

                    <br />
                    <button onClick={postData}>Register</button>
                    {/* <button onClick={() => {
                        navigate('/form')
                    }}>Register</button> */}
                </form>
                <p style={{ textAlign: 'center' }}>Already have an account? <span style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => {
                        navigate('/')
                    }}>Login</span></p>
            </div>

        </div>

    )
}

export default Signup
