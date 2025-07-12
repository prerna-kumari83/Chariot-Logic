import React, { useState } from "react";
import api from "../api"; // Adjust path if needed
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    api.post("/auth/register", { name, email, password, location })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        api.defaults.headers.common["x-auth-token"] = res.data.token;
        onRegister(res.data.user);
        navigate("/home");
      })
      .catch(err => {
        setError(
          err.response?.data?.msg ||
          "Registration failed. Please try again."
        );
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          minLength={6}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        {error && <div className="signup-error">{error}</div>}
        <button type="submit">Register</button>
        <div className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}
