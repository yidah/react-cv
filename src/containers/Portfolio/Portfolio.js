import React, { Component } from 'react';
import Project from '../../components/Porfolio/Project/Project';
// import BurgerBuilder from '../../assets/images/react-burger-builder.png';
import classes from './Portfolio.module.css';

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className={classes.Gallery} >
          <Project front="Burger Order"
                   backTech="React JS, Redux, Axios / Firebase"
                   backDesc="Burger Builder is a online hamburger ordering app that let users to build their own hamburger with the ingredients of their choice. 
                            It is built with React JS, Redux, Axios and connects to a Firebase server."
                   link="https://github.com/yidah/burger-builder.git"
                   />
          <Project front="Project Manager"
                   backTech="JavaScript"
                   backDesc="Project Manager easily help you to organize finished and active projects. It is built with JavaScript."
                   link="https://github.com/yidah/project-planner.git"
                   />
          <Project front="Monster Attack"
                   backTech="JavaScript"
                   backDesc="Monster Attack is an online game against the computer built with JavaScript "
                   link=""
                   />
          <Project front="Visit a Place"
                   backTech="JavaScript / Google API"
                   backDesc="Visit a Place app let you get your current location or find a place of your choice and share it online. 
                            It is built with JavaScript and makes use of Google API"
                   link=""
                   />
          <Project front="Posts Organizer"
                   backTech="JavaScript, Axios"
                   backDesc="Posts Organizer let the user create posts and retreive them from a server. It is built with JavaScript and Axios"
                   link=""
                   />
          <Project front="Exploring Locations"
                   backTech="React Js, Redux / Google API"
                   backDesc="Exploring Locations lets a user to plan a vacation trip providing him with information such as hotels, attractions, shops, etc. 
                             and allowing him to restrict search within certain radius or draw limits in a Google map."
                   link="https://github.com/yidah/react-my-world.git"
                   />
        </div>
      </>
    );
  }
}

export default Portfolio;
