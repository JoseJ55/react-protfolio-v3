import React from "react";

import ProjectHeader from "./../components/ProjectHeader/ProjectHeader";
import ProjectImages from "./../components/ProjectImages/ProjectImages";
import ProjectVideo from "./../components/ProjectVideo/ProejctVideo";
import ParticlesBackGround from "../components/ParticlesBackGround/ParticlesBackGround";

function Project({ title, project }) {
    return (
        <div>
            <ProjectHeader 
                title={title}
                project={project}
            />
            <ProjectImages images={project.images} />
            <ProjectVideo video ={project.video} />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f1f0ed" fill-opacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,160C274.3,171,343,213,411,224C480,235,549,213,617,202.7C685.7,192,754,192,823,170.7C891.4,149,960,107,1029,128C1097.1,149,1166,235,1234,261.3C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>

            <div className="projectBackground">
                <ParticlesBackGround className="back"/>
            </div>
        </div>
    )
}

export default Project;