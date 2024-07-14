import React, { useState, useEffect } from 'react';
import email from "../images/email.png";
import notifications from "../images/notifications.png";
import Navbar from "../Navbar/Navbar.js";
import login from "../images/login.png";
import { useNavigate, Link } from 'react-router-dom';
import "../Styles/css/style.css";

const Admin = () => {
    const [data, setClasses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/skillspark/getAllClassesApproval", {
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

    const classesApproval = (id) => {
        const selectedClass = data.find((item) => item._id === id);

        fetch(`http://localhost:8080/skillspark/addClasses`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: selectedClass.fullname,
                imageUrl: selectedClass.imageUrl,
                email: selectedClass.email,
                password: selectedClass.password,
                confirmPassword: selectedClass.password,
                classesContactNumber: selectedClass.classesContactNumber,
                pointOfContactNumber: selectedClass.pointOfContactNumber,
                address: {
                    street: selectedClass.address.street,
                    city: selectedClass.address.city,
                    state: selectedClass.address.state,
                    zip: selectedClass.address.zip
                },
                classesType: selectedClass.classesType,
                classesStartTime: selectedClass.classesStartTime,
                classesEndTime: selectedClass.classesEndTime,
                classesAmount: selectedClass.classesAmount,
                classesApprovalStatus: "Approved",
                classesRating: selectedClass.classesRating,
                classesComment: selectedClass.classesComment
            }),
        })
            .then((response) => {
                response.json();
                if (response.status === 200) {
                    navigate("/dashboard");
                } else {
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleRejectClick = (id) => {
        fetch(`http://localhost:8080/skillspark/deleteClassesApproval/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                response.json();
                if (response.status === 200) {
                    navigate("/dashboard");
                }
            })
            .catch((err) => {
                console.log(err);
            });
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
                                <th>Contact Number</th>
                                <th>Classes Type</th>
                                <th>Amount</th>
                                <th>Approve</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.classesContactNumber}</td>
                                    <td>{item.classesType}</td>
                                    <td>{item.classesAmount}</td>
                                    <td>
                                        <button className="book-a-table-btn scrollto" onClick={() => classesApproval(item._id)}>Approve</button>
                                    </td>
                                    <td>
                                        <button className="book-a-table-btn scrollto" onClick={() => handleRejectClick(item._id)}>Reject</button>
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

export default Admin;