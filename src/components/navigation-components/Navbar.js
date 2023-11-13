import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <div className="Navbar">
            <h1 className="item-1"> Data + Engineering </h1>
            <nav className="item-2">
                <ul>
                    <li><NavLink to= '/About'>About</NavLink></li>
                    <li><NavLink to='/Project'> Projects</NavLink></li>
                    <li><NavLink to= '/Blog'> Blogs</NavLink></li>
                    <li><NavLink to= '/Contact'> Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};
