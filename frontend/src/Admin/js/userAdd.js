import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailIcon from "../images/email.png";
import notifications from "../images/notifications.png";
import Navbar from "../Navbar/Navbar.js";
import login from "../images/login.png";

const Admin = () => {

    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDOB] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [confirmpass, setConfirmPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [emergencyContactNumber, setEmergencyContactNumber] = useState("");


    const loginUser = async (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/skillspark/addUser`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                dob: dob,
                address: {
                    street: street,
                    city: city,
                    state: state,
                    zip: zipcode
                },
                emailid: email,
                password: pass,
                confirmPassword: confirmpass,
                contactNumber: contactNumber,
                emergencyContact: emergencyContactNumber
            }),
        })
            .then((response) => {
                response.json();
                if (response.status == 200) {
                    navigate("/dashboard");
                } else {
                    alert("Invalid Username or Password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="column_right">
                <div className="icons">
                    <span className='multicolored-label'>Admin</span>
                    <img className="email" src={emailIcon} alt="icon" />
                    <img className="notifications" src={notifications} alt="icon" />
                    <img src={login} alt="icon" /> {JSON.parse(localStorage.getItem("userDetails")).name}
                </div>
                <hr />
                <div className='column_right_body'>
                    <div className='column_right_form'>
                        <h1>Add Page</h1>
                        <div class="item-details">
                            <p>Full Name:</p>
                            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

                            <p>Email:</p>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <p>Street:</p>
                            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

                            <p>City:</p>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

                            <p>Password:</p>
                            <input type="text" value={pass} onChange={(e) => setPassword(e.target.value)} />

                            <p>State:</p>
                            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />

                            <p>Zip Code:</p>
                            <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                            <button className="book-a-table-btn scrollto" style={{ marginLeft: '180px' }} onClick={loginUser}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;