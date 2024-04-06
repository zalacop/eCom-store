import React, { useEffect } from "react";
import useProductsStore from "../store/products";
import { Link } from "react-router-dom";

function Checkout() {
    const { clearCart } = useProductsStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div>
            <div>
                <h3>Success!</h3>
                <p>Your order was successful! Your products will arrive shortly!</p>
            </div>
            <Link to={"/"}>
                <button>Back to shopping</button>
            </Link>
        </div>
    );
}

export default Checkout;