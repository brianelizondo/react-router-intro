import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import VendingMachine from './VendingMachine';
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/sardines" element={<Sardines />} />
        </Routes>
    </div>
    );
}

export default App;
