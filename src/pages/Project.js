import React from "react";

import ProjectHeader from "./../components/ProjectHeader/ProjectHeader";
import ProjectImages from "./../components/ProjectImages/ProjectImages";
import ProjectVideo from "./../components/ProjectVideo/ProejctVideo";

function Project({ title, project }) {
    return (
        <div>
            <ProjectHeader 
                title={title}
                project={project}
            />
            <ProjectImages images={project.images} />
            <ProjectVideo video ={project.video} />
        </div>
    )
}

export default Project;