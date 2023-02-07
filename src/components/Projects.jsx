import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="content">
          <div className="description">
            <p>
              Here are the projects I will be making during the frontend course
              at Novare potential.
            </p>
          </div>
          <div className="projects-list">
            {props.projectsList.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setModal={props.setModal}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
