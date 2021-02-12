import React from 'react';
import classes from './SoftSkills.module.css';
import FaceIcon from '@material-ui/icons/Face';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import RowingIcon from '@material-ui/icons/Rowing';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const softSkill = (props) => {
  return (
    <>
      <div className={classes.Container}>
      
        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon1}>
            <EmojiObjectsIcon className={classes.Icons}/>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Intuitive</h1>
            <p>I love easy and user friendly applications</p>
          </div>
        </div>

        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon2}>
            <RowingIcon className={classes.Icons}/>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Perseverant</h1>
            <p>Determine to solve problems and issues</p>
          </div>
        </div>

 
        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon3}>
            <FaceIcon className={classes.Icons}/>
          </div>

          <div className={classes.SoftSkillDescription}>
            <h1>Teamworker</h1>
            <p>I love working and learning from people.</p>
          </div>
        </div>

        <div className={classes.SoftSkill}>
          <div className={classes.Hexagon4}>
            <FlightTakeoffIcon className={classes.Icons}/>
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
