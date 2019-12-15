import React from 'react';
import {NavLink} from "react-router-dom";

const PageError = () => {
    return (
        <div>
            <h1>Oops! Something went wrong</h1>
            <NavLink className="NavLink" to="/">Go Home</NavLink>
        </div>
    );
};

export default PageError;