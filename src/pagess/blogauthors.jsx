import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blogauthors() {

    const navigate = useNavigate()

  return (
    <div>
        <h2>Blog Authors</h2>
        <button onClick={() => navigate("/blog")}>Back</button>
    </div>
  )
}