import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import SwapStatusPage from "./components/SwapStatusPage";
import "./styles/main.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header user={user} onLogout={() => setUser(null)} />
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<LoginPage onLogin={setUser} />} />
            <Route path="/signup" element={<SignupPage onRegister={setUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage profile={user} />} />
            <Route path="/swap-status" element={<SwapStatusPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
