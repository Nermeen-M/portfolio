export default function TechnologyItem({techItem}) {
  return <div className="tech-item">
        <img src={require(`../assets/images/technologies/${techItem.logo}`)} alt={techItem.name} />
        <h3>{techItem.name}</h3>
  </div>
}
