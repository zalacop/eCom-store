import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useProductsStore from "../store/products";

function CartIcon() {
    const { cart } = useProductsStore();
    const productCount = cart.reduce((total, product) => total + product.quantity, 0)


    const navigate = useNavigate();

    function handleCartClick() {
        navigate(`/checkout`);
    };

    return (
        <div onClick={handleCartClick}>
            <MdOutlineShoppingBag />
            {productCount > 0 && ( 
                <div>
                    {productCount}
                </div>
            )}
        </div>
    );
}

export default CartIcon;