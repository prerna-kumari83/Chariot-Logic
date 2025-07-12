import React, { useState } from "react";
import "./HomePage.css";

const demoUsers = [
  {
    _id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    location: "San Francisco",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    skillsOffered: ["React", "Node.js"],
    skillsWanted: ["UI Design"],
    availability: ["weekends", "evenings"],
  },
  {
    _id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    location: "New York",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    skillsOffered: ["Python", "Data Analysis"],
    skillsWanted: ["React", "Docker"],
    availability: ["weekdays"],
  },
  {
    _id: "3",
    name: "Carla Gomez",
    email: "carla@example.com",
    location: "Madrid",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    skillsOffered: ["UI Design", "Figma"],
    skillsWanted: ["Python", "English"],
    availability: ["weekends"],
  }
];

export default function HomePage({ user, users }) {
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Use demo data if users prop is not provided
  const allUsers = users || demoUsers;

  // Filter users by availability and search term
  const filteredUsers = (allUsers || []).filter(u =>
    (!availabilityFilter || (u.availability || []).includes(availabilityFilter)) &&
    (
      !search ||
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      (u.location && u.location.toLowerCase().includes(search.toLowerCase())) ||
      (u.skillsOffered && u.skillsOffered.join(",").toLowerCase().includes(search.toLowerCase())) ||
      (u.skillsWanted && u.skillsWanted.join(",").toLowerCase().includes(search.toLowerCase()))
    )
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  return (
    <div className="home-container">
      <h2>All Members</h2>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name, skill, or location"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
        <select
          value={availabilityFilter}
          onChange={e => setAvailabilityFilter(e.target.value)}
        >
          <option value="">Any Availability</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="evenings">Evenings</option>
        </select>
      </form>
      <ul className="member-list">
        {filteredUsers.map(member => (
          <li key={member._id} className="member-card">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <div className="member-info">
              <strong className="member-name">{member.name}</strong>
              <div className="member-location">{member.location}</div>
              <div className="member-skills">
                <span className="skills-label">Offers:</span> {member.skillsOffered.join(", ")}
              </div>
              <div className="member-skills">
                <span className="skills-label">Wants:</span> {member.skillsWanted.join(", ")}
              </div>
              <div className="member-availability">
                <span className="availability-label">Availability:</span> {(member.availability || []).join(", ")}
              </div>
              {user && (
                <button className="request-btn">
                  Request
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {!filteredUsers.length && <div className="no-users-msg">No users found for your search.</div>}
    </div>
  );
}
