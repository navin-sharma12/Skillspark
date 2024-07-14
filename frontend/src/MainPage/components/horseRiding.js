import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import horseRiding from "../assets/img/horseRiding.png";
import horseRiding1 from "../assets/img/horseRiding1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const HorseRiding = () => {

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
                        <img src={horseRiding} alt="icon" />
                        <p className="left">
                            <p className="left-title">Horse Riding Classes</p>
                            Experience the thrill of horseback riding with our expert<br />
                            instructors, as you learn the fundamentals of horsemanship<br />
                            and connect with these magnificent creatures. Join our<br />
                            community and ride with confidence, while discovering the<br />
                            beauty of nature and enjoying a unique bonding experience<br />
                            with your equine partner.<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={horseRiding1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Experience the thrill of horse riding and connect<br />
                                with nature through our expert-led classes.
                                </p>
                                Saddle up and explore the world of horse riding with our expert<br />
                                instructors. Whether you're a beginner or experienced rider, our<br />
                                classes will teach you essential skills and techniques to improve<br />
                                your riding ability and build a strong connection with your horse.<br />
                                Join our community and experience the joy and freedom of horseback<br />
                                riding!
                                <br />
                                <br />
                                ✓ Experience the thrill of riding in the great outdoors.
                                <br />
                                <br />
                                ✓ Join a supportive community of fellow horse riders.
                                <br />
                                <br />
                                ✓ Improve your balance, posture and control while horse riding.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "HorseRiding").map((card) => (
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

export default HorseRiding;
