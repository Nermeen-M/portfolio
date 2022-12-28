import { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

export default function Projects(){
    const[projectsList, setProjectsList]= useState([]);

    useEffect(() => {
        fetch(
            'data.json'
            ).then(response => {
                return response.json();
            }).then(data => {
                setProjectsList(data);
                //console.log(data);
            });
    }, []);


    return (<section id="projects">
        <h2>Projects</h2>
        <div className="description">
            <p>Here are the projects I will be making during  the frontend course at Novare potential.</p>
        </div>
        <div className="projects-list">
            {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
          />
        ))}
        </div>
    </section>);
}