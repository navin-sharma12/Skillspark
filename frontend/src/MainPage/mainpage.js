import React, { useEffect, useState } from "react";
import CustomNavbar from "./NavBar.js";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Carousel, Button } from 'react-bootstrap';
import pottery from "./assets/img/pottery.jpg";
import dance from "./assets/img/dance.jpg";
import cooking from "./assets/img/cooking.jpg";
import cricket from "./assets/img/Dhoni.jpg";
import dance1 from "./assets/img/Dance1.jpg";
import pottery1 from "./assets/img/Pottery1.png";
import cooking1 from "./assets/img/cooking1.jpg";
import gallery1 from "./assets/img/gallery/gallery-1.jpg";
import gallery2 from "./assets/img/gallery/gallery-2.jpg";
import gallery3 from "./assets/img/gallery/gallery-3.jpg";
import gallery4 from "./assets/img/gallery/gallery-4.jpg";
import gallery5 from "./assets/img/gallery/gallery-5.jpg";
import gallery6 from "./assets/img/gallery/gallery-6.jpg";
import gallery7 from "./assets/img/gallery/gallery-7.jpg";
import gallery8 from "./assets/img/gallery/gallery-8.jpg";
import navin from "./assets/img/testimonials/Navin.jpeg";
import atharva from "./assets/img/testimonials/Atharva.jpeg";
import meenal from "./assets/img/testimonials/Meenal.jpg";
import ruchi from "./assets/img/testimonials/Ruchi.jpg";
import Isotope from 'isotope-layout';
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/css";

SwiperCore.use([Autoplay, Pagination]);

