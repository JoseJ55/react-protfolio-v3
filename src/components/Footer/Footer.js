import React from "react";
import "./style.css";

// import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer(){
    return (
        <div id="footer">
            <div id="contact">
                <h2 id="contactTitle">GET IN TOUCH</h2>
                <p className="contactItem">Email: <a href="josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p className="contactItem">Phone: 1-(760)-221-2790</p>
                <div id="contactIcons">
                    <a href="https://github.com/JoseJ55"><AiFillGithub className="icon" size={28}  color="white"/></a>
                    <a href="https://www.linkedin.com/in/jose-jimenez-238453169"><AiFillLinkedin className="icon" size={28} color="white"/></a>
                </div>
            </div>
            <div id="email">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="Subject"/>
                <input type="text" placeholder="Type you message here..."/>
                <input type="button" value="Submit"/>

            </div>
        </div>
    )
}

export default Footer;