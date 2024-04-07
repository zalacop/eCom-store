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
    const cardImgStyle = {
        maxHeight: '250px', 
    };

    const cardStyle = {
        height: '450px',
    }

    return (
        <div className="col-12 mb-5">
            <div className="card rounded-0" style={cardStyle}>
                <Link to={`/product/${id}`} className="card-link">
                    <img src={image.url} alt={title} className="card-img-top img-fluid rounded-0" style={cardImgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {discountedPrice && discountedPrice !== price ? (
                            <>
                                <p className="card-text">
                                    <span>NOW {calculateDiscount(price, discountedPrice)}% OFF</span>
                                </p>
                                <div className="row justify-content-center"> 
                                    <div className="col text-center"> 
                                        <p className="card-text">New Price: ${discountedPrice}</p>
                                    </div>
                                    <div className="col text-center"> 
                                        <p className="card-text" style={{ textDecoration: 'line-through' }}>${price}</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p className="card-text">$ {price}</p>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
};

function Products() {
    const { products, fetchProducts, addToCart, cart } = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="container">
                <div className="row">
                    <div>cart items: {cart.length}</div>
                    {products.map((product) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4" key={product.id}>
                            <ProductsCard product={product} />
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Products;