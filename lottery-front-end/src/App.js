import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Signup from "./Signup"; // Import Signup page

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar */}
        <div className="navbar">
          <Link to="/signup">
            <button className="auth-button">Sign Up</button>
          </Link>
          <button className="auth-button">Login</button>
        </div>

        {/* Main content divided into two sections */}
        <div className="content">
          {/* Left Section */}
          <div className="left-section">
            <h2>Here are list of some trending lotteries</h2>
            <div className="lottery-container">
              <div className="lottery-box">Lottery 1</div>
              <div className="lottery-box">Lottery 2</div>
              <div className="lottery-box">Lottery 3</div>
              <div className="lottery-box">Lottery 4</div>
            </div>
          </div>

          {/* Right Section (Can be used later for additional content) */}
          <div className="right-section">
            {/* You can add content here if needed */}
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
