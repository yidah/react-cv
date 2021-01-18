import React from 'react';
import classes from './NavigationItems.module.css';
import { NavLink } from 'react-router-dom';

const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
            <NavLink to="/"
               className={classes.active}>Home</NavLink>
        </li>
        <li className={classes.NavigationItem}>
            <NavLink to="/about">About</NavLink>
        </li>
        <li className={classes.NavigationItem}>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </li>       
        <li className={classes.NavigationItem}>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* <li className={classes.NavigationItem}>
            <a href="/"
               className={classes.active}>Home</a>
        </li>
        <li className={classes.NavigationItem}>
            <a href="/about">About</a>
        </li>
        <li className={classes.NavigationItem}>
            <a href="/portfolio">Portfolio</a>
        </li>       
        <li className={classes.NavigationItem}>
            <a href="/contact">Contact</a>
        </li> */}
    </ul>
)
export default navigationItems;