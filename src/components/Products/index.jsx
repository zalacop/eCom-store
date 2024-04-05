import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductsStore from "../store/products";

export function calculateDiscount(price, discountedPrice) {
    if(discountedPrice && discountedPrice !== price) {
        const discount = Math.round((price - discountedPrice) / price * 100);
        return discount.toString();
    } else {
        return null;
    } 
};

function ProductsCard({ product: { id, image, title, price, discountedPrice } }) {
    return (
        <div>
            <Link to={`/product/${id}`}>
                <div>
                    <img src={image.url} alt={title} />
                </div>
                {discountedPrice && discountedPrice !== price && (
                    <p>
                        <span>NOW {calculateDiscount(price, discountedPrice)}% OFF</span>
                    </p>
                )}
                <h3>{title}</h3>
                <div>
                    {discountedPrice && discountedPrice !== price && (
                        <>
                            <p>New Price: ${discountedPrice}</p>
                            <p>Old Price: ${price}</p>
                        </>
                    )}
                    {!discountedPrice || discountedPrice === price && (
                        <p>$ {price}</p>
                    )}
                </div>
            </Link>
        </div>
    );
};

function Products() {
    const { products, fetchProducts, addToCart, cart } = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            <div>cart items: {cart.length}</div>
            {products.map((product) =>
                <div key={product.id}>
                    <ProductsCard
                        product={product}
                    />
                </div>
            )}
        </>
    );
};

export default Products;