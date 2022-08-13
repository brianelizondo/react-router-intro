import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return (
        <nav className="NavBar">
            <NavLink to="/" className={({ isActive }) => isActive ? "NavBar-active" : ""}>Home</NavLink>
            <NavLink to="/soda" className={({ isActive }) => isActive ? "NavBar-active" : ""}>Soda</NavLink>
            <NavLink to="/chips" className={({ isActive }) => isActive ? "NavBar-active" : ""}>Chips</NavLink>
            <NavLink to="/sardines" className={({ isActive }) => isActive ? "NavBar-active" : ""}>Fresh Sardines</NavLink>
        </nav>
    );
}

export default NavBar;