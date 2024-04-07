import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useApi from "../hooks/useFetchApi";
import { Link } from "react-router-dom";
import { SearchContainer } from "./index.styles";

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
        <>
        <SearchContainer className="input-group h-25 mx-auto d-flex justify-content-center rounded-0">
            <span className="input-group-text rounded-0"><FaSearch /></span>
            <input 
                type="text" 
                value={searchValue} 
                onChange={handleChange} 
                className="form-control rounded-0" 
                autoComplete="off" 
                placeholder="" 
                id="search" 
            />
        </SearchContainer>
        <div className="container mt-0 d-flex justify-content-center">
            {searchValue && (
                <ul className="list-group mt-0 rounded-0">
                    {searchResult.map(product => (
                        <li className="list-group-item d-flex justify-content-start align-items-center" key={product.id}>
                            <Link to={`/product/${product.id}`} onClick={handleProductClick} className="d-flex align-items-center">
                                <div className="d-flex ms-1" style={{ width: '70px', height: '70px' }}>
                                    <img src={product.image?.url} alt={product.title} className="img-fluid w-100 h-100" />
                                </div>
                                <div>
                                    <p className="font-bold fs-4 ms-3 m-0">{product.title}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );    
}

export default Search;

