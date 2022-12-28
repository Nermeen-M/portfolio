export default function ProjectCard(props){
    return(<div className="project-card">
        <img src={require(`../assets/images/projects/${props.thumbnail}`)} alt={props.title} />
        <h3>{props.title}</h3>
    </div>);
}