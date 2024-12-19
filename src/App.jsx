import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './pagess/home.jsx'
import About from './pagess/about.jsx'
import Blog from './pagess/blog.jsx'
import Blogpost from './pagess/blogpost.jsx'
import Blogauthors from './pagess/blogauthors.jsx'
import Blogcategories from './pagess/blogcategories.jsx'
import ProtectedRoute from './components/protectedRoute.jsx'
import Notfound from './components/notfound.jsx'
import Login from './components/login.jsx'
import NotAuthorized from './components/notauthorized.jsx'
import AdminRoute from './components/adminRoute.jsx'


export default function App() {

  const isAuthenticated = true

  return (
                                // Task 4 - Add a dynamic route for individual blog posts (/blog/:postId).
                                // Task 5 - Create nested routes under /blog for authors (/blog/authors) and categories (/blog/categories). 
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About />}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/authors' element={<Blogauthors />} />
        <Route path='blog/categories' element={<Blogcategories />} /> 
        <Route path='blog/:postId' element={<Blogpost />} />    
        <Route path='protected' element= {
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <h1>Protected Route</h1>
          </ProtectedRoute>}
        />
        <Route path='*' element={<Notfound />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminRoute><h1>Welcome, Admin</h1></AdminRoute>}/>
        <Route path="not-authorized" element={<NotAuthorized />} />
      </Route>
    </Routes>
    
  )
}

