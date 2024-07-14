import React, { useState, useEffect } from 'react';
import email from "../images/email.png";
import notifications from "../images/notifications.png";
import Navbar from "../Navbar/Navbar.js";
import login from "../images/login.png";
import { useNavigate, Link } from 'react-router-dom';
import "../Styles/css/style.css";

const ClassesDetails = () => {
    const [data, setClasses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/skillspark/getAllClasses", {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const deleteClass = (id) => {
        fetch(`http://localhost:8080/skillspark/deleteClasses/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err);
            });
    };

    function handleUpdateClick(item) {
        // Store the item data into local storage
        localStorage.setItem("itemData", JSON.stringify(item));

        // Navigate to the update page
        navigate("/updateClasses");
    }

    return (
        <div>
            <Navbar />
            <div className="column_right">
                <div className="icons">
                    <span className='multicolored-label'>Admin</span>
                    <img className="email" src={email} alt="icon" />
                    <img className="notifications" src={notifications} alt="icon" />
                    <img src={login} alt="icon" /> {JSON.parse(localStorage.getItem("userDetails")).name}
                </div>
                <hr />
                <button className='admin-add book-a-table-btn scrollto'><Link to="/addAdmin">Add</Link></button>
                <br></br>
                <div className='column_admin'>
                    <table id="adminTable">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip Code</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.street}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.address.state}</td>
                                    <td>{item.address.zip}</td>
                                    <td>
                                        <button className="book-a-table-btn scrollto" onClick={() => deleteClass(item._id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button className="book-a-table-btn scrollto" onClick={() => handleUpdateClick(item)}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ClassesDetails;