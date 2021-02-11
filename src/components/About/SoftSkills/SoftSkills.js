import React from 'react';
import classes from './SoftSkills.module.css';

const softSkill = (props) => {
  return (
    <>
      <div className={classes.Container}>
      
        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon1}>
            <span id={classes.Bulb} class="material-icons">
              lightbulb
            </span>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Intuitive</h1>
            <p>I love easy and user friendly applications</p>
          </div>
        </div>

        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon2}>
            <span id={classes.Row} class="material-icons">
            rowing
            </span>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Perseverant</h1>
            <p>Determine to solve problems and issues</p>
          </div>
        </div>

 
        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon3}>
            <span id={classes.Face} class="material-icons">
            face
            </span>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Teamworker</h1>
            <p>I love working and learning from people.</p>
          </div>
        </div>

        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon4}>
            <span id={classes.Flight} class="material-icons">
            flight_takeoff
            </span>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Dynamic</h1>
            <p>I love making pages come to life</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default softSkill;
