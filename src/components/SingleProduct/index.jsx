import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useProductsStore from "../store/products";
import { calculateDiscount } from "../Products";
import Rating from "../Rating";
import { Button, Title, Username } from "./index.styles";

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
        <div className="d-flex justify-content-start my-5 ms-5 ps-5">
            <Link to="/" className="fs-5 text-decoration-underline">Go back</Link>
        </div>
        <div className="container d-flex justify-content-center">
            <div className="card py-5 border rounded-0 mx-auto p-4">
                <div className="mx-auto px-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 mb-4">
                            <div className="d-flex justify-content-center align-items-center"> 
                                <img className="w-75 h-auto shadow-md" src={product.image.url} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                            <div className="d-flex flex-column align-items-center my-auto">
                                {product.discountedPrice && product.discountedPrice !== product.price && (
                                    <Username className="px-2 py-1 text-danger fs-5 font-weight-bold">
                                        NOW {calculateDiscount(product.price, product.discountedPrice)}% OFF
                                    </Username>
                                )}
                                <Title className="mt-4">{product.title}</Title>
                                <div className="py-3">
                                    <p className="text-lg mr-4">{product.description}</p>
                                </div>
                                <div className="d-flex align-items-center py-3 justify-content-center">
                                    <h3 className="mb-3">
                                        {product.discountedPrice && product.discountedPrice !== product.price ? (
                                            <>
                                                <p className="ms-4 text-danger font-semibold">New price: ${product.discountedPrice}</p>
                                                <p className="text-decoration-line-through d-flex justify-content-center fs-5">${product.price}</p>
                                            </>
                                        ) : (
                                            <>Price: ${product.price}</>
                                        )}
                                    </h3>
                                </div>
                                <div className="mt-2">
                                    <Button onClick={handleButtonClick} className="btn rounded-0 py-2 px-5 border-dark">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container  card p-5 border rounded-0 my-5">
            <h4 className="fs-3 font-bold d-flex justify-content-center">Reviews</h4>
            <div className="row">
                {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="col-md-6 mb-4 mt-4">
                            <div className="border rounded-0 p-4">
                                <div className="mb-2">
                                    <Rating rating={review.rating} size={20} />
                                    <Username className="mt-3 ">By: {review.username}</Username>
                                </div>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    ))
                ) : (   
                    <p className="d-flex justify-content-center mt-4">There are no reviews for this product!</p>
                )}
            </div>
        </div>                                
        </>
    );
};

export default Product;