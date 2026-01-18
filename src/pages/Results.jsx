import React from "react";
import { Link } from "react-router-dom";
import { usePersonaStore } from "../store/personaStore";
import { exportJSON, exportHTML } from "../utils/exportUtils.js";

const highlightIcons = ["🌟", "🎯", "🔥", "💫", "✨", "🎨", "💡", "🚀"];

const Results = () => {
  // Destructure persona and regeneratePersona action from store
  const { persona, regeneratePersona } = usePersonaStore();

  // Handle case where no persona exists
  if (!persona) {
    return (
      <div className="results-empty">
        <div className="results-empty-icon">📋</div>
        <h2 className="results-empty-title">No Persona Yet</h2>
        <p className="results-empty-text">
          Create your digital persona using the wizard to see results here.
        </p>
        <Link to="/wizard" className="btn btn-gradient btn-lg">
          ✨ Start Wizard
        </Link>
      </div>
    );
  }

  return (
    <div className="results">
      {/* BIO */}
      <section className="results-section">
        <h2 className="results-section-title">
          <span className="results-section-icon">📝</span>
          Bio
        </h2>
        <p className="results-bio">{persona.bio}</p>
      </section>

      {/* AVATAR */}
      <section className="results-section">
        <h2 className="results-section-title">
          <span className="results-section-icon">👤</span>
          Avatar
        </h2>
        <img
          src={persona.avatar}
          alt="avatar"
          className="results-avatar"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </section>

      {/* COLOR PALETTE */}
      {persona.colors && persona.colors.length > 0 && (
        <section className="results-section">
          <h2 className="results-section-title">
            <span className="results-section-icon">🎨</span>
            Color Palette
          </h2>
          <div className="results-colors">
            {persona.colors.map((c, i) => (
              <div
                key={i}
                className="results-color"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
        </section>
      )}

      {/* MOODBOARD */}
      {persona.moodboard && persona.moodboard.length > 0 && (
        <section className="results-section">
          <h2 className="results-section-title">
            <span className="results-section-icon">🖼️</span>
            Aesthetic Moodboard
          </h2>
          <div className="results-moodboard">
            {persona.moodboard.map((url, i) => (
              <div key={i} className="results-moodboard-item">
                <img src={url} alt="mood" className="results-moodboard-img" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* IG HIGHLIGHT COVERS */}
      {persona.highlights && persona.highlights.length > 0 && (
        <section className="results-section">
          <h2 className="results-section-title">
            <span className="results-section-icon">📱</span>
            IG Highlight Covers
          </h2>
          <div className="results-highlights">
            {persona.highlights.map((h, i) => (
              <div key={i} className="results-highlight">
                <div className="results-highlight-circle">
                  {highlightIcons[i % highlightIcons.length]}
                </div>
                <span className="results-highlight-label">{h}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WEBSITE PREVIEW */}
      {persona.website && (
        <section className="results-section">
          <h2 className="results-section-title">
            <span className="results-section-icon">🌐</span>
            Website Preview
          </h2>
          <div className="results-website-preview">
            <div className="results-website-header">
              <span className="results-website-dot red"></span>
              <span className="results-website-dot yellow"></span>
              <span className="results-website-dot green"></span>
            </div>
            <div
              className="results-website-content"
              dangerouslySetInnerHTML={{ __html: persona.website }}
            />
          </div>
        </section>
      )}

      {/* ACTION BUTTONS */}
      <div className="results-actions">
        <button
          onClick={async () => await regeneratePersona()}
          className="results-btn results-btn-primary"
        >
          <span className="results-btn-icon">🔄</span>
          Regenerate Persona
        </button>

        <button
          onClick={() => exportJSON(persona)}
          className="results-btn results-btn-secondary"
        >
          <span className="results-btn-icon">📥</span>
          Download JSON
        </button>

        <button
          onClick={() => exportHTML(persona)}
          className="results-btn results-btn-secondary"
        >
          <span className="results-btn-icon">🌐</span>
          Export Website HTML
        </button>
      </div>
    </div>
  );
};

export default Results;

