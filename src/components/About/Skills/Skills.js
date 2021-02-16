import React from 'react';
import classes from './Skills.module.css';

const skill = (props) => {
  return (
    <>
      <div className={classes.Skills}>
        <div className={classes.ProgressBar}>
          <div id={classes.css} className={classes.Progress} >
            <div className={`${classes.Progress} ${classes.Skill}`} >CSS</div>
          </div>
          <span>60%</span>
        </div>
        <div className={classes.ProgressBar}>
          <div id={classes.html} className={classes.Progress}>
            <div className={`${classes.Progress} ${classes.Skill}`}>HTML</div>
          </div>
          <span>90%</span>
        </div>
        <div className={classes.ProgressBar}>
          <div id={classes.react} className={classes.Progress}>
            <div className={`${classes.Progress} ${classes.Skill}`}>React</div>
          </div>
          <span>80%</span>
        </div>
        <div className={classes.ProgressBar}>
          <div id={classes.javascript} className={classes.Progress}>
            <div className={`${classes.Progress} ${classes.Skill}`}>JavaScript</div>
          </div>
          <span>90%</span>
        </div>
        <div className={classes.ProgressBar}>
          <div id={classes.nodejs} className={classes.Progress}>
            <div className={`${classes.Progress} ${classes.Skill}`}>Node.js</div>
          </div>
          <span>50%</span>
        </div>
      </div>
    </>
  );
};

export default skill;
