import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(username, password)

    if (result === "success") {
      navigate("/")
    } else {
      setError("Invalid username or password.")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          style={{
            border: "none",
            padding: "10px",
            margin: "10px",
            width: "100%",
          }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{
            border: "none",
            padding: "10px",
            margin: "10px",
            width: "100%",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
            style={{
                borderRadius: "6px",
                padding: "10px",
                margin: "10px",
                width: "100%",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                cursor: "pointer",
            }}
            type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
