import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    
    return(
        <div className="navbar">
            <div className="logo">
                <h1>EARTH STORE</h1>
            </div>
            <div className="nav-menu">
                <ul>
                    <li><NavLink to = "/">HOME</NavLink></li>
                    <li><NavLink to = "/about">ABOUT</NavLink></li>
                    <li><NavLink to = "/shop">SHOP</NavLink></li>
                    <li><NavLink to = "/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;