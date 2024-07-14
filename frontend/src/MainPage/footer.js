import React from "react";
import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/css/style.css";

export default function Footer() {
    return (
        <div className="classBody">
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
        </div>
    );
}