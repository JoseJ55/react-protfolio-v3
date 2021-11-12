import React, { useState } from "react";
import "./style.css";
import { FiMenu } from 'react-icons/fi';

import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWebAsset } from "react-icons/md";
import { IoMdDocument} from "react-icons/io";

function Navbar() {
    // This component renders the navbar on the main page.
    const [navStyle, setNavStyle] = useState({display: "none"})

    // This function is for the responsive part of the page where if a window is
    // small enough it will change to the responsive version. 
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
                <button className="btn"><a href="/"><AiFillHome size={42}/>Home</a></button>
                <button className="btn"><a href="/#about"><BsFillPersonFill size={42}/>About</a></button>
                <button className="btn"><a href="/#projects"><MdWebAsset size={42} />Projects</a></button>
                {/* <button className="btn"><a href="/#contact"><MdPermContactCalendar size={42} />Contact</a></button> */}
                <button className="btn"><a href="/#resume"><IoMdDocument size={42} />Resume</a></button>
            </div>

            <div id="navRes">
                <div id="iconContainer">
                    <button id="iconRes" onClick={toggleNav}><FiMenu size={42} color={"white"}/></button>
                </div>
                <div id="btnResLink" style={navStyle}>
                    <button className="btnRes" onClick={toggleNav}><a href="/">Home</a></button>
                    <button className="btnRes" onClick={toggleNav}><a href="/#about">About</a></button>
                    <button className="btnRes" onClick={toggleNav}><a href="/#projects">Projects</a></button>
                    {/* <button className="btnRes" onClick={toggleNav}><a href="/#contact">Contact</a></button> */}
                    <button className="btnRes" onClick={toggleNav}><a href="/#resume">Resume</a></button>
                </div>
            </div>
        </>
    )
}

export default Navbar;