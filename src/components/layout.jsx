import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "./navbar";

export default function layout() {

    return(
                                        // Outlet - Placeholder for rendering child routes (nested routes).
        <div>
            <Navbar />
            <main className="container">
                <Outlet />                          
            </main>
        </div>
    )
}