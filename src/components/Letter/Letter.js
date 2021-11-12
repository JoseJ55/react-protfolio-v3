import React, { useState, useEffect, useRef } from "react";
// import reactDom from "react-dom";
import "./style.css";

// Need to find out how to reset all animations with one button press. Also need
// to have animations play on first click.
function Letter({ letter, update, setUpdate }) {
    const [change, setChange] = useState({
        animation: "0",
    })
    const [animation, setAnimation] = useState("0")
    const animateStyle = useRef({ animation: "0"});

    useEffect(() => {
        switch(letter){
            case "H":
                setAnimation("bounce 3s forwards")
                break;
            case "e":
                let ran = Math.floor(Math.random() * 3)
                if(ran === 1){
                    setAnimation("flipNRunOne 4s forwards")
                } else if (ran === 2) {
                    setAnimation("flipNRunTwo 4s forwards")
                } else {
                    setAnimation("flipNRunThree 4s forwards")
                }
                break;
            case "l":
                setAnimation("drop 1s forwards");
                break;
            case "o":
                setAnimation("offWalls 2s forwards");
                break;
            case "I":
                setAnimation("spin 2s forwards");
                break;
            case "i":
                setAnimation("spin 2s forwards");
                break;
            case "J":
                setAnimation("hang 2s forwards");
                break;
            case "s":
                setAnimation("circle 2s forwards");
                break;
            case "m":
                setAnimation("squish 2s forwards");
                break;
            case "n":
                setAnimation("flipNLand 1s forwards");
                break;
            case "z":
                setAnimation("pulse 2s forwards");
                break;
            default:
                setAnimation("change 1s forwards")
        }
    }, [])

    const animate = () => {
        if (change.animation === "0") {
            setChange({animation: animation})
        } else {
            setChange({ animation: "0"})
        }
    }

    const stop = () => {
        setChange({animation: "0"})

        if(update === true){
            setUpdate(false)
        } else {
            setUpdate(true)
        }
    }

    return (
        <div className="letters">
            {letter === "'" ? 
                <span 
                    className="letter"
                    onClick={() => stop()}
                >
                    {letter}
                </span>
                :
                <span 
                    className="letter"
                    style={change}
                    ref={animateStyle}
                    onClick={() => animate()}
                >
                    {letter}
                </span>
            } 
        </div>
    )
}

export default Letter;