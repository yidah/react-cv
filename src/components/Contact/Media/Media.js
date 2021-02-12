import React from 'react';
import classes from './Media.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
// import IconButton from '@material-ui/core/IconButton';



const media = (props) => {
  return (
    <div className={classes.MediaContainer}>
 <a href="/" ><LinkedInIcon className={classes.Icons} /></a>
 <a href="/" ><InstagramIcon className={classes.Icons} /></a>
 <a href="/" ><FacebookIcon className={classes.Icons} /></a>
 <a href="/" ><TwitterIcon className={classes.Icons} /></a>
 <a href="/" ><GitHubIcon className={classes.Icons} /></a>
    </div>
  );
};

export default media;
