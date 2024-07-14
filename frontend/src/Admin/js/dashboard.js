import React from 'react';
import Navbar from "../Navbar/Navbar.js";
import login from "../images/login.png";
import notifications from "../images/notifications.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import email from "../images/email.png";
import user from "../images/dashboard_user.png";
import classes from "../images/dashboard_classes.png";
import income from "../images/dashboard_income.png";
import "../Styles/css/style.css";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="column_right">
                <div className="icons">
                    <span className='multicolored-label'>Dashboard</span>
                    <img className="email" src={email} alt="icon" />
                    <img className="notifications" src={notifications} alt="icon" />
                    <img src={login} alt="icon" /> {JSON.parse(localStorage.getItem("userDetails")).name}
                </div>
                <hr />
            </div>

            <div className='card-wrapper'>
                <div className='display-card-instagram'>
                    <img src={instagram} alt="ins" />
                    <h4>758K</h4>
                    <p>Posts</p>
                </div>
                <div className='display-card-twitter'>
                    <img src={twitter} alt="twitter" />
                    <h4>584K</h4>
                    <p>Followers</p>
                </div>
                <div className='display-card-facebook'>
                    <img src={facebook} alt="facebook" />
                    <h4>35K</h4>
                    <p>Friends</p>
                </div>
                <div className='display-card-user'>
                    <img src={user} alt="user" />
                    <h4>100K</h4>
                    <p>Current Users</p>
                </div>
                <div className='display-card-classes'>
                    <img src={classes} alt="class" />
                    <h4>100</h4>
                    <p>Current Classes</p>
                </div>
                <div className='display-card-classes'>
                    <img src={income} alt="income" />
                    <h4>$50K</h4>
                    <p>Total Income</p>
                </div>
            </div>
            <div className='progress-bar-container'>
                <div className='progress-dashboard'>
                    <div className='progress-header-dashboard'>
                        <p><b>Marketing Progress</b></p>
                        <hr />
                    </div>
                    <div className='my-progress-bar'>
                        <label>Facebook</label>
                        <div class="progress">
                            <div class="progress-bar w-25 progress-bar-striped" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <br />
                        <label>Instagram</label><br />
                        <div class="progress">
                            <div class="progress-bar w-75 progress-bar-striped bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div><br />
                        <label>Twitter</label><br />
                        <div class="progress">
                            <div class="progress-bar w-50 progress-bar-striped bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div><br />
                        <label>Other</label><br />
                        <div class="progress">
                            <div class="progress-bar w-25 progress-bar-striped bg-warning" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div><br/>
                    </div>
                </div>
                <div className='todo-container'>
                    <div className='todo-list'>
                        <div className='progress-header-dashboard'>
                            <p><b>To-Do List</b></p>
                            <hr className='hr'/>
                        </div>
                        <div className='todo-section-dashboard'>
                            <p className='todo-details vertical-line'>New requirement for project<br />
                                <b>10:00 AM</b></p>
                            <hr className='hr'/>
                            <p className='todo-details vertical-line1'>Team meeting<br />
                                <b>01:00 PM</b></p>
                            <hr className='hr'/>
                            <p className='todo-details vertical-line2'>Bug fixing<br />
                                <b>02:00 PM</b></p>
                            <hr className='hr'/>
                            <p className='todo-details vertical-line3'>Project presentation<br />
                                <b>04:00 PM</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}