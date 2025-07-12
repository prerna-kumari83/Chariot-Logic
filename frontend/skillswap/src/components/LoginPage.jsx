import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import "./LoginPage.css";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/auth/login", { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        api.defaults.headers.common["x-auth-token"] = res.data.token;
        onLogin(res.data.user);
        navigate("/home");
      })
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="login-footer">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="signup-link">Sign Up</Link>
      </div>
    </div>
  );
}
