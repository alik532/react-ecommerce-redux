import React from "react";
import classes from './ProductItem.module.css'

const ProductItem = (props) => {

    const increment = () => {
        props.increment(props.item.product)
    }

    const decrement = () => {
        props.decrement(props.item.product)
    }

    return (
        <div className={classes.productItem}>
            <div className={classes.container}>
               <img alt="" src={props.item.product.img1}/>
                <div className={classes.mainContent}>
                    <div className={classes.itemTitle}>
                        {props.item.product.title}
                    </div>
                    <div className={classes.itemPrice}>
                        $ {props.item.product.price}
                    </div>
                    <div>
                        {props.item.quantity} x
                    </div>
                </div>
            </div>
            <div className={classes.pricePanel}>
                Total: $ {props.item.product.price}
                <div className={classes.crement}>
                    <button className={classes.cremButton} disabled={props.item.quantity === 1 ? true : false} onClick={decrement}>-</button>
                    <button className={classes.cremButton} onClick={increment}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;