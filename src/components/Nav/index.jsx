import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container">
        //         <Link className="navbar-brand" to="/">Your Brand</Link>
        //         <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item">
        //                     <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
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
        </div>
    </nav>
    );
}

export default Nav;
