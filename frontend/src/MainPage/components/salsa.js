import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import salsa from "../assets/img/salsa.png";
import salsa1 from "../assets/img/salsa1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Salsa = () => {

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
                        <img src={salsa} alt="icon" />
                        <p className="left">
                            <p className="left-title">Salsa Classes</p>
                            Step into the rhythm of Salsa and connect with others<br />
                            while discovering a new passion for dance and culture.<br />
                            Join our community and get ready to move to the beat<br />
                            of the music like never before!<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={salsa1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                    Find your rhythm with Salsa!
                                </p>
                                Salsa is a popular Latin dance that involves intricate footwork
                                and
                                <br />
                                energetic hip movements. Attending a salsa className is a great way
                                to learn
                                <br />
                                the fundamentals of the dance and improve your coordination and
                                balance.
                                <br />
                                <br />
                                ✓ Perfect excuse for public hip-shaking.
                                <br />
                                <br />
                                ✓ Meet new people without awkward swaying at parties.
                                <br />
                                <br />✓ Burn calories while having fun, a workout disguised as a
                                dance.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Salsa").map((card) => (
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

export default Salsa;
