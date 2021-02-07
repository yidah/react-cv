import React from 'react';
import classes from './Me.module.css';
import Yidah from '../../../assets/images/me.png';

const me = (props) => {
  return (
    <>
      <div className={classes.Me}>

        <div className={classes.MePhotoContainer}>
          <div className={classes.hexa}>
            <div className={classes.hex1}>
              <div className={classes.hex2}>
                {/* <img src={Yidah} alt="" width="320" height="313" /> */}
                <img src={Yidah} alt=""  width="100%" height="auto"  />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.MeDescriptionContainer}>
          <h1 className={classes.MeTitle}>Who am I?</h1>
          <p className={classes.MeDescription}>I love working and learning from people.</p>
        </div>
      </div>
    </>
  );
};

export default me;
