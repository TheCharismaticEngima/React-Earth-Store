import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="nav-list">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="logo">
                <h2>EARTH STORE</h2>
            </div>
            <div className="copyright">
                <p>Copyright@2026 Earth Store</p>
            </div>
        </div>
    );
}
export default Footer;