import React from "react";
import { blogPosts } from "../dummydata.jsx";
import { useNavigate, useParams } from "react-router-dom";


function checkPermission(blogId) {

  const allowedBlogs = [1, 2, 3]        // Only allow access to posts 1, 2, 3
  return allowedBlogs.includes(blogId)
}


export default function withpermission(Component) {                // HOC


  return(
    function PermissionWrapper(props) {
        const { postId } = useParams()
        const navigate = useNavigate()


        const post = blogPosts.find((p) => p.id === Number(postId))


        if (!post) {
            return(
                <div>
                    <h2>Blog Post Not Found</h2>
                    <button onClick={() => navigate("/blog")}>Back</button>
                </div>
            )
        }


        if (post.requiresPermission && !checkPermission(post.id)) {
            return(
                <div>
                    <h2 style={{color:"red"}}>You don't have access to view this blog post.</h2>
                    <button onClick={() => navigate("/blog")}>Back</button>
                </div> 
            )
        }

        return <Component {...props} postId={postId} />
    })
}


