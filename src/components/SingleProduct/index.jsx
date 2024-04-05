import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useProductsStore from "../store/products";
import { calculateDiscount } from "../Products";
import Rating from "../Rating";

function Product() {
    const { id } = useParams();
    const { products, fetchProducts, cart, addToCart, discountedPrice } = useProductsStore();
    const [ quantity ] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const product = products.find((product) => product.id === id);

    function handleButtonClick() {
        addToCart(product.id, quantity); 
    };

    if (!product) {
        return <p>Loading...</p>
    };
    
    return (
        <div>
            <div key={id}>
                <div>
                    {product.image && product.image?.url && (
                        <img src={product.image?.url} alt={product.title} />
                    )}
                </div>
                <div>
                    <h2>{product.title}</h2>
                    <div>
                        {discountedPrice && discountedPrice !== product.price && (
                        <p>
                        <span>NOW {calculateDiscount(product.price, discountedPrice)}% OFF</span>
                        </p>
                        )}
                        {discountedPrice && discountedPrice !== product.price && (
                        <>
                        <p>New Price: ${discountedPrice}</p>                 
                        <p>Original Price: ${product.price}</p>                   
                        </>                              
                        )}
                        {!discountedPrice || discountedPrice === product.price && (
                        <p>$ {product.price}</p>
                        )}
                    </div>              
                    <p>{product.description}</p>
                    <button
                    onClick={handleButtonClick}>Add to cart</button>
                </div>
            </div>
            <div>
                <h3>Reviews</h3>
                {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review) => (
                        <div key={review.id}>
                            <Rating rating={product.rating} />
                            <h4>{review.username}</h4>
                            <p>{review.description}</p>
                        </div>
                    ))
                ) : (
                    <p>This product has no reviews!</p>
                )}
            </div>
        </div>
    );
    
}

export default Product;