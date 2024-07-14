import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import hiphop from "../assets/img/hiphop.png";
import hiphop1 from "../assets/img/hiphop1.png";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Hiphop = () => {

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
                        <img src={hiphop} alt="icon" />
                        <p className="left">
                            <p className="left-title">Hiphop Classes</p>
                            Step into the world of urban dance with our Hiphop classes,<br />
                            where rhythm meets attitude, and movement becomes<br />
                            self-expression. Join our vibrant community and learn from<br />
                            the best instructors, while unleashing your inner creativity<br />
                            and having a blast on the dance floor!<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={hiphop1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Get your groove on with Hiphop!
                                </p>
                                Discover your groove with our high-energy Hip Hop classes that<br />
                                blend music, dance, and fitness for a unique and exciting workout.<br />
                                Let loose and express yourself while improving your coordination,<br />
                                stamina, and confidence. Join our community and get ready to<br />
                                dance like nobody's watching!
                                <br />
                                <br />
                                ✓ Music, rhythm, and dance - all in one Hiphop class.
                                <br />
                                <br />
                                ✓ Develop your own unique style and flair.
                                <br />
                                <br />
                                ✓ Build confidence and stage presence.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Hiphop").map((card) => (
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

export default Hiphop;
