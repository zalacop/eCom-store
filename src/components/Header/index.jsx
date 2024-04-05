import React from "react";
import CartIcon from "../CartIcon";
import Nav from "../Nav";

function Header() {
    return (
        <header>
            <h1>eCom Store</h1>
            <div>
                <Nav />
            </div>
            <CartIcon />
        </header>
    );
}

export default Header;