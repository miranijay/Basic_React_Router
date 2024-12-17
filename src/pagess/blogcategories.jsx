import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blogcategories() {

    const navigate = useNavigate()

    return(
        <div>
            <h2>Blog Categories</h2>
            <button onClick={() => navigate("/blog")}>Back</button>
        </div>
    )
}