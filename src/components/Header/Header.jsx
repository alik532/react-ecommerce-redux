import React from "react";
import classes from './Header.module.css'

const Header = ({setIsModalVisible}) => {

    return (
        <div className={classes.header}>
            <a href="/" className={classes.logo}>LOGO</a>
            <a href="/" className={classes.link}>MEN</a>
            <a href="/" className={classes.link}>WOMEN</a>
            <a href="/" className={classes.link}>CHILDREN</a>
            <div href="/" onClick={() => setIsModalVisible()} className={classes.link}>ADD PRODUCT</div>
        </div>
    )
}

export default Header;