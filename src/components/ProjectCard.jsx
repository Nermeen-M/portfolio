import ProjectDetails from "./ProjectDetails";

// nesting -1, look how different the code look when refactored
export default function ProjectCard({ project, setModal }) {
  // Properties
  const image = require(`../assets/images/projects/${project.thumbnail}`);
  const styleCSS = !project.isDone ? "project-card disabled" : "project-card";
  const modal = !project.isDone ? null : <ProjectDetails project={project} />;

  return (
    <div className={styleCSS} onClick={() => setModal(modal)}>
      <img src={image} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
}