export default function MainPage() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {

        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        const iso = new Isotope('.menu-container', {
            itemSelector: '.menu-item',
            layoutMode: 'fitRows'
        });

        document.querySelectorAll('#menu-flters li').forEach((item) => {
            item.addEventListener('click', () => {
                const filterValue = item.getAttribute('data-filter');
                iso.arrange({ filter: filterValue });
            });
        });
    }, []);
    return (
        <div className="classBody">
            <CustomNavbar />
            <section id="hero">
                <div fluid className="hero-container">
                    <Carousel id="heroCarousel" interval={5000} fade
                        nextIcon={<span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />}
                        prevIcon={<span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />}>
                        <Carousel.Item style={{ backgroundImage: `url(${dance})` }} className="carousel-item">
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        <span>Your skills are your </span> SuperPower
                                    </h2>
                                    <div className="btn-group" role="group">
                                        <Link href="#menu">
                                            <Button className="c_button">
                                                Try it Today
                                            </Button>
                                        </Link>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <Link href="#contact">
                                            <Button className="c_button">
                                                Enquire Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item style={{ backgroundImage: `url(${pottery})` }} className="carousel-item">
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Skill up for FUN...
                                    </h2>
                                    <div className="btn-group" role="group">
                                        <Link href="#menu">
                                            <Button className="c_button">
                                                Try it Today
                                            </Button>
                                        </Link>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <Link href="#contact">
                                            <Button className="c_button">
                                                Enquire Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item style={{ backgroundImage: `url(${cooking})` }} className="carousel-item">
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Own your Skills
                                    </h2>
                                    <div className="btn-group" role="group">
                                        <Link href="#menu">
                                            <Button className="c_button">
                                                Try it Today
                                            </Button>
                                        </Link>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <Link href="#contact">
                                            <Button className="c_button">
                                                Enquire Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <main id="main">
                <section id="about" className="about">
                    <Container fluid>
                        <Row>
                            <Col lg={5} className="align-items-stretch video-box" style={{ backgroundImage: `url(${cricket})` }}>
                                <Link href="https://www.youtube.com/watch?v=b4OH3vBANa4" className="venobox play-btn mb-4" vbtype="video" autoplay />
                            </Col>

                            <Col lg={7} className="d-flex flex-column justify-content-center align-items-stretch">
                                <div className="content">
                                    <h3>Cricket</h3>
                                    <p>
                                        Cricket is a popular sport played around the world, especially in countries like India, England,
                                        Australia, and South Africa. The game is played between two teams of eleven players each, with one team
                                        batting and the other team bowling and fielding. The objective of the game is to score more runs than
                                        the opposing team. Cricket is a sport that requires a lot of skills, including batting, bowling,
                                        fielding, and strategy. It is also a sport that demands physical fitness, as matches can last for
                                        several hours or even days. The game has a rich history and traditions, with many legendary players and
                                        memorable moments. Today, cricket is played in various formats, including Test matches, One Day
                                        Internationals, and Twenty20, and it continues to captivate fans around the world with its unique blend
                                        of skill, strategy, and excitement.
                                    </p>
                                    <p className="fst-italic">Top Cricketers</p>
                                    <ul>
                                        <li><i className="spinner-border text-warning"></i>&nbsp;&nbsp;&nbsp;&nbsp;Sachin Tendulkar</li>
                                        <li><i className="spinner-border text-warning"></i>&nbsp;&nbsp;&nbsp;&nbsp;Mahendra Singh Dhoni</li>
                                        <li><i className="spinner-border text-warning"></i>&nbsp;&nbsp;&nbsp;&nbsp;Virat Kohli</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="why-us" className="why-us">
                    <Container>
                        <div className="section-title">
                            <h2>Why choose <span>Skill Sparks</span></h2>
                        </div>

                        <Row>
                            <Col lg={4}>
                                <div className="box">
                                    <span>01</span>
                                    <h4>Variety</h4>
                                    <p>
                                        A diverse range of classes and activities. This variety can help you find new and interesting workshops
                                        to keep you motivated and engaged, including yoga, Pilates, strength training, dance, and more.
                                    </p>
                                </div>
                            </Col>

                            <Col lg={4} className="mt-4 mt-lg-0">
                                <div className="box">
                                    <span>02</span>
                                    <h4>Flexibility</h4>
                                    <p>
                                        Book classes at different studios in your city, giving you the flexibility to create a routine that fits
                                        your schedule and preferences.
                                    </p>
                                </div>
                            </Col>

                            <Col lg={4} className="mt-4 mt-lg-0">
                                <div className="box">
                                    <span>03</span>
                                    <h4>Cost-effective</h4>
                                    <p>
                                        Cost-effective option for people who want to try different types of workshops without committing to a
                                        long-term membership for individual classes.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="menu" className="menu">
                    <Container>
                        <div className="section-title">
                            <h2>Our skills package: <span>We put the 'skill' in 'skillful'!</span></h2>
                        </div>

                        <Row>
                            <Col lg={12} className="d-flex justify-content-center">
                                <ul id="menu-flters">
                                    <li data-filter="*" className="filter-active">Show All</li>
                                    <li data-filter=".filter-starters">Dance</li>
                                    <li data-filter=".filter-salads">Cooking</li>
                                    <li data-filter=".filter-specialty">Fitness</li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="menu-container">
                            <Col lg={6} className="menu-item filter-starters">
                                <div className="menu-content">
                                    <Link href="#">Salsa</Link><span>$5.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Salsa is so good, it'll make you want to cha-cha-cha back for more!
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-starters">
                                <div className="menu-content">
                                    <Link href="#">Hip-Hop</Link><span>$6.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Experience the beat drop like never before with our amazing hip-hop!
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-starters">
                                <div className="menu-content">
                                    <Link href="#">Ballet</Link><span>$7.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Get ready to plié and slay with our amazing ballet!
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-salads">
                                <div className="menu-content">
                                    <Link href="#">Kids Cooking</Link><span>$8.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Have them make "bug" sandwiches using bread, peanut butter, and pretzels for legs.
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-specialty">
                                <div className="menu-content">
                                    <Link href="#">Pilates</Link><span>$9.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Get ready to bend it like Beckham with our amazing Pilates!
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-specialty">
                                <div className="menu-content">
                                    <Link href="#">Aerobics</Link><span>$9.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Experience the ultimate workout dance party with our amazing aerobics!
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-salads">
                                <div className="menu-content">
                                    <Link href="#">Baking</Link><span>$4.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Experience the magic of our baking - now with 100% more butter (because let's face it, everything is
                                    better with butter).
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-salads">
                                <div className="menu-content">
                                    <Link href="#">Healthy Cooking</Link><span>$9.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Make "fruit kabobs" by skewering a variety of fruits and using a fun dipping sauce made with Greek yogurt
                                    and honey
                                </div>
                            </Col>

                            <Col lg={6} className="menu-item filter-specialty">
                                <div className="menu-content">
                                    <Link href="#">Zumba</Link><span>$12.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Get ready to shake what your mama gave you with our Zumba!
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="events" className="events">
                    <Container>
                        <div className="section-title">
                            <h2>Explore Our <span>TOP CLASSES</span> In Boston</h2>
                        </div>

                        <Swiper autoplay={{ delay: 5000 }}
                            className="events-slider swiper"
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <Row className="event-item">
                                    <Col lg={6}>
                                        <img src={dance1} className="img-fluid" alt="" />
                                    </Col>
                                    <Col lg={6} className="pt-4 pt-lg-0 content">
                                        <h3>Arthur Murray Dance Studio</h3>
                                        <div className="price">
                                            <p><span>$49.99</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Experience learning social dancing, wedding dance or competitive dancing at our Boston ballroom
                                            dance studio
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Overcome Your Shyness.
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Make New Friends.
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Improve Physical Fitness.
                                            </li>
                                        </ul>
                                        <p>
                                            Give yourself the gift of confidence, the joy of meeting new friends, overcoming shyness and
                                            lowering the risks of depression while learning ballroom dancing, wedding dance or competitive
                                            dancing at our Arthur Murray Dance Studio
                                        </p>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Row className="event-item">
                                    <Col lg={6}>
                                        <img src={cooking1} className="img-fluid" alt="" />
                                    </Col>
                                    <Col lg={6} className="pt-4 pt-lg-0 content">
                                        <h3>Selfup Cooking Classes</h3>
                                        <div className="price">
                                            <p><span>$99.99</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Our cooking classes are really the best way to boost your team's motivation and cultivate
                                            connections through team building activities, that will last far beyond the cooking className event
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Couples Cooking.
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Corporate Cooking.
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Mixology Cooking.
                                            </li>
                                        </ul>
                                        <p>
                                            Our cooking classes are better than most team building exercises because there is a fun project to
                                            complete, where the reward is a delicious meal you can all share together
                                        </p>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Row className="event-item">
                                    <Col lg={6}>
                                        <img src={pottery1} className="img-fluid" alt="" />
                                    </Col>
                                    <Col lg={6} className="pt-4 pt-lg-0 content">
                                        <h3>Clay Lounge</h3>
                                        <div className="price">
                                            <p><span>$29.99</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Clay Lounge is a community driven pottery studio and gallery located in SoWa Arts District in the
                                            South End of Boston
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Creative Outlet.
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Mindfulness and Relaxation.
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i> Development of Motor Skills.
                                            </li>
                                        </ul>
                                        <p>
                                            Clay Lounge is a creative space welcoming beginners and experienced potters to journey into clay.
                                            Come take a className and join the community!
                                        </p>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                        </Swiper>
                    </Container>
                </section>
                <section id="gallery" className="gallery">
                    <Container fluid>
                        <div className="section-title">
                            <h2>Some photos from <span>Our Classes</span></h2>
                        </div>

                        <Row className="g-0">
                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery1} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery2} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery3} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery4} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery5} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery6} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery7} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>

                            <Col lg={3} md={4}>
                                <div className="gallery-item">
                                    <Link href="#" className="gallery-lightbox">
                                        <img src={gallery8} alt="" className="img-fluid" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="testimonials" className="testimonials">
                    <Container className="position-relative">
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <Swiper autoplay={{ delay: 5000 }}
                                className="swiper-wrapper swiper"
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <img src={navin} className="testimonial-img" alt="" />
                                        <h3>Navin Sharma</h3>
                                        <h4>Founder</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            I recently took a cricket className and it was a fantastic experience. The className covered a range
                                            of skills including batting, bowling, and fielding, and I felt like I learned a lot in a short amount of time.
                                            Additionally, the className had a great balance of individual attention and group work, which helped me to improve my skills
                                            and work effectively with others. Overall, I would highly recommend this cricket className to anyone looking to improve
                                            their game!
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <img src={ruchi} className="testimonial-img" alt="" />
                                        <h3>Ruchi Kapadiwala</h3>
                                        <h4>Designer</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            I attended the healthy cooking className taught by Sarah, and it was a wonderful experience! Her passion for
                                            cooking and healthy living was evident in every aspect of the className. She provided a great balance of instruction and
                                            hands-on practice, which helped me to improve my cooking skills and gain confidence in the kitchen. The recipes she
                                            shared were not only delicious but also focused on using whole, nutrient-rich ingredients, which was a big plus for me.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <img src={meenal} className="testimonial-img" alt="" />
                                        <h3>Meenal Sarwaiya</h3>
                                        <h4>Entrepreneur</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            I recently attended a pilates className, and it was an amazing experience. Alexandria, our pilates coach was incredibly
                                            knowledgeable about the practice and was able to provide clear instructions and individual feedback throughout the
                                            className. I felt challenged and energized throughout the className, and I left feeling refreshed and invigorated. Overall, I
                                            highly recommend this
                                            pilates className to anyone looking to improve their strength and flexibility in a supportive and nurturing environment.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <img src={atharva} className="testimonial-img" alt="" />
                                        <h3>Atharva Danke</h3>
                                        <h4>Co-founder</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            I participated in a hiking className, and it was a fantastic experience.
                                            The className was very hands-on, and I appreciated the opportunity to practice new skills in a supportive environment. The
                                            hiking trails were beautiful, and I was able to learn more about the local flora and fauna.Overall, I would highly
                                            recommend this hiking className to anyone looking to improve their hiking skills and learn more about the outdoors.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Container>
                </section>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2><span>Contact</span> Us</h2>
                        </div>
                    </div>

                    <div className="map">
                        <iframe style={{ border: 0, width: '100%', height: '350px' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1274194639486!2d-71.0913603849059!3d42.3398066791882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern%20University!5e0!3m2!1sen!2sus!4v1676429761623!5m2!1sen!2sus"
                            frameborder="0" allowfullscreen title="Google Map"></iframe>
                    </div>
                    <div className="container mt-5">
                        <div className="info-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 info">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Northeastern University<br />Boston, MA 02115</p>
                                </div>

                                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                    <i className="bi bi-clock"></i>
                                    <h4>Open Hours:</h4>
                                    <p>Monday-Saturday:<br />11:00 AM - 11:00 PM</p>
                                </div>

                                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p><Link href="mailto:skillspark@gmail.com">skillspark@gmail.com</Link></p>

                                </div>

                                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p><Link href="tel:+1 857 857 8585">+1 857 857 8585</Link></p>

                                </div>
                            </div>
                        </div>

                        <Form className="php-email-form">
                            <Row>
                                <Col md={6} className="form-group">
                                    <Form.Control type="text" name="name" id="name" placeholder="Your Name" required />
                                </Col>
                                <Col md={6} className="form-group mt-3 mt-md-0">
                                    <Form.Control type="email" name="email" id="email" placeholder="Your Email" required />
                                </Col>
                            </Row>

                            <Form.Group className="mt-3">
                                <Form.Control type="text" name="subject" id="subject" placeholder="Subject" required />
                            </Form.Group>

                            <Form.Group className="mt-3">
                                <Form.Control as="textarea" name="message" rows={5} placeholder="Message" required />
                            </Form.Group>

                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Send Message" onclick="alerttext()">
                                    Send Message
                                </button>
                            </div>
                        </Form>
                    </div>
                </section>
            </main>
            <footer id="footer" className="mt-5">
                <Container>
                    <h3>Skill Spark</h3>
                    <p>
                        Experience the freedom of variety with Skill Spark
                    </p>
                    <div className="social-links">
                        <Link href="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link href="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link href="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link href="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link href="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <strong><span>Skill Spark</span></strong>. All Rights Reserved
                    </div>
                </Container>
            </footer>
            {isVisible && (
                <div className="back-to-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
                    <i className="bi bi-arrow-up"></i>
                </div>
            )}
        </div>
    );
}