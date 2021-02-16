import React, { Component } from 'react';
import SoftSkills from '../../components/About/SoftSkills/SoftSkills';
import classes from './About.module.css';
import Skills from '../../components/About/Skills/Skills';
import Photo from '../../components/About/Me/Me';

class About extends Component {

  render() {
    return (
      <>
        <div className={classes.About}>
          <SoftSkills />

          <div className={classes.PhotoSkillsContainer}>
            <Photo />
            <Skills/>
          </div>
        </div>
      </>
    );
  }
}

export default About;
