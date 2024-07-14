import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import cricket from "../assets/img/cricket.jpeg";
import cricket1 from "../assets/img/cricket1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Cricket = () => {

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
                        <img src={cricket} alt="icon" />
                        <p className="left">
                            <p className="left-title">Cricket Classes</p>
                            Cricket is a dynamic sport that demands precision, coordination,<br />
                            and strategy. With its rich history and global following,<br />
                            cricket offers a unique opportunity to connect with a diverse<br />
                            community and experience the thrill of competition.
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={cricket1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Get ready to swing and hit it out of the park with our Cricket classes!
                                </p>
                                Unleash your competitive spirit and hone your cricket skills with<br />
                                our cricket classes, where every match is a new challenge and<br />
                                every ball is an opportunity to shine. Join our team of passionate<br />
                                players and experience the thrill of the game while building<br />
                                camaraderie and sportsmanship.
                                <br />
                                <br />
                                ✓ Learn the art of spin and pace bowling.
                                <br />
                                <br />
                                ✓ Improve your fitness level and endurance.
                                <br />
                                <br />
                                ✓ Train your mind to stay focused and calm under pressure.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Cricket").map((card) => (
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

export default Cricket;
