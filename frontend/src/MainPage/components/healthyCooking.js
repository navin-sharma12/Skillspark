import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import healthyCooking from "../assets/img/healthycooking1.jpg";
import healthyCooking1 from "../assets/img/healthyCooking.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const HealthyCooking = () => {

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
                        <img src={healthyCooking} alt="icon" />
                        <p className="left">
                            <p className="left-title">Healthy Cooking Classes</p>
                            Transform your meals with Healthy Cooking: where wholesome<br /> 
                            ingredients meet delicious flavors, and every dish becomes a<br />  
                            step towards a healthier, happier you. Join our community and<br />  
                            discover the art of nutritious cooking, while expanding your<br /> 
                            culinary horizons and savoring every bite.<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={healthyCooking1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Nourish your body and soul with the art of healthy cooking.
                                </p>
                                Healthy cooking is the skillful use of nutritious ingredients and<br />
                                techniques to preserve natural goodness, including whole foods, lean proteins,<br />
                                and healthy fats, while avoiding processed and high-calorie ingredients. 
                                <br />
                                <br />
                                ✓ Healthy cooking, healthy living
                                <br />
                                <br />
                                ✓ Transform your kitchen, transform your health
                                <br />
                                <br />
                                ✓ Nourish your body with healthy cooking
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Healthy Cooking").map((card) => (
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

export default HealthyCooking;
