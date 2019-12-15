import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <NavLink className="NavLink" to="/ClassesSchedule">Classes Schedule</NavLink>
            <NavLink className="NavLink" to="/BellsSchedule">Bells Schedule</NavLink>
            <NavLink className="NavLink" to="/Classes">Classes</NavLink>
            <NavLink className="NavLink" to="/Teachers">Teachers</NavLink>
        </div>
    );
};

export default NavBar;