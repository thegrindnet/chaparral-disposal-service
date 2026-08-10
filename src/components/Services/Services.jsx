import { services, business } from "../../utils/constants";
import "./Services.css";
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__intro">
          <div>
            <p className="eyebrow">How we can help</p>
            <h2 className="section-title">
              Straightforward service.
              <br />
              No unnecessary hassle.
            </h2>
          </div>
          <p className="section-copy">
            From the curb at home to a larger container at your business, we
            provide dependable trash disposal for the people and businesses of
            our community.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              {/* <span className="service-card__number">{service.number}</span> */}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={`tel:${business.phone}`}>Ask about this service →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
