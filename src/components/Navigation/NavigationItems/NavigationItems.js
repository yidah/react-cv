import React from 'react';
import classes from './NavigationItems.module.css';

const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
            <a href="/"
               className={classes.active}>Home</a>
        </li>
        <li className={classes.NavigationItem}>
            <a href="/">About</a>
        </li>
        <li className={classes.NavigationItem}>
            <a href="/">Portfolio</a>
        </li>
        <li className={classes.NavigationItem}>
            <a href="/">Projects</a>
        </li>        <li className={classes.NavigationItem}>
            <a href="/">Contact</a>
        </li>
    </ul>
)
export default navigationItems;