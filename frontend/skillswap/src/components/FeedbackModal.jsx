import React, { useState } from "react";
import "./FeedbackModal.css";

export default function FeedbackModal({ onSubmit, onClose }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment, date: new Date().toISOString().slice(0,10) });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Leave Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label>Rating:</label>
          <select value={rating} onChange={e => setRating(Number(e.target.value))}>
            {[5,4,3,2,1].map(num => (
              <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
            ))}
          </select>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Share your experience"
          />
          <div className="modal-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
