import React from "react";
import "./style.css";
import profilePic from "./../../assets/images/ProfilePic.jpg";

function About() {
    // This component renders the about section on the main page which gives
    // information about me.
    return (
        <div id="about">
            {/* <div id="imageArea"> */}
                <img id="aboutImage" src={profilePic} alt="Profile"></img>
            {/* </div> */}

            <div id="aboutText">
                <h2 id="aboutTitle">About</h2>
                <p id="aboutPara">
                A Web Developer with an Associates’s Degree in computer information science at Victor Valley College and a certificate in Web Development from the University of California Riverside. Proficient in programming with HTML, CSS, and javascript which is used to connect both the frontend and backend of a website.
                </p>
            </div>
        </div>
    )
}

export default About;