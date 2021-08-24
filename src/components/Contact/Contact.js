import React from "react";
import "./style.css";

function Contact() {
    // This component render the contact section on the main page which shows my
    // personal links.
    return (
        <div data-aos="fade-up" id="contact">
            <h2 id="contactTitle">Contact</h2>
            <div id="contactArea">
                <p id="contactEmail">Email: <a href="josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p id="contactGit" >Github: <a href="https://github.com/JoseJ55" >https://github.com/JoseJ55</a></p>
                <p id="contactLink">LinkedIn: <a href="www.linkedin.com/in/jose-jimenez-238453169">www.linkedin.com/in/jose-jimenez-238453169</a> </p>
            </div>
        </div>
    )
}

export default Contact;