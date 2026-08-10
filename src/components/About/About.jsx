import containers from "../../assets/images/chaparral-disposal-containers.webp";
import "./About.css";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__image">
          <img
            src={containers}
            alt="Residential trash cart and commercial dumpster available from Chaparral Disposal"
          />
          <span>Chaparral, New Mexico</span>
        </div>
        <div className="about__content">
          <p className="about__eyebrow">Rooted in Chaparral</p>
          <h2 className="section-title">Local service that shows up.</h2>
          <p className="section-copy">
            Chaparral Disposal Service is a locally based trash disposal company
            proudly serving the Chaparral community and surrounding areas for
            more than a decade.
          </p>
          <p className="section-copy">
            As a growing community-based company, we believe good service
            doesn’t have to come with a high price. Our customers count on
            dependable pickups, competitive rates, and friendly service from a
            company that is part of the community we serve.
          </p>
          <div className="about__statement">
            Dependable service.
            <br />
            <span>At a better rate.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
