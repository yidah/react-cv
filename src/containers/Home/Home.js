import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <>
        <div className={classes.CircleBig}></div>
        <div className={classes.CircleMedium}></div>
        <div className={classes.CircleSmall}></div>

        <div className={classes.IntroContainer}>
          <div className={classes.IntroOne}>Hi! I'm Yidah Aguirre</div>
          <div className={classes.IntroTwo}>a front-end developer</div>
          <div className={classes.IntroThree}>have a look at my work </div>
        </div>
      </>
    );
  }
}

export default Home;
