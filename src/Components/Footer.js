import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../ComponentStyles/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <h2>CONTACT US</h2>
                <h3>Email: info@yahoo.com</h3>
                <h3>Address: 938 North Pennington Road
                    Valley Stream, NY 11580</h3>
                <h3>Phone Number: 956919222</h3>
            </div>
            <div className="operating-time">
                <h2>Operating Hours:</h2>
                <h3>Monday: 9:00 am - 5:00 pm</h3>
                <h3>Tuesday: 9:00 am - 5:00 pm</h3>
                <h3>Wednesday: 9:00 am - 5:00 pm</h3>
                <h3>Thursday: 9:00 am - 5:00 pm</h3>
                <h3>Friday: 10:00 am - 3:00 pm</h3>
            </div>
            <div className="follow-us">
                <div className="brands">
                    <p><a href="https://www.facebook.com/" id="fb"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></p>
                    <p><a href="https://www.instagram.com/" id="insta"><FontAwesomeIcon icon= {['fab', 'instagram']}/></a></p>
                    <p><a href="https://www.twitter.com/" id="twitter"><FontAwesomeIcon icon= {['fab', 'twitter']} /></a></p>
                    <p><a href="https://www.youtube.com/" id="youtube"><FontAwesomeIcon icon= {['fab', 'youtube']} /></a></p>
                </div>
                <div className="subscribe-box">
                <h2>Subscribe To Our Newsletter:</h2>
                <input type="text" placeholder="Email"></input>
                </div>
            </div>
            <h5>Developed by DUC</h5>
        </div>
    )
}
export default Footer;