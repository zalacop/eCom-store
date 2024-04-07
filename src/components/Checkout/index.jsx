import React from "react";
import useProductsStore from "../store/products";
import { Link } from "react-router-dom";
import { Button } from "../SingleProduct/index.styles";

function ProductsInCart() {
    const { cart, clearCart, deleteFromCart, getCartTotal, addToCart } = useProductsStore();

    function handleRemoveProduct(id) {
        const product = cart.find(item => item.id === id);
        if (product && product.quantity > 1) {
            deleteFromCart(id);
        } else {
            deleteFromCart(id);
        }
    };

    function handleAddProduct(id) {
        addToCart(id);
    };

    return (
        <>
        <div className="my-5 py-5 border mx-auto max-w-800 p-4 d-flex flex-column justify-content-center gap-5 w-75">
            <div className="mx-auto px-4 d-flex flex-column align-items-center gap-3">
                <h2 className="fs-2">Your shopping cart</h2>
                <Link to="/">
                    <Button className="btn rounded-0 py-2 px-5 border-dark my-3">Continue shopping</Button>
                </Link>
                {cart.length === 0 ? (
                    <p className="fs-4">Your cart is empty!</p>
                ) : (
                    <>
                        <p className="fs-3 font-weight-bold">Total: ${getCartTotal()}</p>
                    </>
                )}
            </div>
            
            {cart.length > 0 && (
                <div className="row justify-content-center">
                    {cart.map(({ id, image, title, quantity, price, discountedPrice }) => (
                        <div key={id} className="col-lg-8 col-md-8 col-sm-12 mb-4">
                            <div className="border rounded-0 p-3 d-flex flex-column flex-md-row"> 
                                <div className="col-lg-8 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                    <p className="text-center mt-3">Product total: ${((discountedPrice || price) * quantity).toFixed(2)}</p>
                                    <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
                                    <div className="d-flex justify-content-center align-items-center py-3">
                                        <button onClick={() => handleRemoveProduct(id)} className="rounded-0">-</button>
                                        <input 
                                            type="text"
                                            value={quantity} 
                                            readOnly
                                            className="bg-white text-dark w-25 h-100 mx-2" 
                                        />                            
                                        <button onClick={() => handleAddProduct(id)} className="rounded-0">+</button>
                                    </div>
                                    {discountedPrice && discountedPrice !== price ? (
                                        <div className="px-2 py-1 text-center">
                                            New price: ${discountedPrice}
                                            <p className="text-decoration-line-through">Original Price: ${price}</p>
                                        </div>
                                    ) : (
                                        <p className="text-center">Price: ${price}</p>
                                    )}
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                                    <img className="w-100 shadow-md img-fluid" src={image.url} alt={title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cart.length > 0 && (
                <div className="d-flex flex-column align-items-center">
                    <button onClick={clearCart} className="btn btn-warning my-3 rounded-0 border-dark">Clear cart</button>
                    <Link to={"/success"}>
                        <Button className="btn rounded-0 py-2 px-5 border-dark">Checkout</Button>
                    </Link>
                </div>
            )}
        </div>
        </>
    );
};

export default ProductsInCart;
