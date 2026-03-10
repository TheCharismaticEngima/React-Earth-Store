import React from "react";
import { NavLink } from "react-router-dom";
import './Banner.css';

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-container">
                <h2 className="banner-title">DISCOVER ECO-FRIENDLY PRODUCTS</h2>
                <p className="banner-paragraph">Shop sustainable products that make a difference</p>
                <NavLink to="/shop"><button>SHOP NOW</button></NavLink>
            </div>
        </div>
    );
}
export default Banner;