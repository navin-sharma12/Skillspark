import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import knitting from "../assets/img/knitting.png";
import knitting1 from "../assets/img/knitting1.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Knitting = () => {

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
                        <img src={knitting} alt="icon" />
                        <p className="left">
                            <p className="left-title">Knitting Classes</p>
                            Enter the world of yarn and needles with knitting, where<br />
                            creativity meets coziness and fashion meets function.<br />
                            Unwind your mind and let your fingers do the talking<br />
                            while learning from expert knitters and creating your<br />
                            own unique pieces.<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={knitting1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Get cozy with Knitting Classes: where creativity and comfort meet!
                                </p>
                                Experience the joy of knitting with our classes, where yarn and<br />
                                needles come together to create beautiful works of art. Unleash<br />
                                your creativity and learn from expert instructors as you discover<br />
                                the endless possibilities of this timeless craft.
                                <br />
                                <br />
                                ✓ Get cozy and create something beautiful with knitting.
                                <br />
                                <br />
                                ✓ Learn to knit and make unique handmade gifts for your loved ones.
                                <br />
                                <br />
                                ✓ Join our knitting community and share your passion for this traditional<br />
                                art form.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Knitting").map((card) => (
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

export default Knitting;
