import React from 'react';
import classes from './Project.module.css';

const project = (props) => {
  let code;
  if(props.link)
            {
              code = <a href={props.link} className={classes.Button}>VIEW CODE</a>
            }else{
              code= <span className={classes.Button}>DETAILS ABOUT THIS PROJECT ON REQUEST</span>
            }
  return (
    <>
      <div className={classes.CardContainer}>
        <div className={classes.Card}>
          <div className={classes.Front}>{props.front}</div>
          <div className={classes.Back}>
            <span className={classes.Tech}>{props.backTech}</span>
            <span className={classes.Description}>{props.backDesc}</span>
            {
              code
            } 
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
