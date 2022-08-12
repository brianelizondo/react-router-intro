import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css';

function VendingMachine(){
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-title">
                hello i am a vending machine. what would you like to eat?
            </div>
            <div className="VendingMachine-links">
                <div><Link to="/soda">soda</Link></div>
                <div><Link to="/chips">chips</Link></div>
                <div><Link to="/sardines">fresh sardines</Link></div>
            </div>
        </div>
    );
}

export default VendingMachine;