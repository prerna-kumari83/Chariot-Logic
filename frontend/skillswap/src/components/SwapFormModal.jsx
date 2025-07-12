import React, { useState } from "react";
import "./SwapFormModal.css";

export default function SwapFormModal({ offeredSkills, wantedSkills, onSubmit, onClose }) {
  const [selectedOffered, setSelectedOffered] = useState(offeredSkills[0] || "");
  const [selectedWanted, setSelectedWanted] = useState(wantedSkills[0] || "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ offered: selectedOffered, wanted: selectedWanted, message });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Request a Skill Swap</h2>
        <form onSubmit={handleSubmit}>
          <label>Offer one of your skills</label>
          <select value={selectedOffered} onChange={e => setSelectedOffered(e.target.value)}>
            {offeredSkills.map(skill => <option key={skill}>{skill}</option>)}
          </select>
          <label>Request one of their skills</label>
          <select value={selectedWanted} onChange={e => setSelectedWanted(e.target.value)}>
            {wantedSkills.map(skill => <option key={skill}>{skill}</option>)}
          </select>
          <label>Message (optional)</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
          <div className="modal-actions">
            <button type="submit">Send Request</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
