import ProjectDetails from "./ProjectDetails";
export default function ProjectCard({project, setModal}){
    return(
        <div className={!project.isDone ? "project-card disabled" : "project-card"} onClick={() => !project.isDone ? setModal(null) : setModal(<ProjectDetails project={project} />)}>
            <img src={require(`../assets/images/projects/${project.thumbnail}`)} alt={project.title} />
            <h3>{project.title}</h3>
        </div>
    );
}