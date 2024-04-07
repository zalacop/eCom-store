import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
        <>
        <div className="d-flex justify-content-start mb-4">
            <Link to="/">Go back</Link>
        </div>
        <div className="py-8 border rounded-0 mx-auto max-w-800 p-4">
            <div className="mx-auto px-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-12 mb-4">
                        <div className="h-400px d-flex justify-content-center align-items-center"> 
                            <img className="w-75 h-auto shadow-md" src={product.image.url} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                        <div>
                            {product.discountedPrice && (
                                <div className="px-2 py-1 text-danger">
                                    NOW {calculateDiscount(product.price, product.discountedPrice)}% OFF
                                </div>
                            )}
                            <h1 className="text-2xl font-bold text-center">{product.title}</h1>
                            <div className="py-3">
                                <p className="text-lg mr-4">{product.description}</p>
                            </div>
                            <div className="d-flex align-items-center py-3 justify-content-center">
                                <h3 className="mb-3 text-xl text-700">
                            
                                {product.discountedPrice && product.discountedPrice !== product.price ? (
                                    <>
                                        <p className="ms-4 text-danger font-semibold">New price: ${product.discountedPrice}</p>
                                        <p className="text-decoration-line-through">${product.price}</p>
                                    </>
                                ) : (
                                    <>Price: ${product.price}</>
                                )}
                                </h3>
                            </div>
                            <div className="mt-2 md:mt-10 text-center">
                                <button onClick={handleButtonClick} className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container py-8 border rounded-0 my-5">
            <h3 className="text-lg font-medium">Reviews</h3>
            <div className="row">
                {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="bg-gray-100 border rounded-0 p-4">
                                <div className="mb-2">
                                    <Rating rating={review.rating} size={20} />
                                    <span className="ms-2 font-semibold">By: {review.username}</span>
                                </div>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    ))
                ) : (   
                    <p>No reviews for this product</p>
                )}
            </div>
        </div>      
        </>
    );
};

export default Product;