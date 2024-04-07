import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import useProductsStore from "../store/products";
import { Link } from "react-router-dom";

function CartIcon() {
    const { cart } = useProductsStore();
    const productCount = cart.reduce((total, product) => total + product.quantity, 0)

    return (
            <Link to="/checkout" className="position-relative">
                <MdOutlineShoppingBag className="cart-icon fs-3"  />
                {productCount > 0 && (
                    <div className="cart-badge position-absolute top-40 start-40 translate-middle badge rounded-pill bg-danger">
                        {productCount}
                    </div>
                )}
            </Link>
    );
}

export default CartIcon;