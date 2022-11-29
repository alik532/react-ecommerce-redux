import React from "react";
import classes from './SideBar.module.css'
import ProductItem from "../ProductItem/ProductItem";
import { useState } from "react";

const SideBar = (props) => {

    const [cartIsOpen, setCartIsOpen] = useState(false)

    const getFormattedProducts = () => {
        let uniqList = [...new Set(props.inCart)]
        let formatted = []
        uniqList.forEach(item => {
            let quantity = props.inCart.filter(i => i === item).length
            formatted.push({product: item, quantity: quantity})
        })
        return formatted
    }

    const increment = (prod) => {
        props.increment(prod)
    }
    const decrement = (prod) => {
        props.decrement(prod)
    }

    const getTotalPaycheck = () => {
        let sum = 0
        props.inCart.forEach(item => sum += item.price)
        return sum.toFixed(2)
    }

    return (
        <div className={classes.sideBar}>
            <div className={classes.cartButton} onClick={_ => setCartIsOpen(prev => !prev)} style={cartIsOpen ? {right: "450px", transition: "0.2s", backgroundImage: "none"} : {display: "initial", transition: "0.2s"} }>
                {cartIsOpen ? <h6>X</h6> : <div></div>}
            </div>
            <div className={classes.cartPanel} style={cartIsOpen ? {right: "0px", transition: "0.2s"} : {display: "initial", transition: "0.2s", animationDelay: "0.2s"} }>
                <div className={classes.cartHeader}>
                    <h3>
                        Cart
                    </h3>
                    <div className={classes.countItems}>{props.inCart.length}</div>
                </div>
                <div className={classes.cartContent}>
                    {getFormattedProducts().map(item => 
                        <ProductItem item={item} increment={increment} decrement={decrement}/>    
                    )}
                </div>
                <div className={classes.cartFooter}>
                    <div>
                        <div className={classes.subtotal}>
                            SUBTOTAL:
                        </div>
                        <div className={classes.paycheckPrice}>
                            $ {getTotalPaycheck()}
                        </div>
                    </div>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;