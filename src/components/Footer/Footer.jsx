import logo from "../../assets/images/chaparral-disposal-logo.webp";
import { business, navLinks } from "../../utils/constants";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__logo_tag-line">
          <img
            className="footer__logo"
            src={logo}
            alt="Chaparral Disposal Service"
          />
          <p>Fast Pickup. Clean Results.</p>
        </div>
        <div>
          <strong>Quick links</strong>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <strong>Contact</strong>
          <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
          <a href={business.mapUrl} target="_blank" rel="noreferrer">
            {business.address}
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Chaparral Disposal Service LLC</span>
        <span>Proudly serving Chaparral, New Mexico</span>
      </div>
    </footer>
  );
}
