import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import salsa from "../assets/img/hiking.png";
import salsa1 from "../assets/img/hiking1.jpg";
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
                            <p className="left-title">Hiking Classes</p>
                            Outdoor activities are recreational pursuits that take place<br />
                            in natural settings, such as hiking, rock climbing.They offer<br />
                            exercise, adventure & appreciation of nature & can be<br />
                            enjoyed alone or with others.
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
                                Get your boots on: Join our Hiking Adventures!
                                </p>
                                Hiking is walking through natural pathways, ranging from easy strolls<br />
                                to challenging expeditions, to promote fitness and explore nature.<br />
                                Hikers carry gear and provisions for safety and comfort.
                                <br />
                                <br />
                                ✓ Explore nature's beauty through outdoor activity
                                <br />
                                <br />
                                ✓ Enjoy physical exercise while walking on natural trails
                                <br />
                                <br />
                                ✓ Carry essential gear and provisions for a safe and comfortable journey
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Hiking").map((card) => (
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
