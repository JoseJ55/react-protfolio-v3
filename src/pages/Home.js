import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
// import Contact from "../components/Contact/Contact";
import Resume from "../components/Resume/Resume";
import Footer from "../components/Footer/Footer";
import ParticlesBackGround from "../components/ParticlesBackGround/ParticlesBackGround";
import FooterCurve from "../components/FooterCurve/FooterCurve";
import "./style.css";

function Home() {
    return (
        <div className="contain">
            <div className="homeBody">
                <Header />
                <About />
                <Projects />
                <Resume />
                <FooterCurve/>
                <Footer />
                
            </div>
            <div className="homeNavbar">
                <Navbar />
            </div>
            <div className="background">
                <ParticlesBackGround className="back"/>
            </div>
        </div>
    )
}

export default Home;