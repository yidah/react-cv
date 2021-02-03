import React from 'react';
import classes from './SoftSkill.module.css';

const softSkill = (props) => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.Hexagon}>
        <span class="material-icons" id={classes.Bulb}>lightbulb</span>
        </div>
      </div>
    </>
  );
};

export default softSkill;
