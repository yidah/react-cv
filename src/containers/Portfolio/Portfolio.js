import React, { Component } from 'react';
import Project from '../../components/Porfolio/Project/Project';
// import BurgerBuilder from '../../assets/images/react-burger-builder.png';
import classes from './Portfolio.module.css';

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className={classes.Gallery} >
          <Project front="Burger Builder"
                   backTech="React JS, Redux, Axios / Firebase"
                   backDesc="Burger Builder is a online hamburger ordering app that let users to build their own hamburger with the ingredients of their choice. 
                            It is built with React JS, Redux, Axios and connects to a Firebase server."
                   />
          <Project front="Project Manager"
                   backTech="JavaScript"
                   backDesc="Project Manager easily help you to organize finished and active projects. It is built with JavaScript."
                   />
          <Project front="Monster Attack"
                   backTech="JavaScript"
                   backDesc="Monster Attack is an online game against the computer built with JavaScript "/>
          <Project front="Visit a Place"
                   backTech="JavaScript / Google API"
                   backDesc="Visit a Place app let you get your current location or find a place of your choice and share it online. 
                            It is built with JavaScript and makes use of Google API"/>
          <Project front="Posts Organizer"
                   backTech="JavaScript, Axios"
                   backDesc="Posts Organizer let the user create posts and retreive them from a server. It is built with JavaScript and Axios"/>
          <Project front="Favorite Movies"
                   backTech="JavaScript"
                   backDesc="Favorite Movies is an online app that stores user's favorite films and lets him assign a rating as well as to attch a picture."/>
        </div>
      </>
    );
  }
}

export default Portfolio;
