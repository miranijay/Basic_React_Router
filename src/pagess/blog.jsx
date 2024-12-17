import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { blogPosts } from "../dummydata.jsx";

export default function Blog() {
                                    // Task 6 - Use route parameters to display blog post details from dummy data. 
                                    // Task 10 - Add query parameters to the /blog route to handle sorting (e.g., ?sort=asc). 

        const [searchParams, setSearchParams] = useSearchParams()  // searchParam - A React Router hook that lets us read and update the query parameters in the URL
        const sort = searchParams.get('sort') || 'asc'

        const sortedposts = [...blogPosts].sort((a,b) => {
            const idA = parseInt(a.id, 10)
            const idB = parseInt(b.id, 10)  
    
            if (isNaN(idA) || isNaN(idB)) {
                console.error('Invalid ID values:', a.id, b.id)
                return 0;  
            }

            return sort === "asc" ? idA - idB : idB - idA;
        })
        


    return(
        <div className="blog-container">
            <h1>Blog Posts</h1>
            <div>
                <button onClick={() => setSearchParams({ sort: "asc" })}>Sort Asc</button>
                <button onClick={() => setSearchParams({ sort: "desc" })}>Sort Desc</button>
            </div>
            <ul className="blog-posts-list">
                {sortedposts.map((posts) => (
                <li key={posts.id} className="post">
                    <NavLink to={`/blog/${posts.id}`}>{posts.title}</NavLink>
                </li>
                ))}
            </ul>
            <p>Current Sorting: {sort}</p>
            <Link to="authors">Authors</Link> | <Link to="categories">Categories</Link>
        </div>
    )
}