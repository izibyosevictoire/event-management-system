import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();

    // Validate form inputs (you can add more validation logic)
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Create an event object with the form data
    const response = await fetch("http://localhost:4001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Call the onEventSubmit callback to handle the submitted event
    const data = await response.json();
    console.log(data.user);

    if (data.user) {
      localStorage.setItem("token", data);
      alert("Login SuceessFull");
      navigate("/");
    } else {
      alert("Please Check Again");
    }

    // Clear the form fields after submission
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Event Management</span>
          <span className="title">Login</span>

          <form onSubmit={handleFormSubmit}>
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

            <button> Login</button>
          </form>
          <p>
            Don't you have an Account ? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
