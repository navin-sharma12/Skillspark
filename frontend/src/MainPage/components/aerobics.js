import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import aerobics from "../assets/img/aerobics.png";
import aerobics1 from "../assets/img/aerobics1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Aerobics = () => {

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
                        <img src={aerobics} alt="icon" />
                        <p className="left">
                            <p className="left-title">Aerobics Classes</p>
                            Aerobics is not just a workout - it's a community of<br/>
                            people who are passionate about fitness and having fun.<br/>
                            You'll have the opportunity to connect with others and<br/>
                            make new friends while improving your health and fitness.
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={aerobics1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Feel energized, alive and accomplished!
                                </p>
                                Sweat your way to a fitter you with our high-energy aerobics classes!<br />
                                Get your heart pumping and your muscles moving in a fun and supportive<br />
                                group environment. Join us today and experience the joy of a healthy body<br />
                                and mind!
                                <br />
                                <br />
                                ✓ Boosts endurance and overall health.
                                <br />
                                <br />
                                ✓ Enhances coordination and agility.
                                <br />
                                <br />
                                ✓ Variety of moves to keep it interesting.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Aerobics").map((card) => (
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

export default Aerobics;
