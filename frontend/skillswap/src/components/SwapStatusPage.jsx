import React from "react";
import "./SwapStatusPage.css";

export default function SwapStatusPage({ requests, onAccept, onReject, onDelete }) {
  return (
    <div>
      <h2>Swap Requests</h2>
      {(requests || []).map(req => (
        <div key={req._id} className="swap-status-card">
          <div>
            <strong>{req.fromUser.name}</strong> → <strong>{req.toUser.name}</strong>
            <div>Skill: {req.offeredSkill} for {req.wantedSkill}</div>
            <div>Status: {req.status}</div>
          </div>
          {req.status === "Pending" && (
            <>
              <button onClick={() => onAccept(req._id)}>Accept</button>
              <button onClick={() => onReject(req._id)}>Reject</button>
            </>
          )}
          {req.status === "Requested" && (
            <button onClick={() => onDelete(req._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}
