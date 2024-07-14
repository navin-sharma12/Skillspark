import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailIcon from "../images/email.png";
import notifications from "../images/notifications.png";
import Navbar from "../Navbar/Navbar.js";
import login from "../images/login.png";

const ClassesUpdate = () => {
    const [item, setItem] = useState(JSON.parse(localStorage.getItem("itemData")));

    useEffect(() => {
        const parsedItemData = JSON.parse(localStorage.getItem("itemData"));
        setItem(parsedItemData);
    }, []);

    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const imageUrl=item.imageUrl;
    const email = item.emailid;
    const street = item.address.street;
    const city = item.address.city;
    const state = item.address.state;
    const zipcode = item.address.zip;
    const [pass, setPassword] = useState("");
    const confirmpass = pass;
    const classesContactNumber = item.classesContactNumber;
    const pointOfContactNumber = item.pointOfContactNumber;
    const classesType = item.classesType;
    const classesStartTime = item.classesStartTime;
    const classesEndTime = item.classesEndTime;
    const classesAmount = item.classesAmount;

    const loginUser = async (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/skillspark/updateClasses/${item._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: fullname,
                imageUrl: imageUrl,
                emailid: email,
                address: {
                    street: street,
                    city: city,
                    state: state,
                    zip: zipcode
                },
                password: pass,
                confirmPassword: confirmpass,
                classesContactNumber: classesContactNumber,
                pointOfContactNumber: pointOfContactNumber,
                classesType: classesType,
                classesStartTime: classesStartTime,
                classesEndTime: classesEndTime,
                classesAmount: classesAmount
            }),
        })
            .then((response) => {
                response.json();
                if (response.status === 200) {
                    navigate("/dashboard");
                } else {
                    alert("Classes not added");
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
                    <img src={login} alt="icon" />{JSON.parse(localStorage.getItem("userDetails")).name}

                </div>
                <hr />

                <div className='column_right_body'>
                    <div className='column_right_form'>
                        <h1>Update Page</h1>
                        {item ? (
                            <div class="item-details">
                                <p>Full Name:</p>
                                <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />

                                <p>Email:</p>
                                <input type="email" value={item.emailid} readOnly />

                                <p>Street:</p>
                                <input type="text" value={item.address.street} readOnly />

                                <p>City:</p>
                                <input type="text" value={item.address.city} readOnly />

                                <p>Password:</p>
                                <input type="text" value={pass} onChange={(e) => setPassword(e.target.value)} />

                                <p>State:</p>
                                <input type="text" value={item.address.state} readOnly />

                                <p>Zip Code:</p>
                                <input type="text" value={item.address.zip} readOnly />
                                <button className="book-a-table-btn scrollto" style={{ marginLeft: '180px' }} onClick={loginUser}>Submit</button>
                            </div>
                        ) : (
                            <p>No item selected</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ClassesUpdate;