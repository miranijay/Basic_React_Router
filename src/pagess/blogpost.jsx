import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../dummydata.jsx";
import { useAuth } from "../context/authContext.jsx";


export default function Blogpost() {
                 // Task 6 - Use route parameters to display blog post details from dummy data. 
  const { postId } = useParams()
  const navigate = useNavigate()
  const { hasPermission } = useAuth()

  const post = blogPosts.find((p) => p.id === parseInt(postId))

  if (!post) {
    return <h2>Blog Post Not Found</h2>
  }

  if (post.adminOnly && !hasPermission(post.id)) {
    return <h2>Access Denied: This post is restricted.</h2>
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

