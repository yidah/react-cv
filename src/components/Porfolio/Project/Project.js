import React from 'react';
import classes from './Project.module.css';

const project = (props)=>{
    return(
        <>
            <div className={classes.CardContainer}>
              <div className={classes.Card}>Burger Builder</div>
              <div className={classes.Text}>
                <span class="bold">ChowNow Ordering</span>
                <span class="highlight">React JS / Python</span>
              </div>
              <div className={classes.Button}>
                LEARN MORE
              </div>
            </div>
        </>
    )
}

export default project;