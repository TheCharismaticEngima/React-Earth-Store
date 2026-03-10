import React from "react";
import { testimonialData } from "../../data"; 
import './Testimonials.css';

const Testimonials = () => {
    return(
        <div className="testimonials">
            <h2 className="main-heading">WHAT OUR CUSTOMERS SAY</h2>
            <div className="review">
                {testimonialData.map ((item) => (
                    <div className="testimonials-card" key = {item.id}>
                        
                    
                    <div className="testimonials-text">{item.text}</div>
                    <div className="avatar"><img src={item.avatar} alt="" /></div>
                    <div className="name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Testimonials;