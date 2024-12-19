import React, { createContext, useContext, useState } from "react";

// Create AuthContext
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null) // Current logged-in user
  const [permissions, setPermissions] = useState([]) // Permissions granted by admin

  const login = (username, password) => {

    // Simulate admin credentials
    if (username === "admin" && password === "admin123") {
      setUser({ username, role: "admin" })
      return "success"
    }

    // Simulate user login
    if (username === "user" && password === "user123") {
      setUser({ username, role: "user" })
      return "success"
    }

    return "invalid"
  }

  const logout = () => setUser(null)

  const hasPermission = () => user?.role === "admin" 

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  )
}
