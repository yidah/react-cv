import React,{ Component } from "react";
import Project from '../../components/Resume/Porfolio/Project/Project';
import BurgerBuilder from '../../assets/images/react-burger-builder.png';
import classes from './Portfolio.module.css';

class Portfolio extends Component{
    render(){
        return(
            <div className={classes.main}>
            <Project imgSrc={BurgerBuilder}
                     imgAlt="Burger Builder"
                     codeHref="https://github.com/yidah/burger-builder"
                     project="Burger Builder"
                     desc="My project is super chulo"
                     />
            </div>

        )
    }
}

export default Portfolio;