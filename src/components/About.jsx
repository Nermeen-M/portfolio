import aboutImg from "./../assets/images/about-img.png";
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About me</h2>
        <div className="content">
          <div className="description">
            <p>
              Hi! My name is Nermeen and I’m a frontend developer. I’m from
              Egypt and moved to Sweden recently. This is my website to showcase
              my skills and projects I have done so far!{" "}
            </p>
            <p>
              Please take a look at my page and have a good time. I hope to hear
              from you soon.
            </p>
          </div>
          <div className="image-container">
            <img src={aboutImg} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
