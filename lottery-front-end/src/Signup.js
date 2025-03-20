import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.email || !formData.password || !formData.name || !formData.contact) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("User signed up:", formData);
    setSignupSuccess(true); // Show success message
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>

      {signupSuccess ? (
        <p className="success-message">✅ Signup is done!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact" onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
