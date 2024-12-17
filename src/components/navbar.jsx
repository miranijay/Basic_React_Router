import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {

                // Task 2 - Create a Layout component with a Navbar containing links to "Home", "About", and "Blog".
                // Task 3 - Define routes for Home (/), About (/about), and Blog (/blog).
                // Task 9 - Use NavLink to enable active link styling in the Navbar. 
    return(
                                    // NavLink - Used for navigation and applies active styling based on the current route.
        <nav className="navbar">
            <ul>
                <li><NavLink to = '/' className={({ isActive }) => isActive ? 'active' : ''}><li>Home</li></NavLink></li>
                <li><NavLink to = '/about' className={({ isActive }) => isActive ? 'active' : ''}><li>About</li></NavLink></li>
                <li><NavLink to = '/blog' className={({ isActive }) => isActive ? 'active' : ''}><li>Blog</li></NavLink></li>
            </ul>
        </nav>
    )
}