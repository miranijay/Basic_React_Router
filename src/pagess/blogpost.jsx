import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../dummydata.jsx";

export default function Blogpost() {
  const { postid } = useParams()                    // Task 6 - Use route parameters to display blog post details from dummy data. 
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.id === parseInt(postid))

  if (!post) {
    return <h2>Blog Post Not Found</h2>
  }

  return (
                                    // Task 7 - Add a "Back" button on the blog post details page to navigate back to /blog. 
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => navigate("/blog")}>Back</button>
    </div>
  )
}


