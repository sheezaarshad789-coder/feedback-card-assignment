import { useState } from "react";
import "./FeedbackCard.css";

function FeedbackCard() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Shiza");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isOverLimit = text.length > 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setText("");
    setName("Shiza");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="feedback-success">
        <div className="feedback-success-card">
          <div className="feedback-success-badge" aria-hidden="true">✓</div>
          <p className="feedback-eyebrow">FEEDBACK RECEIVED</p>
          <h2 className="feedback-success-title">Thank you!</h2>
          <p className="feedback-success-text">
            Your feedback from {name || "Anonymous"} has been submitted.
          </p>
          <button type="button" className="feedback-success-button" onClick={handleReset}>
            Give more feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-page">
      <div className="feedback-card">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="feedback-intro">
            <p className="feedback-eyebrow">WE’D LOVE TO HEAR FROM YOU</p>
            <h2 className="feedback-header">Leave your feedback.</h2>
            <p className="feedback-description">
              A few words can help us make your experience even better.
            </p>
          </div>

          <div className="feedback-field">
            <label htmlFor="name" className="feedback-label">
              Name
            </label>
            <input
              id="name"
              className="feedback-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>

          <div className="feedback-field">
            <label htmlFor="feedback" className="feedback-label">
              Feedback
            </label>
            <textarea
              id="feedback"
              className="feedback-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your feedback here..."
              spellCheck="true"
            />
          </div>

          <div className="feedback-meta">
            <p className={`feedback-counter ${isOverLimit ? "warning" : ""}`} aria-live="polite">
              {text.length}/100 characters
            </p>
            {isOverLimit && <p className="feedback-warning">Character limit exceeded</p>}
          </div>

          <button type="submit" className="feedback-button" disabled={text.length === 0}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackCard;