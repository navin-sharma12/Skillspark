import logo from "../images/Skillspark.png";
import dashboard from "../images/dashboard.png";
import admin from "../images/admin.png";
import classes from "../images/classes.png";
import user from "../images/user.png";
import "../Styles/css/style.css";
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    function clearStroage() {
        localStorage.clear();
        navigate("/")
    }
    return (
        <div>
            <div className="column_left">
                <nav>
                    <img className="logo" src={logo} alt="icon" />
                    <br /><hr className="hr-navbar" />
                    <ul>
                        <li className="dashboard">
                            <img src={dashboard} alt="icon" />&nbsp;
                            <Link to="/dashboard">Dashboard</Link>
                        </li><br />
                        <li className="admin-details">
                            <img src={admin} alt="icon" />&nbsp;
                            <Link to="/admin">Admin Details</Link>
                        </li><br />
                        <li className="classes-details">
                            <img src={classes} alt="icon" />&nbsp;
                            <Link to="/classes">Classes Details</Link>
                        </li><br />
                        <li className="classes-details">
                            <img src={classes} alt="icon" />&nbsp;
                            <Link to="/classesApproval">Classes Approval</Link>
                        </li><br />
                        <li className="user-details">
                            <img src={user} alt="icon" />&nbsp;
                            <Link to="/user">User Details</Link>
                        </li><br />
                        <hr className="hr-navbar"></hr>
                        <button className="btn-logout" onClick={clearStroage}>
                            Logout
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    )
}