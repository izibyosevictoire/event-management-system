import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();

    // Validate form inputs (you can add more validation logic)
    if (!email || !name || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Create an event object with the form data
    const response = await fetch("http://localhost:4001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    // Call the onEventSubmit callback to handle the submitted event
    const data = await response.json();
    console.log(data);
    navigate("/login");

    // Clear the form fields after submission
    setEmail("");
    setPassword("");
    setName("");
  }
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Event Management</span>
          <span className="title">Regiter</span>

          <form onSubmit={handleFormSubmit}>
            <input
              value={name}
              type="text"
              placeholder="display name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button> Sign in</button>
          </form>
          <p>
            Do you have an Account ? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
