import TechnologyItem from "./TechnologyItem";

export default function Technologies(props) {
  return (
    <section id="tech">
      <div className="container">
        <h2 className="light-green-text">Tech</h2>
        <div className="content">
          <div className="description">
            <p>
              Here are the technologies that I already know, and also the ones
              I'm learning.
            </p>
          </div>
          <div className="tech-list">
            {props.techList.map((techItem) => (
              <TechnologyItem
                key={techItem.id}
                techItem={techItem}
                setModal={props.setModal}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
