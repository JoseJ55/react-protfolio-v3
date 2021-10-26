import React from "react";
import "./style.css";

// import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer(){
    return (
        <div id="footer">
            <div id="contact">
                <h2 id="contactTitle">GET IN TOUCH</h2>
                <p className="contactItem">Email: <a href="mailto:josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p className="contactItem">Phone: 1-(760)-221-2790</p>
                <div id="contactIcons">
                    <a href="https://github.com/JoseJ55"><AiFillGithub className="icon" size={28}  color="white"/></a>
                    <a href="https://www.linkedin.com/in/jose-jimenez-238453169"><AiFillLinkedin className="icon" size={28} color="white"/></a>
                </div>
            </div>

            <div id="email">
                <input id="emailName" className="emailItem" type="text" placeholder="Name"/>
                <input id="emailEmail" className="emailItem" type="text" placeholder="Email"/>
                <input id="emailPhone" className="emailItem" type="text" placeholder="Phone"/>
                <input id="emailSub" className="emailItem" type="text" placeholder="Subject"/>
                <textarea id="emailMessage" className="emailItem" type="text" placeholder="Type you message here..." rows="7"/>
                <input id="emailBtn" type="button" value="Submit"/>

            </div>
        </div>
    )
}

export default Footer;