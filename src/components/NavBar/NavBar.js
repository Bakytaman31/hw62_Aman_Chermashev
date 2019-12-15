import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ClassesSchedule">Classes Schedule</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/BellsSchedule">Bells Schedule</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Classes">Classes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Teachers">Teachers</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;