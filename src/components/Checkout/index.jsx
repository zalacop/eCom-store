import React from "react";
import useProductsStore from "../store/products";

function Checkout() {
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
            <div>
                <h2>Your shopping cart</h2>
               <p>Total: {getCartTotal()}</p>
                <button onClick={clearCart}>Clear cart</button>
            </div>
            <div>
                {cart.map(({ id, image, title, quantity, price, discountedPrice }) => (
                    <div key={id}>
                        <img src={image.url} alt={title} />
                        <h3>{title}</h3> 
                        <button onClick={() => handleRemoveProduct(id)}>-</button>
                        <input 
                            type="text"
                            value={quantity} 
                            readOnly
                        />
                        <button onClick={() => handleAddProduct(id)}>+</button>
                        {discountedPrice && discountedPrice !== price ? (
                            <p>
                                Discounted Price: {discountedPrice} | Original Price: {price}
                            </p>
                        ) : (
                            <p>Price: {price}</p>
                        )}
                        <p>Total: {((discountedPrice || price) * quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <button>Checkout</button>
        </>
    );
};

export default Checkout;
