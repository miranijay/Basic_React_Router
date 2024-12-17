import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

                          // Task 1 - Install react-router-dom and configure routing in the app. 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
