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
    </ul>
)
export default navigationItems;