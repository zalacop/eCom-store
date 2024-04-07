import React, { useEffect } from "react";
import useProductsStore from "../store/products";
import { Link } from "react-router-dom";
import { Button } from "../SingleProduct/index.styles";

function Checkout() {
    const { clearCart } = useProductsStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="container d-flex flex-column justify-content-center mx-auto my-5">
            <div className="d-flex card rounded-0 flex-column justify-content-center mx-auto my-5 p-5 gap-3 w-75">
                <h3 className="fs-2 mx-auto">Success!</h3>
                <p className="fs-5 mx-auto">Your order was successful! Your products will arrive shortly!</p>
                <Link to={"/"}>
                    <Button className="btn rounded-0 py-2 px-5 border-dark mx-auto d-flex justify-content-center">Back to shopping</Button>
                </Link>
            </div>
        </div>
    );
}

export default Checkout;