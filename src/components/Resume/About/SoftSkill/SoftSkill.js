import React from 'react';
import classes from './SoftSkill.module.css';

const softSkill = (props) => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.Hexagon1}>
          <span class="material-icons" id={classes.Bulb}>
            lightbulb
          </span>
        </div>
         <div className={classes.Hexagon2}>
          <span class="material-icons" id={classes.Row}>
            rowing
          </span>
        </div>
      
        <div className={classes.Hexagon3}>
          <span class="material-icons" id={classes.Face}>
            face
          </span>
        </div>
          
        <div className={classes.Hexagon4}>
          <span class="material-icons" id={classes.Flight}>
            flight_takeoff
          </span>
        </div> 
      </div>
    </>
  );
};

export default softSkill;
