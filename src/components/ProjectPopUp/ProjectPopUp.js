import React from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function ProjectPopUp({ popUp, setPopUp, title, desc }) {
    let history = useHistory();
    const changeToProject = (files) => {
        let file = files.replace(/\s/g, '');
        history.push(`/${file}`);
    }

    const animation = useSpring({
        from: {marginTop: -500},
        to: {marginTop: 0},
        duration: 2000,
    })

    return (
        <div id="popUp">
            <animated.div id="popUpArea" style={animation}>
                <button 
                    type="button" 
                    id="popUpExit"
                    onClick={() => setPopUp(false)} 
                ><AiOutlineClose size={28}/></button>

                <h2>{title}</h2>
                {/* change desc to a sorter version so it can fit on screen better. */}
                <p>{desc}</p>

                <button type="button" value="full" id="popUpMore" onClick={() => changeToProject(title)}>More Info</button>
            </animated.div>
        </div>
    )
}

export default ProjectPopUp;