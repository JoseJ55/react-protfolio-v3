import React from "react";
import "./style.css";
import profilePic from "./../../assets/images/ProfilePic.jpg";
import Skills from "./../Skills/Skills";
// import "aos/dist/aos.css";
// import Aos from "aos"

function About() {
    // This component renders the about section on the main page which gives
    // information about me.
    // useEffect(() => {
    //     Aos.init({duration: 1500})
    // }, [])

    return (
        <div data-aos="fade-up" id="about">
            <div id="aboutNorm">
                <img id="aboutImage" src={profilePic} alt="Profile"></img>

                <div id="aboutText">
                    <h2 id="aboutTitle">About</h2>
                    <p id="aboutPara">
                    A Web Developer with an Associates’s Degree in computer information science at Victor Valley College and a certificate in Web Development from the University of California Riverside. Proficient in programming with HTML, CSS, and javascript which is used to connect both the frontend and backend of a website.
                    </p>
                    <Skills />
                </div>
            </div>

            <div id="aboutRes">
                <h2 id="aboutTitleRes">About</h2>
                <p id="aboutParaRes">
                A Web Developer with an Associates’s Degree in computer information science at Victor Valley College and a certificate in Web Development from the University of California Riverside. Proficient in programming with HTML, CSS, and javascript which is used to connect both the frontend and backend of a website.
                </p>
                
                <div id="aboutTextRes">
                    <Skills />
                    <img id="aboutImageRes" src={profilePic} alt="Profile"></img>
                </div>
            </div>
            
        </div>
    )
}

export default About;