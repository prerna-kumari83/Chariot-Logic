import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../assets/skillswap-logo.png";


export default function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="logo-area">
        <img src={logo} alt="Skill Swap Platform Logo" className="logo-img" />
     

        <span className="logo-text">Skill Swap Platform</span>
      </div>
      <nav>
        {/* {user && ( */}
          <>
            <Link to="/home" className="tab">Home</Link>
            <Link to="/swap-status" className="tab">Swap Status</Link>
            <Link to="/profile" className="tab">Profile</Link> 
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        {/* )} */}
      </nav>
    </header>
  );
}
