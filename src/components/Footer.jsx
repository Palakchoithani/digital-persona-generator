import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">✨ Digital Persona Generator</span>
          <span className="footer-tagline">
            Create compelling user personas with AI
          </span>
        </div>

        <nav className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/wizard" className="footer-link">
            Create Persona
          </Link>
          <Link to="/results" className="footer-link">
            View Results
          </Link>
        </nav>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 Digital Persona Generator
          </span>
          <span className="footer-credit">
            Made with <span className="footer-credit-heart">❤️</span> by Palak
            Choithani
          </span>
        </div>
      </div>
    </footer>
  );
}
