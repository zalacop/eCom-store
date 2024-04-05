import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CartIcon() {
    const navigate = useNavigate();

    function handleCartClick() {
        navigate(`/checkout`);
    };

    return (
        <div onClick={handleCartClick}>
            <MdOutlineShoppingBag />
        </div>
    );
}

export default CartIcon;