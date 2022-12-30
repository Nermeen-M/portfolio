export default function TechnologyItemDetails({techItem}){
    return <div className="tech-item-details">
        <h2>{techItem.name}</h2>
        <p>{techItem.description}</p>
    </div>
}