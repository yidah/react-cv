import React from 'react';
import classes from './Project.module.css';

const project = (props) => {
  return (
    <>
      <div className={classes.CardContainer}>
        <div className={classes.Card}>
          <div className={classes.Front}>Burger Builder</div>
          <div className={classes.Back}>
            <span className={classes.Description}>ChowNow Ordering</span>
            <span className={classes.Tech}>React JS / Python</span>
            <span className={classes.Button}>React JS / Python</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
