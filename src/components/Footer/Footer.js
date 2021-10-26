import React from "react";
import "./style.css";

function Footer(){
    return (
        <div id="footer">
            <div id="contact">
                <h2>GET IN TOUCH</h2>
                <p>Email: <a href="josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p>Phone: 1-(760)-221-2790</p>
                <div id="contactIcons">
                    <a href="#">git</a>
                    <a href="#">linkedin</a>
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