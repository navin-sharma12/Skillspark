import React, { useEffect, useState } from "react";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/css/style.css";

export default function BackToTop() {
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
    }, []);
    return (
        <div className="classBody">
            {isVisible && (
                <div className="back-to-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
                    <i className="bi bi-arrow-up"></i>
                </div>
            )}
        </div>
    );
}