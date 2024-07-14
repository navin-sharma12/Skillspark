import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.js";
import painting from "../assets/img/painting.jpg";
import painting1 from "../assets/img/painting.jpeg";
import BackToTop from "../backToTop.js";
import Footer from "../footer.js";

const Painting = () => {

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
                        <img src={painting} alt="icon" />
                        <p className="left">
                            <p className="left-title">Painting Classes</p>
                            Immerse yourself in the world of art with painting, where<br />
                            colors and imagination come to life on canvas. Explore your<br />
                            inner creativity and express yourself through brushstrokes,<br />
                            while learning from the masters and discovering your<br />
                            own unique style.<br />
                        </p>
                    </div>
                    <div className="top-className">
                        <div className="triangle-bottom-right">
                            <div className="salsa-image">
                                <img src={painting1} alt="icon" />
                            </div>
                        </div>
                        <div className="top-classes-content">
                            <p>
                                <p className="salsa-classes-title">
                                Brush up your skills with our Painting Classes.
                                </p>
                                Explore the art of self-expression through painting in our creative<br />
                                and nurturing painting classes. Join our community of artists,<br />
                                learn from the best instructors and develop your own style while<br />
                                having fun and expressing yourself on the canvas.
                                <br />
                                <br />
                                ✓ Learn to mix colors, create texture and bring your canvas to life.
                                <br />
                                <br />
                                ✓ Have fun and let your imagination run wild on the canvas.
                                <br />
                                <br />
                                ✓ Discover new techniques and styles with our expert instructors.
                            </p>
                        </div>
                    </div>
                    <div className="classes-listing">
                        <div className="classes-listing-header">
                            <p>Classes Listing</p>
                        </div>
                        <div className="display-card-wrapper">
                            {cards.filter((card) => card.classesType === "Painting").map((card) => (
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

export default Painting;
