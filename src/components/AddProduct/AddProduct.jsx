import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import SearchInput from '../UI/SearchInput/SearchInput'
import classes from './AddProduct.module.css'
import { useState } from 'react'

const AddProduct = () => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className={classes.addProduct}>
            <div className={classes.preview}>
                <div className={classes.productCard}>
                    {!hovered 
                    ? <img alt="1" src='https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp'/>
                    : <img alt="1" />
                    }
                    <div className={classes.content}>
                        <div className={classes.title}>Title</div><div className={classes.decor}></div>
                        <div className={classes.price}>$Price</div>
                        <div className={classes.quantity}>In stock: InStock</div>
                    </div>
                </div>
            </div>
            <div className={classes.configure}>
                
            </div>
        </div>
    )
}

export default AddProduct