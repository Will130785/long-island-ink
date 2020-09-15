import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {listProducts} from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

function ShopScreen(props) {

    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {

        };
    }, []);

    return (
        loading ? <div>Loading...</div> : error ? <div>{error}</div> :
        <div>
        <section className="shop">
            <ul className="products">
                {
                    products.map(product => 
                        <li key={product._id}>
                            <div className="product">
                                <Link to={"/shop/product/" + product._id}>
                                    <img className="product-image" src={product.image} alt="product"></img>
                                </Link>
                                <div className="product-name">
                                    <Link to={"/shop/product" + product._id}>{product.name}</Link>
                                </div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">{product.price}</div>
                                <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
                            </div>
                        </li>
                        )
                }
            </ul>
        </section>

        <footer className="footer">
            Footer
        </footer>
        </div>
    )
}

export default ShopScreen;