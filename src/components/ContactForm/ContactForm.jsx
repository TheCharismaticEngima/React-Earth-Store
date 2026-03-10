import React from "react";
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
 return(
    <div className="contact-form">
        <div className="contact-input">
            <h2>GET IN TOUCH</h2>
            <div className="contact-input-field">
                    <input type="text" placeholder="Full Name" />
                    <input type="tel" placeholder="Phone Number" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message" rows="5"></textarea>
                    <button>SEND NOW</button>
            </div>
        </div>
            <div className="contact-detail">
                <h2>TALK TO US</h2>
                <div className="email">
                    <div className="icon-circle"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div className="email-detail">
                        <h3>Email</h3>
                        <p>Cloud@sky.com</p>
                    </div>
                </div>
                <div className="phone-detail">
                    <div className="icon-circle"><FontAwesomeIcon icon={faPhone} /></div>
                    <div className="phone-number">
                        <h3>Phone Number</h3>
                        <p>202-53695 7855</p>
                    </div>
                </div>
                <div className="location">
                    <div className="icon-circle"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                    <div className="address-detail">
                        <h3>Address</h3>
                        <p>Ocean Road <br /> A whole new world</p>
                    </div>
                </div>
                    
                     
                
            </div>
        
    </div>
 );
}
export default ContactForm;