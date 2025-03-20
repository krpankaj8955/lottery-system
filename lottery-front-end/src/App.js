import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React by Manish Sharma
      </a>
    </header>
  );
}

export default App;
