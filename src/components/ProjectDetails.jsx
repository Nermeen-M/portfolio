import React from "react";

import Pill from "./Pill";
import Button from "./Button";

export default function ProjectDetails({project}){
    function openInNewTab(url){
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (<div className="project-details">
        <img src={require(`../assets/images/projects/${project.screenshot}`)} alt={project.title} />
        <div className="details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="pills-list">
                {project.technologies.map((technology, index) => (
                <Pill
                    key={index}
                    technologyName={technology}
                />
                ))}
            </div>
            <Button label={"Visit website / App"} className="primary-button" onClick={() => openInNewTab(project.url)} />
            <Button label={"Git repository"} className="secondary-button" onClick={() => openInNewTab(project.gitRepoUrl)} />
        </div>
    </div>);
}