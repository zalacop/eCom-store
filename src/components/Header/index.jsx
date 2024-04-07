import React from "react";
import CartIcon from "../CartIcon";
import Nav from "../Nav";

function Header() {
    return (
        <header>
            <div>
                <Nav />
            </div>
            <h1>eCom Store</h1>
            <CartIcon />
        </header>
    );
}

export default Header;