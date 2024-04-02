import React from "react";
import useApi from "../hooks/useFetchApi";

function calculateDiscount(price, discountedPrice) {
    if(discountedPrice && discountedPrice !== price) {
        const discount = Math.round((price - discountedPrice) / price * 100);
        return discount.toString();
    } else {
        return null;
    } 
}

export default function Products() {
    const base = "https://v2.api.noroff.dev/online-shop";
    const { data, isLoading, isError} = useApi(base);

    if(isLoading) {
        return <p>Loading...</p>
    }
    if(isError) {
        return <p>Something went wrong!</p>
    }

    return (
        <div>
            {data.map((product) => (
                <div key={product.id}>
                    <a href="">
                        <div>
                            <img src={product.image.url} alt={product.title} />
                        </div>
                        {product.discountedPrice && product.discountedPrice !== product.price && (
                            <p>
                                <span>NOW {calculateDiscount(product.price, product.discountedPrice)}% OFF</span>
                            </p>
                        )}
                        <h3>{product.title}</h3>
                        <div>
                            {product.discountedPrice && product.discountedPrice !== product.price && (
                                <>
                                    <p>New Price: ${product.discountedPrice}</p>
                                    <p>Old Price: ${product.price}</p>
                                </>
                            )}
                            {!product.discountedPrice || product.discountedPrice === product.price && (
                                <p>$ {product.price}</p>
                            )}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )

}
