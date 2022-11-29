import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <a href="/" className={classes.logo}>LOGO</a>
            <a href="1" className={classes.link}>MEN</a>
            <a href="1" className={classes.link}>WOMEN</a>
            <a href="1" className={classes.link}>CHILDREN</a>
            <a href="/add" className={classes.link}>ADD PRODUCT</a>
        </div>
    )
}

export default Header;