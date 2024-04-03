import React from "react";
import { Link, useParams } from "react-router-dom";
import useApi from "../hooks/useFetchApi";
import { calculateDiscount } from "../Products";
import Rating from "../Rating";

function Product() {
    const { id } = useParams();
    const base = "https://v2.api.noroff.dev/online-shop";
    const productUrl = `${base}/${id}`;
    const { data, isLoading, isError} = useApi(productUrl);

    if(isLoading) {
        return <p>Loading...</p>
    }
    if(isError) {
        return <p>Something went wrong!</p>
    }

    return (
        <div>
            <Link to="/">Go back</Link>
            <div>
                <div>
                    {data.image && data.image.url && (
                        <img src={data.image.url} alt={data.title} />
                    )}
                </div>
                <div>
                    <h2>{data.title}</h2>
                    <div>
                        {data.discountedPrice && data.discountedPrice !== data.price && (
                        <p>
                        <span>NOW {calculateDiscount(data.price, data.discountedPrice)}% OFF</span>
                        </p>
                        )}
                        {data.discountedPrice && data.discountedPrice !== data.price && (
                        <>
                        <p>New Price: ${data.discountedPrice}</p>                 
                        <p>Original Price: ${data.price}</p>                   
                        </>                              
                        )}
                        {!data.discountedPrice || data.discountedPrice === data.price && (
                        <p>$ {data.price}</p>
                        )}
                    </div>              
                    <p>{data.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            <div>
                <h3>Reviews</h3>
                {data.reviews && data.reviews.length > 0 ? (
                    data.reviews.map((review) => (
                        <div key={review.id}>
                            <Rating rating={3} />
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