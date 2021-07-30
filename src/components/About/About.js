import React from "react";
import "./style.css";
import profilePic from "./../../assets/images/profilePic.png";

function About() {
    return (
        <div id="about">
            <img id="aboutImage" src={profilePic} alt="Profile"></img>

            <div id="aboutText">
                <h2 id="aboutTitle">About</h2>
                <p id="aboutPara">
                    I am a student at Victor Valley College with the plan to 
                    transfer to a university. I Have taken the boot camp course
                    at University of California Riverside for full stack 
                    development. Currently I am proficient in programming with 
                    HTML, CSS, Javascript and Python most which I have been
                    programming with for a few years. I get along with almost
                    anyone, which I believe makes me able to work great in teams.
                    I have lots of projects which I have programmed by myself and
                    a few where I worked with other people to express our ideas.

                </p>
            </div>
        </div>
    )
}

export default About;