import TechnologyItemDetails from "./TechnologyItemDetails";

export default function TechnologyItem({ techItem, setModal }) {
  return (
    <div
      className="tech-item"
      onClick={() => setModal(<TechnologyItemDetails techItem={techItem} />)}
    >
      {/* make the require a variable */}
      <img
        src={require(`../assets/images/technologies/${techItem.logo}`)}
        alt={techItem.name}
      />
      <h3>{techItem.name}</h3>
    </div>
  );
}
