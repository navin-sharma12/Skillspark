import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import Card from "./Card.jsx";
import ballet from "../assets/img/ballet.png";
import ballet1 from "../assets/img/ballet1.jpeg";
import instagram from "../../Admin/images/instagram.png";
import { Link } from "react-router-dom";

const Ballet = () => {

    const [cards, setClasses] = useState([]);

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

    return (
        <div>
            <NavBar />
            <div className="main-outer-container">
                <div className="salsa-container">
                    <div className="banner_section">
                        <img src={ballet} alt="icon" />
                        <p className="left">
                            <p className="left-title">Ballet Classes</p>
                            Ballet is a graceful and elegant art form that requires precision<br />
                            and strength. Experience the beauty of movement and express<br />
                            yourself through dance by exploring the world of ballet.<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={ballet1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Graceful Movement: Experience the Beauty of Ballet
                                </p>
                                Step into the graceful world of ballet with our ballet classes,<br />
                                where precision meets artistry, and movement becomes storytelling.<br />
                                Join our welcoming community and learn from our experienced<br />
                                instructors, while enhancing your technique and exploring your<br />
                                passion for dance.
                                <br />
                                <br />
                                ✓ Develop strength and poise with our ballet program.
                                <br />
                                <br />
                                ✓ Cultivate poise and elegance through ballet.
                                <br />
                                <br />
                                ✓ Experience the artistry of ballet and its rich history.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Ballet").map((card) => (
                                <div className="display-card-container" key={card.id}>
                                    <div className="display-card-img">
                                        <img src={card.imageUrl} alt="icon" />
                                    </div>

                                    <h3>{card.title}</h3>
                                    <p id="amount" style={{ fontWeight: 'bold' }}> ${card.classesAmount}</p>


                                    <b><p>{card.fullname}</p></b>
                                    <p><i className='bx bxs-phone'></i> +1 &nbsp;{card.classesContactNumber}</p>
                                    <p><i className='bx bx-map'></i> {card.address.street}, {card.address.city}, {card.address.state}, {card.address.zip}</p>
                                    <p><i className='bx bx-time-five'></i> {card.classesStartTime}</p>
                                    <p><i className='bx bx-time'></i> {card.classesEndTime}</p>
                                    <button className="book-a-table-btn scrollto salsa-button">Select</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <footer id="footer">
                <div className="container">
                    <h3>Skill Spark</h3>
                    <p>Experience the freedom of variety with Skill Spark</p>
                    <div className="social-links">
                        <Link to="/#" className="twitter">
                            <i className="bx bxl-twitter"></i>
                        </Link>
                        <Link to="/#" className="facebook">
                            <i className="bx bxl-facebook"></i>
                        </Link>
                        <Link to="/#" className="instagram">
                            <i className="bx bxl-instagram"></i>
                        </Link>
                        <Link to="/#" className="google-plus">
                            <i className="bx bxl-skype"></i>
                        </Link>
                        <Link to="/#" className="linkedin">
                            <i className="bx bxl-linkedin"></i>
                        </Link>
                    </div>
                    <div className="copyright">
                        &copy; Copyright{" "}
                        <strong>
                            <span style={{ color: "#ffb03b" }}>Skill Spark</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                </div>
            </footer>
            <Link
                to="/#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </Link>
        </div>
    );
};

export default Ballet;
