import React from "react";
import { NavLink } from "react-router-dom";
import './Hero.css';

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">EARTH</h1>
                <p className="hero-subtitle">MULTIPURPOSE STORE</p>
                <NavLink to="/shop"><button className="hero-btn">SHOP NOW</button></NavLink>
            </div>
        </div>
    );
}
export default Hero;