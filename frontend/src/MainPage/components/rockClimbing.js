import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import rockClimbing from "../assets/img/rockClimbing.jpeg";
import rockClimbing1 from "../assets/img/rockClimbing1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const RockClimbing = () => {

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
                        <img src={rockClimbing} alt="icon" />
                        <p className="left">
                            <p className="left-title">Rock Climbing Classes</p>
                            Challenge yourself and conquer new heights with our rock<br />
                            climbing classes. Our expert instructors will guide you<br />
                            through the fundamentals of climbing and teach you valuable<br />
                            techniques to help you reach new heights. Join our vibrant<br />
                            community and conquer your fears while having fun and<br />
                            staying fit!
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={rockClimbing1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Climb high, conquer fears, find strength.
                                </p>
                                Rock climbing is an exhilarating sport that challenges both the<br />
                                mind and body. Our classes will teach you the fundamentals and<br />
                                improve your technique, balance, and strength.
                                <br />
                                <br />
                                ✓ Experience an adrenaline rush like no other.
                                <br />
                                <br />
                                ✓ Climb to new heights and challenge yourself.
                                <br />
                                <br />
                                ✓ Build strength and endurance while having fun.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "RockClimbing").map((card) => (
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
            <Footer />
            <BackToTop />
        </div>
    );
};

export default RockClimbing;