import React, { useEffect } from "react";
import useProductsStore from "../store/products";

function ShoppingCart() {
    const { products, cart, fetchProducts } = useProductsStore();

    useEffect(() => {
        fetchProducts();
      }, [fetchProducts])
}

export default ShoppingCart;