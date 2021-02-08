import React, { Component } from 'react';
import Project from '../../components/Porfolio/Project/Project';
// import BurgerBuilder from '../../assets/images/react-burger-builder.png';
import classes from './Portfolio.module.css';

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className={classes.Gallery} >
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </>
    );
  }
}

export default Portfolio;
