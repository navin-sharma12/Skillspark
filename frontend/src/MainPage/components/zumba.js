import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import zumba from "../assets/img/zumba.png";
import zumba1 from "../assets/img/zumba1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Zumba = () => {

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
                        <img src={zumba} alt="icon" />
                        <p className="left">
                            <p className="left-title">Zumba Classes</p>
                            Join us and experience the unique fusion of international<br/>
                            rhythms, high-energy dance moves, and a supportive<br/>
                            community that will leave you feeling invigorated,<br/>
                            empowered, and ready to take on the world!<br/>
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={zumba1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Unleash your inner dancer with our high-energy<br />
                                Zumba classes!
                                </p>
                                Our dynamic routines, contagious beats, and lively atmosphere create<br />
                                a one-of-a-kind workout experience that's both fun and effective.<br />
                                Come move to the music, make new friends, and leave feeling refreshed<br />
                                and empowered!
                                <br />
                                <br />
                                ✓ Come for the workout, stay for the fun!
                                <br />
                                <br />
                                ✓ No prior dance experience required.
                                <br />
                                <br />
                                ✓ Easy-to-follow steps.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Zumba").map((card) => (
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

export default Zumba;
