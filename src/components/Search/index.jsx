import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useApi from "../hooks/useFetchApi";

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
        console.log(filteredResults);
    }, [searchValue, originalProducts]);

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
                            <h3>{product.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );    
}

export default Search;

