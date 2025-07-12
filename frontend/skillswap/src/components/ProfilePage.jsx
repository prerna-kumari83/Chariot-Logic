import React, { useState } from "react";
import "./ProfilePage.css";

export default function ProfilePage({ profile, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [isPublic, setIsPublic] = useState(profile.isPublic);
  const [availability, setAvailability] = useState(profile.availability || []);
  // ...other state for name, location, photo, skills...

  const handleSave = () => {
    onUpdate({ ...profile, isPublic, availability /* ...other fields */ });
    setEditing(false);
  };

  return (
    <div className="profile-container">
      {/* ...profile info, photo upload, skills offered/wanted... */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={e => setIsPublic(e.target.checked)}
            disabled={!editing}
          />
          Make profile public
        </label>
      </div>
      <div>
        <label>Availability:</label>
        {editing ? (
          <>
            <label><input type="checkbox" checked={availability.includes("weekends")}
              onChange={e => setAvailability(
                e.target.checked
                  ? [...availability, "weekends"]
                  : availability.filter(a => a !== "weekends")
              )}
            /> Weekends</label>
            <label><input type="checkbox" checked={availability.includes("evenings")}
              onChange={e => setAvailability(
                e.target.checked
                  ? [...availability, "evenings"]
                  : availability.filter(a => a !== "evenings")
              )}
            /> Evenings</label>
          </>
        ) : (
          <span>{availability.join(", ") || "Not specified"}</span>
        )}
      </div>
      {/* ...skills management, feedback display... */}
      {editing
        ? <button onClick={handleSave}>Save</button>
        : <button onClick={() => setEditing(true)}>Edit Profile</button>
      }
    </div>
  );
}
