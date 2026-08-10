import { reviews } from "../../utils/constants";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <p className="eyebrow">Community feedback</p>
        <h2 className="section-title">Trusted to get it done.</h2>
        <div className="testimonials__grid">
          {reviews.map((review, index) => (
            <blockquote
              className={`review ${index === 0 ? "review--featured" : ""}`}
              key={review.name}
            >
              <div className="review__stars" aria-label="Five stars">
                ★★★★★
              </div>
              <p>“{review.quote}”</p>
              <footer>— {review.name}, customer review</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
