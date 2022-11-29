import React from "react";
import classes from "./ProductList.module.css"
import ProductCard from "../ProductCard/ProductCard";

const ProducList = (props) => {

    const getFilteredProducts = () => {
        let products = props.getSortedProducts()
        return [...products].filter(prod => prod.title.toLocaleLowerCase().includes(props.query.toLocaleLowerCase()))
    }

    const addToCart = (product) => {
        props.addToCart(product)
    }

    return (
        <div className={classes.productList}>
            {getFilteredProducts().map(product => 
                <ProductCard product={product} key={product.id} addToCart={addToCart}/>    
            )}
        </div>
    )
}

export default ProducList;