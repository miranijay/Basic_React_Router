import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute ({isAuthenticated, children}) {

                                    // Task 11 - Implement a Protected Route component to restrict access to specific routes unless the user is authenticated.  
    if(!isAuthenticated) {
        return <Navigate to = '/' replace />
    }

    return children

}