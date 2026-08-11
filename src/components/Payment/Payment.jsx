import { business } from "../../utils/constants";
import "./Payment.css";

export default function Payment() {
  const hasPaymentUrl = Boolean(business.paymentUrl);

  return (
    <section className="payment" id="payment" aria-labelledby="payment-title">
      <div className="container">
        <div className="payment__intro">
          <p className="eyebrow">ONLINE PAYMENTS</p>
          <h2 className="section-title" id="payment-title">
            Pay My Bill
          </h2>
          <p className="section-copy">
            Choose a secure payment option below. Payments are processed safely
            through Square.
          </p>
        </div>

        <div className="payment__grid">
          <article className="payment-card">
            <div>
              <h3>Make a One-Time Payment</h3>
              <p>Pay your current balance securely through Square.</p>
            </div>
            {hasPaymentUrl ? (
              <a
                className="button button--primary payment-card__button"
                href={business.paymentUrl}
                target="_blank"
                rel="noreferrer"
              >
                Make a Payment
              </a>
            ) : (
              <>
                <button
                  className="button button--primary payment-card__button payment-card__button--disabled"
                  type="button"
                  disabled
                >
                  Make a Payment
                </button>
                <p className="payment-card__notice" role="status">
                  Online payment link coming soon. Please call us for
                  assistance.
                </p>
              </>
            )}
          </article>

          <article className="payment-card payment-card--autopay">
            <div>
              <h3>Enroll in AutoPay</h3>
              <p>Contact us to authorize convenient automatic payments.</p>
            </div>
            <a
              className="button payment-card__button payment-card__button--contact"
              href={`tel:${business.phone}`}
            >
              Enroll in AutoPay
            </a>
            <p className="payment-card__notice">
              Because customer bills may vary, AutoPay enrollment is completed
              directly with our office.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
