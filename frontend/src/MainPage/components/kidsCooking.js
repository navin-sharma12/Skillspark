import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import kidsCooking from "../assets/img/kidsCooking.png";
import kidsCooking1 from "../assets/img/kidsCooking1.png";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const KidsCooking = () => {

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
                        <img src={kidsCooking} alt="icon" />
                        <p className="left">
                            <p className="left-title">Kids Cooking Classes</p>
                            Unlock your child's culinary potential with our fun and<br />
                            interactive Kids Cooking Classes. Our expert chefs will<br />
                            guide them through recipes, techniques, and kitchen safety,<br />
                            all while having a blast and making new friends in a<br />
                            welcoming environment.<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={kidsCooking1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Discover the joy of cooking with our fun-filled Kids Cooking Classes!
                                </p>
                                Cook up some fun with our Kids Cooking Classes! Our experienced<br />
                                chefs will guide your little ones through the world of culinary<br />
                                arts, teaching them valuable kitchen skills while igniting their<br />
                                passion for food and creativity. Join our community and watch<br />
                                your children blossom into mini chefs!
                                <br />
                                <br />
                                ✓ Valuable life skills that last a lifetime.
                                <br />
                                <br />
                                ✓ Promotes healthy eating habits and food safety.
                                <br />
                                <br />
                                ✓ Builds independence, confidence, and creativity.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "KidsCooking").map((card) => (
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

export default KidsCooking;
