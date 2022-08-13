import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import './Sardines.css';

function Sardines(){
    return (
        <div className="Sardines">
            <div className="Sardines-navbar">
                <NavBar />
            </div>
            <div className="Sardines-links">
                <div>you don't eat the sardines. the sardines, they eat you.</div>
                <div><Link to="/">go back</Link></div>
            </div>
        </div>
    );
}

export default Sardines;