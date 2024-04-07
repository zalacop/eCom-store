import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ isOpen, toggleMenu }) {
    return (
        <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
