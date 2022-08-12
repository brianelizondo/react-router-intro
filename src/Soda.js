import React from "react";
import { Link } from "react-router-dom";
import './Soda.css';

function Soda(){
    return (
        <div className="Soda">
            <div className="Soda-can"></div>
            <div className="Soda-links">
                <div>omg sugaaaaaaar</div>
                <div><Link to="/">go back</Link></div>
            </div>
            <div className="Soda-can"></div>
        </div>
    );
}

export default Soda;