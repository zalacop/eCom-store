import React, { useState } from "react";
import CartIcon from "../CartIcon";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="sticky-top m-0 w-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand d-flex justify-content-center">
                        <h1 className="fs-2">eCom Store</h1>
                    </Link>
                    <div className="d-lg-none ml-auto">
                        <CartIcon />
                    </div>
                    <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
                            </li>
                        </ul>
                        <div className="d-none d-lg-block">
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;