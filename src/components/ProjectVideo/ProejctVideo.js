import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

function ProjectVideo({ video }) {
    return (
        <div className="videoContainer">
            {/* need to make video play on touch when on mobile */}
            <div className="videoArea">
                <ReactPlayer 
                className="video"
                width="100%"
                height="100%"
                controls
                url={video}
                />
            </div>
        </div>
    )
}

export default ProjectVideo;