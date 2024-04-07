import React from "react";
import CartIcon from "../CartIcon";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="sticky-top m-0">
        <div className="container">
            <div className="d-flex justify-content-start align-items-center gap-5">
                <div className="col-md-4">
                    <Nav />
                </div>
                <Link to="/" className="col-md-4 text-center">
                    <h1 className="fs-2">eCom Store</h1>
                </Link>
                <div className="col-md-4 text-right">
                    <CartIcon />
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;