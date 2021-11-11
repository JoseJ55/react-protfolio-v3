import React, { useState } from 'react';
import './style.css';

import Letter from '../Letter/Letter';

function Header() {
    // This component render the main page header the image background.
    const [ letterAnimation, setLetterAnimation ] = useState({
        // position: "static",
        // bottom: "auto",
        // transition: "auto",
        animation: "0",
    })

    const title = "Hello I'm Jose Jimenez"
    const titleArr = title.split("");

    const letterBtn = () => {
        if (letterAnimation.animation === "0"){
            setLetterAnimation({
                // position: "absolute",
                // bottom: 0,
                // transition: "1s",
                animation: "change 1s infinite",
            })
        } else {
            setLetterAnimation({
                // position: "static",
                // bottom: "auto",
                // transition: "auto",
                animation: "0",
            })
        }
        console.log(letterAnimation)
    }

    return (
        <div id="header">
            <div id="webTitle">
                {titleArr.map((letter) => {
                    if (letter === " "){
                        return <span>{letter}</span>
                    } else {
                        return ( 
                            <Letter letter={letter} />
                            // <span 
                            //     // onClick={() => letterBtn()} 
                            //     className="letter"
                            //     // style={letterAnimation}
                            // >
                            //     {letter}
                            // </span>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Header;