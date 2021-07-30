import React from "react";
import "./style.css";

import homeIcon from "./../../assets/images/home-icon48px.png";
import personIcon from "./../../assets/images/person-icon48px.png";
import websiteIcon from "./../../assets/images/website-icon50px.png";
import contactIcon from "./../../assets/images/contact-icon50px.png";
import resumeIcon from "./../../assets/images/resume-icon48px.png";

function Navbar() {
    return (
        <div id="nav">
            <button className="btn"><a href="/"><img src={homeIcon} alt="https://icons8.com"/>Home</a></button>
            <button className="btn"><a href="/#about"><img src={personIcon} alt="https://icons8.com/icon/86363/person"/>About</a></button>
            <button className="btn"><a href="/#projects"><img src={websiteIcon} alt="https://icons8.com/icon/87836/resume-website"/>Projects</a></button>
            <button className="btn"><a href="/#contact"><img src={contactIcon} alt="https://icons8.com/icon/7863/contact"/>Contact</a></button>
            <button className="btn"><a href="/#resume"><img src={resumeIcon} alt="https://icons8.com"/>Resume</a></button>
        </div>
    )
}

export default Navbar;