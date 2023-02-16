import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './UserHeader'
import { useNavigate } from 'react-router-dom'
import UserHeader from './UserHeader';
import './UserPage.css'


function UserPage() {
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [companyLogo, setcompanyLogo] = useState('');

    const [textdesc1, settextdesc1] = useState('')
    const [textdesc2, settextdesc2] = useState('')
    const [textdesc3, settextdesc3] = useState('')
    const [textdesc4, settextdesc4] = useState('')
    const [textdesc5, settextdesc5] = useState('')
    const [textdesc6, settextdesc6] = useState('')
    const [textdesc7, settextdesc7] = useState('')
    const [textdesc8, settextdesc8] = useState('')
    const [textdesc9, settextdesc9] = useState('')
    const [incubationtype, setincubationtype] = useState('')
    const [textdesc10, settextdesc10] = useState('')



    const [error, seterror] = useState({});
    const [issubmit, setissubmit] = useState(false);

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        seterror(validate(name,
            address,
            city,
            state,
            email,
            phone,
            companyName,
            companyLogo,
            textdesc1,
            textdesc2,
            textdesc3,
            textdesc4,
            textdesc5,
            textdesc6,
            textdesc7,
            textdesc8,
            textdesc9,
            incubationtype,
            textdesc10
        ));
        setissubmit(true)

    }


    useEffect(() => {
        console.log(error);
        if (Object.keys(error).length === 0 && issubmit) {
            // console.log(user);
            console.log(name,
                address,
                city,
                state,
                email,
                phone,
                companyName,
                companyLogo,
                textdesc1,
                textdesc2,
                textdesc3,
                textdesc4,
                textdesc5,
                textdesc6,
                textdesc7,
                textdesc8,
                textdesc9,
                incubationtype,
                textdesc10);
            axios.post('http://localhost:3001/users/userpage', {
                name: name,
                address: address,
                city: city,
                state: state,
                email: email,
                phone: phone,
                companyName: companyName,
                companyLogo: companyLogo,
                textdesc1: textdesc1,
                textdesc2: textdesc2,
                textdesc3: textdesc3,
                textdesc4: textdesc4,
                textdesc5: textdesc5,
                textdesc6: textdesc6,
                textdesc7: textdesc7,
                textdesc8: textdesc8,
                textdesc9: textdesc9,
                incubationtype,
                textdesc10: textdesc10

            }).then((response) => {

                if (response.status) {
                    console.log(response.data,"Dataaaaa");
                    console.log(response.status);

                    console.log("Hellooooooooo");
                    alert("Application submitted successfully")
                    navigate('/formsubmit')
                }
                else {
                    alert("Something went wrong")
                }
            }).catch((err) => {     
                console.log(err);   
                alert(err.response.data)   
                console.log("-----errrrr---", err.response.data);
        
              }) 


            // navigate('/form')
        }
    }, [error])

    const validate = (name,
        address,
        city,
        state,
        email,
        phone,
        companyName,
        companyLogo,
        textdesc1,
        textdesc2,
        textdesc3,
        textdesc4,
        textdesc5,
        textdesc6,
        textdesc7,
        textdesc8,
        textdesc9,
        incubationtype,
        textdesc10) => {
        const errors = {}

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!name) {
            errors.name = "Username is required"
        }
        if (!address) {
            errors.address = "Address is required"
        }
        if (!city) {
            errors.city = "City is required"
        }
        if (!state) {
            errors.state = "State is required"
        }
        if (!phone) {
            errors.phone = "Phone number is required"
        }

        if (!companyName) {
            errors.companyName = "Company Name is required"
        }
        if (!companyLogo) {
            errors.companyLogo = "Choose a company logo"
        }
        if (!email) {
            errors.email = "Email id is required"
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format"
        }
        if (!textdesc1) {
            errors.textdesc1 = "Description is required"
        }
        if (!textdesc2) {
            errors.textdesc2 = "Description is required"
        } if (!textdesc3) {
            errors.textdesc3 = "Description is required"
        } if (!textdesc4) {
            errors.textdesc4 = "Description is required"
        } if (!textdesc5) {
            errors.textdesc5 = "Description is required"
        } if (!textdesc6) {
            errors.textdesc6 = "Description is required"
        } if (!textdesc7) {
            errors.textdesc7 = "Description is required"
        } if (!textdesc8) {
            errors.textdesc8 = "Description is required"
        } if (!textdesc9) {
            errors.textdesc9 = "Description is required"
        } if (!incubationtype) {
            errors.incubationtype = "Select any incubation type"
        } if (!textdesc10) {
            errors.textdesc10 = "Description is required"
        }

        return errors;
    }



    return (
        <div className='formbg'>
            <UserHeader />
            <h1 style={{ textAlign: 'center' }} className="textfont">APPLICATION FOR INCUBATION</h1>
            <br />
            <br />

            <div>
                <form>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20%', paddingRight: '35%' }}>
                        <label htmlFor="name" >Name<span style={{ color: 'red' }}>*</span></label>
                        <label htmlFor="address">Address<span style={{ color: 'red' }}>*</span></label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            id="name"
                            name="name"
                            defaultValue="christy"
                        />
                        <p style={{ color: 'red' }}>{error.name}</p>
                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={address}
                            onChange={(e) => setaddress(e.target.value)}
                            id="address"
                            name="address"
                            defaultValue="123 abc"
                        />
                        <p style={{ color: 'red' }}>{error.address}</p>

                    </div>


                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20%', paddingRight: '36.5%' }}>
                        <label htmlFor="city">City<span style={{ color: 'red' }}>*</span></label>
                        <label htmlFor="state">State<span style={{ color: 'red' }}>*</span></label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={city}
                            onChange={(e) => setcity(e.target.value)}
                            id="city"
                            name="city"
                            defaultValue="thrissur"
                        />
                        <p style={{ color: 'red' }}>{error.city}</p>

                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={state}
                            onChange={(e) => setstate(e.target.value)}
                            id="state"
                            name="state"
                            defaultValue="kerala"
                        />
                        <p style={{ color: 'red' }}>{error.state}</p>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20%', paddingRight: '34%' }}>
                        <label htmlFor="email">Email<span style={{ color: 'red' }}>*</span></label>
                        <label htmlFor="phone">Phone no<span style={{ color: 'red' }}>*</span></label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            defaultValue="abc@gmail.com"
                        />
                        <p style={{ color: 'red' }}>{error.email}</p>

                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            id="phone"
                            name="phone"
                            defaultValue="234223232"
                        />
                        <p style={{ color: 'red' }}>{error.phone}</p>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20%', paddingRight: '31%' }}>
                        <label htmlFor="companyName">Company Name<span style={{ color: 'red' }}>*</span></label>
                        <label htmlFor="companyLogo">Company Logo<span style={{ color: 'red' }}>*</span></label>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                        <input
                            className="input"
                            type="text"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={companyName}
                            onChange={(e) => setcompanyName(e.target.value)}
                            id="companyName"
                            name="companyName"
                            defaultValue="abc"
                        />
                        <p style={{ color: 'red' }}>{error.companyName}</p>

                        <input
                            className="input"
                            type="file"
                            style={{ width: '20%', border: 'none', borderRadius: '5px' }}
                            value={companyLogo}
                            onChange={(e) => setcompanyLogo(e.target.value)}
                            id="companyLogo"
                            name="companyLogo"
                            defaultValue="companyLogo"
                        />
                        <p style={{ color: 'red' }}>{error.companyLogo}</p>

                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <label htmlFor="textdesc" style={{ paddingRight: '39%' }}>Describe Your Team and Background<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc1}
                            onChange={(e) => settextdesc1(e.target.value)}
                            id="textdesc"
                            name="textdesc1"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc1}</p>

                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '39%' }}>Describe Your Company and Products<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc2}
                            onChange={(e) => settextdesc2(e.target.value)}
                            id="textdesc"
                            name="textdesc2"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc2}</p>

                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '35%' }}>Describe the problem you are trying to solve<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc3}
                            onChange={(e) => settextdesc3(e.target.value)}
                            id="textdesc"
                            name="textdesc3"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc3}</p>

                    </div>

                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '39%' }}>What is unique about your solution?<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc4}
                            onChange={(e) => settextdesc4(e.target.value)}
                            id="textdesc"
                            name="textdesc4"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc4}</p>

                    </div>

                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '35%' }}>What is value proposition for the customer?<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc5}
                            onChange={(e) => settextdesc5(e.target.value)}
                            id="textdesc"
                            name="textdesc5"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc5}</p>

                    </div>

                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '21%' }}>Who are your competitors and what is your competative advantage?<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc6}
                            onChange={(e) => settextdesc6(e.target.value)}
                            id="textdesc"
                            name="textdesc6"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc6}</p>

                    </div>

                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '44%' }}>Explain your revenue model<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc7}
                            onChange={(e) => settextdesc7(e.target.value)}
                            id="textdesc"
                            name="textdesc7"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc7}</p>


                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '32%' }}>What is the potential market size of the product?<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc8}
                            onChange={(e) => settextdesc8(e.target.value)}
                            id="textdesc"
                            name="textdesc8"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc8}</p>

                    </div>


                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="textdesc" style={{ paddingRight: '23%' }}>How do you market or plan to market your products and services<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}
                            value={textdesc9}
                            onChange={(e) => settextdesc9(e.target.value)}
                            id="textdesc"
                            name="textdesc9"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc9}</p>

                    </div>

                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="radioselection" style={{ paddingRight: '45%' }}>Type of Incubation needed<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <br />

                        <div style={{ paddingRight: '48.1%' }}>
                            <input
                                className="input"
                                type="radio"
                                value="Physical Incubation"
                                onChange={(e) => incubationtype(e.target.value)}
                                id="radioselection"
                                name="incubationtype"
                                defaultValue=""
                            /> Physical Incubation
                        </div>
                        <div style={{ paddingRight: '49%' }}>
                            <input
                                className="input"
                                type="radio"
                                value="Virtual Incubation"
                                onChange={(e) => setincubationtype(e.target.value)}
                                id="radioselection"
                                name="incubationtype"
                                defaultValue=""
                            /> Virtual Incubation
                        </div>
                        <p style={{ color: 'red' }}>{error.incubationtype}</p>

                    </div>

                    <br />
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor="radioselection" style={{ paddingRight: '39%' }}>Upload a detailed business proposal<span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <textarea
                            className="input"
                            type="text"
                            style={{ width: '60%', border: 'none', borderRadius: '5px' }}

                            value={textdesc10}
                            onChange={(e) => settextdesc10(e.target.value)}
                            id="textdesc"
                            name="textdesc10"
                            defaultValue=""
                        />
                        <p style={{ color: 'red' }}>{error.textdesc10}</p>

                    </div>
                    <br /><br />
                    <div style={{ textAlign: 'center' }}>

                        <button onClick={handleSubmit} style={{ borderRadius: '6px', border: 'none', width: '90px', height: '40px', backgroundColor: 'orange' }}>Submit</button>
                    </div>

                    <br />
                    <br />
                    <br />

                </form>

            </div>

        </div>
    )
}

export default UserPage
