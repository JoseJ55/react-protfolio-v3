import React, { useState } from "react";
import "./style.css";
import { FiMenu } from 'react-icons/fi';

import homeIcon from "./../../assets/images/home-icon48px.png";
import personIcon from "./../../assets/images/person-icon48px.png";
import websiteIcon from "./../../assets/images/website-icon50px.png";
import contactIcon from "./../../assets/images/contact-icon50px.png";
import resumeIcon from "./../../assets/images/resume-icon48px.png";

function Navbar() {
    const [navStyle, setNavStyle] = useState({display: "none"})
    const toggleNav = () => {
        if(navStyle.display === "none") {
            setNavStyle({display: "flex"});
        } else {
            setNavStyle({display: "none"});
        }
    }

    return (
        <>
            <div id="nav">
                <button className="btn"><a href="/"><img src={homeIcon} alt="https://icons8.com"/>Home</a></button>
                <button className="btn"><a href="/#about"><img src={personIcon} alt="https://icons8.com/icon/86363/person"/>About</a></button>
                <button className="btn"><a href="/#projects"><img src={websiteIcon} alt="https://icons8.com/icon/87836/resume-website"/>Projects</a></button>
                <button className="btn"><a href="/#contact"><img src={contactIcon} alt="https://icons8.com/icon/7863/contact"/>Contact</a></button>
                <button className="btn"><a href="/#resume"><img src={resumeIcon} alt="https://icons8.com"/>Resume</a></button>
            </div>

            <div id="navRes">
                <div id="iconContainer">
                    <button id="iconRes" onClick={toggleNav}><FiMenu size={42} color={"white"}/></button>
                </div>
                <div id="btnResLink" style={navStyle}>
                    <button className="btnRes" onClick={toggleNav}><a href="/">Home</a></button>
                    <button className="btnRes" onClick={toggleNav}><a href="/#about">About</a></button>
                    <button className="btnRes" onClick={toggleNav}><a href="/#projects">Projects</a></button>
                    <button className="btnRes" onClick={toggleNav}><a href="/#contact">Contact</a></button>
                    <button className="btnRes" onClick={toggleNav}><a href="/#resume">Resume</a></button>
                </div>
            </div>
        </>
    )
}

export default Navbar;