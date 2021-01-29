import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
          <div className={`${classes.Home} ${classes.Me}`}>Hi I am Yidah Aguirre</div>
          <div className={classes.Line}></div>
          <div className={classes.MyCareer}>I am a front-end developer</div>
      </div>
    );
  }
}

export default Home;
