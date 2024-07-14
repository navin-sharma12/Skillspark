import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import baking from "../assets/img/baking.png";
import baking1 from "../assets/img/baking1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Baking = () => {

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
                        <img src={baking} alt="icon" />
                        <p className="left">
                            <p className="left-title">Baking Classes</p>
                            Enter the delicious world of baking, where science and art<br />
                            collide to create delectable treats. Indulge your senses and<br />
                            master the art of pastry, bread, and cake-making, while<br />
                            unlocking the secrets of the oven and creating your own<br />
                            signature recipes.
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={baking1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                    Bake your way to happiness with our fun and<br />
                                    delicious Baking classes!
                                </p>
                                Discover the magic of baking with our classes, where flour, sugar, and<br />
                                butter come together to create delicious masterpieces. Join our community<br />
                                of bakers and learn from the best instructors, while unlocking your<br />
                                creativity in the kitchen!
                                <br />
                                <br />
                                ✓ Bake your way to perfection
                                <br />
                                <br />
                                ✓ Unleash your inner baker with our baking class
                                <br />
                                <br />
                                ✓ Discover the magic of baking with our expert guidance
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Baking").map((card) => (
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

export default Baking;
