import React, { useState, useRef, useEffect } from "react";
// import reactDom from "react-dom";
import "./style.css";

function Letter({ letter }) {
    const [change, setChange] = useState({
        animation: "0",
    })
    // const [animation, setAnimation] = useState({

    // })

    // useEffect(() => {
    //     switch(letter){
    //         case "H":
    //             setAnimation({})
    //             break;
    //         default:
    //             setAnimation({animation: "change 1s forwards"})
    //     }
    // }, [])

    const animate = () => {
        console.log(change)
        if (change.animation === "0") {
            // setChange({animation: "drop 1s forwards"})
            // setChange({animation: "bounce 3s forwards"})
            // setChange({animation: "flipNRunOne 4s forwards"})
            // setChange({animation: "flipNRunTwo 4s forwards"})
            // setChange({animation: "flipNRunThree 4s forwards"})
            // setChange({animation: "flipNRunFour 3s forwards"})
            // setChange({animation: "offWalls 2s forwards"})
            // setChange({animation: "spin 2s forwards"})
            // setChange({animation: "squish 2s forwards"})
            // setChange({animation: "circle 2s forwards"})
            // setChange({animation: "flipNLand 1s forwards"})
            // setChange({animation: "pulse 2s forwards"})
            setChange({animation: "hang 2s forwards"})
        } else {
            setChange({ animation: "0"})
        }
    }

    const stop = () => {
        console.log(
            "stop"
            // reactDOM.findDOMNode(<Letter/>)
        )
    }

    return (
        <div className="letters">
            {/* {letter === "'" ? 
                <span 
                    className="letter"
                    onClick={() => stop()}
                >
                    {letter}
                </span>
                : */}
                <span 
                    className="letter"
                    style={change}
                    onClick={() => animate()}
                >
                    {letter}
                </span>
            {/* } */}
        </div>
    )
}

export default Letter;