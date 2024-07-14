import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Class/Styles/css/main.css";
import { Link } from "react-router-dom";

const App = ({ ...props }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/skillspark/loginAdmin", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailid: email,
                password: pass,
            }),
        })
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                    console.log("data")
                    response.json().then(data => {
                        localStorage.setItem('userDetails', JSON.stringify(data));
                        props.handleLogin(true);
                        navigate("/dashboard");
                    });
                } else {
                    alert("Invalid Username or Password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={pass} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                            <p className="forgot-password mb-0 ms-auto">
                                Forgot <Link to="#">password?</Link>
                            </p>
                        </div>
                        <br></br>
                        <div className="d-grid">
                            <button type="submit" className="custom-btn book-a-table-btn scrollto" onClick={loginUser}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
