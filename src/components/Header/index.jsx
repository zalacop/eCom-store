import React, { useState } from "react";
import CartIcon from "../CartIcon";
import Nav from "../Nav";
import { BrandLink, CartWrapper, HamburgerIcon, HeaderContainer } from "./index.styles";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeaderContainer className="">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            <HamburgerIcon
                                className="navbar-toggler"
                                type="button"
                                onClick={toggleMenu}
                            >
                                <span className="navbar-toggler-icon" />
                            </HamburgerIcon>
                            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                                <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
                            </div>
                        </div>
                        <BrandLink to="/">
                            <h1 className="fs-2">PingPeak</h1>
                        </BrandLink>
                        <CartWrapper>
                            <CartIcon />
                        </CartWrapper>
                    </div>
                </nav>
            </div>
        </HeaderContainer>
    );
}

export default Header;