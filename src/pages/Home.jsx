import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-icon">🚀</span>
            <span>AI-Powered Persona Creation</span>
          </div>

          <h1 className="hero-title">
            Create{" "}
            <span className="hero-title-highlight">Digital Personas</span> That
            Bring Your Users to Life
          </h1>

          <p className="hero-description">
            Transform your product development with AI-generated user personas.
            Understand your audience better, make informed decisions, and design
            experiences that truly resonate.
          </p>

          <div className="hero-actions">
            <Link to="/wizard" className="btn btn-gradient btn-lg">
              ✨ Start Creating
            </Link>
            <Link to="/results" className="btn btn-secondary btn-lg">
              View Examples
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">AI</div>
              <div className="hero-stat-label">Powered Generation</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Fast</div>
              <div className="hero-stat-label">Instant Results</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Free</div>
              <div className="hero-stat-label">No Cost to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <p className="features-label">Features</p>
          <h2 className="features-title">Everything You Need</h2>
        </div>

        <div className="features-grid">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Smart Questionnaire</h3>
            <p className="card-description">
              Answer a few simple questions about your target audience and let
              our AI do the heavy lifting to create detailed personas.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🎨</div>
            <h3 className="card-title">Visual Moodboards</h3>
            <p className="card-description">
              Get beautiful, curated moodboards that visually represent your
              persona's lifestyle, preferences, and aesthetic.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📤</div>
            <h3 className="card-title">Easy Export</h3>
            <p className="card-description">
              Export your personas as images or share them with your team.
              Perfect for presentations and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Ready to Create Your Persona?</h2>
          <p className="cta-description">
            Start the wizard now and have your first AI-generated persona in
            minutes.
          </p>
          <Link to="/wizard" className="btn btn-gradient btn-lg">
            🚀 Launch Wizard
          </Link>
        </div>
      </section>
    </div>
  );
}
