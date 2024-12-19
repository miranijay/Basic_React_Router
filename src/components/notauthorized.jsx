import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotAuthorized() {

    const navigate = useNavigate()

  return (
    <div>
      <h1>403 - Not Authorized</h1>
      <p>You do not have permission to view this page. Please contact the admin if you think this is a mistake.</p>
      <p>Go to <span style={{color:"blue", cursor:"pointer", textDecorationLine:"underline"}} onClick={() => navigate("/login")}>Login</span> Page </p>
    </div>
  )
}


