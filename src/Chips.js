import React from "react";
import { Link } from "react-router-dom";
import './Chips.css';

function Chips(){
    return (
        <div className="Chips">
            <div className="Chips-links">
                <div>i like the chips</div>
                <div>EAT EAT EAT</div>
                <div><Link to="/">go back</Link></div>
            </div>
        </div>
    );
}

export default Chips;