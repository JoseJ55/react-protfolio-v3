import React, { useState } from "react";
import "./style.css";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

function ProjectImages({ images }) {
    // This component renders a image carosal where a user is able to click
    // through the images and view them.
    const [current, setCurrent] = useState(0);
    const length = images.length;

    // This function make the prevous image the current one. 
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // This function makes the next image the current one.
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // This part checks if there are images tp cycle through. 
    if(!Array.isArray(images) || images.length <= 0){
        return null;
    }

    return (
        <div className="slider">
            <div classNames="sliderArea">
                <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide}/>
                {/* {fakeData.map((data, index) => { */}
                {images.map((data, index) => {
                    return (
                        <div className={index === current ? 'slide active': 'slide'} key={index}>
                            {index === current && (
                                <img src={data} alt="img" className="image"/>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectImages;