import React from 'react';
import classes from './Project.module.css';

const project = (props) => {
  return (
    <>
      <div className={classes.CardContainer}>
        <div className={classes.Card}>
          <div className={classes.Front}>{props.front}</div>
          <div className={classes.Back}>
          <span className={classes.Tech}>{props.backTech}</span>
            <span className={classes.Description}>{props.backDesc}</span>
            <a href="/" className={classes.Button}>VIEW CODE</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
