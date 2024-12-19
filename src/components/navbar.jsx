import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext.jsx"

export default function Navbar() {

    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout(); // Clear user state
        navigate("/"); // Redirect to Home after logout
    }
                // Task 2 - Create a Layout component with a Navbar containing links to "Home", "About", and "Blog".
                // Task 3 - Define routes for Home (/), About (/about), and Blog (/blog).
                // Task 9 - Use NavLink to enable active link styling in the Navbar. 
    return(
        <nav className="navbar">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink></li>
            
          </ul>
          <div className="auth-controls">
            {user ? (
              <>
                <span>Welcome, {user.username}!</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
        </nav>
      )
}