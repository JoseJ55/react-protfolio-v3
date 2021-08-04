import React, { useState } from "react";
import "./style.css";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

// import sunimg from "./../../assets/images/sunset.jpg"

function ProjectImages({ images }) {
    console.log(images)
    // const [fakeData, setFakeData] = useState([
    //     "/images/weatherDashboard.png",
    //     "https://images.unsplash.com/photo-1627386172141-c6fec8bf5aa3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    //     "https://images.unsplash.com/photo-1627392689954-0a4d150687a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    //     "https://images.unsplash.com/photo-1627308098537-5f26c63570f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    // ])
    const [current, setCurrent] = useState(0);
    // const length = fakeData.length;
    const length = images.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // console.log(current)

    // if(!Array.isArray(fakeData) || fakeData.length <= 0){
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