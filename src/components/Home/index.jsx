import React from "react";
import Products from "../Products";
import { ProductsContainer } from "../Products/index.styles";

function Home() {
    return (
        <>
        <ProductsContainer>
        <h2 className="d-flex justify-content-center my-5">Products</h2>
            <Products />
        </ProductsContainer>
        </>
    );
}

export default Home;