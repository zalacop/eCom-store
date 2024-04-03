import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useApi from "../hooks/useFetchApi";
import { Link } from "react-router-dom";

function Search() {
    const base = "https://v2.api.noroff.dev/online-shop";
    const { data: products} = useApi(base);

    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(products);
    const [originalProducts, setOriginalProducts] = useState(products);

    useEffect(() => {
        setOriginalProducts(products);
        setSearchResult(products);
    }, [products]);

    function handleChange(event) {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        const filteredResults = originalProducts.filter(product => product.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        setSearchResult(filteredResults);
    }, [searchValue, originalProducts]);

    function handleProductClick() {
        setSearchValue("");
    }

    return (
        <div>
            <FaSearch />
            <input 
                type="text"
                value={searchValue} 
                onChange={handleChange}
            />
            {searchValue && (
                <div>
                    {searchResult.map(product => (
                        <div key={product.id}>
                            <Link to={`/product/${product.id}`} onClick={handleProductClick}>
                            <h3>{product.title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );    
}

export default Search;

