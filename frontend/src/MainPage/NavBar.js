import React from 'react';
import { Link } from "react-router-dom";
import logo from "./assets/img/Skillspark.png";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

export default function CustomNavbar() {
    return (
        <div className='classBody'>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="logo me-auto">
                        <h1>
                            <img src={logo} alt='logo' />
                        </h1>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a href="/" className="nav-link scrollto">Home</a></li>
                            <li><a href="/#about" className="nav-link scrollto">About</a></li>
                            <li><a href="/#why-us" className="nav-link scrollto">Why?</a></li>
                            <li><a href="/#gallery" className="nav-link scrollto">Gallery</a></li>
                            <li className="dropdown">
                                <Link href="#events"><span>Classes</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li className="dropdown">
                                        <Link href="#"><span>Dance</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/salsa">Salsa</Link></li>
                                            <li><Link to="/hip-hop">Hip-Hop</Link></li>
                                            <li><Link to="/ballet">Ballet</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#"><span>Cooking</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/baking">Baking</Link></li>
                                            <li><Link to="/healthy-cooking">Healthy Cooking</Link></li>
                                            <li><Link to="/kids-cooking">Kids Cooking</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#"><span>Fitness</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/zumba">Zumba</Link></li>
                                            <li><Link to="/aerobics">Aerobics</Link></li>
                                            <li><Link to="/pilates">Pilates</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#"><span>Outdoor</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/hiking">Hiking</Link></li>
                                            <li><Link to="/rock-climbing">Rock Climbing</Link></li>
                                            <li><Link to="/horse-riding">Horse Riding</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#"><span>Sports</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/cricket">Cricket</Link></li>
                                            <li><Link to="/football">Football</Link></li>
                                            <li><Link to="/soccer">Soccer</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#"><span>Arts and Crafts</span>
                                            <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/painting">Painting</Link></li>
                                            <li><Link to="/knitting">Knitting</Link></li>
                                            <li><Link to="/pottery">Pottery</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <Link to="/loginAdmin">
                        <button className="book-a-table-btn scrollto" type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Sign In">
                            Sign In
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
};