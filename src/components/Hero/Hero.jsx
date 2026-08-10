import truck from "../../assets/images/chaparral-disposal-truck-front.png";
import { business } from "../../utils/constants";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__backdrop">
        <img
          src={truck}
          alt="Chaparral Disposal collection truck ready for service"
        />
      </div>
      <div className="hero__shade"></div>
      <div className="container hero__content">
        <p className="hero__eyebrow">Your local disposal company</p>
        <h1 className="hero__title">
          Fast pickup.
          <br />
          <span>Clean results.</span>
        </h1>
        <p className="hero__copy">
          Residential and commercial trash service you can depend on—right here
          in Chaparral.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href={`tel:${business.phone}`}>
            Call {business.phoneDisplay}
          </a>
          <a className="button button--secondary" href="#services">
            Explore Services
          </a>
        </div>
        <p className="hero__note">Serving our community since 1994.</p>
      </div>
    </section>
  );
}
