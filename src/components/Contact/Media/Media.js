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
 <a href="https://www.linkedin.com/in/yidahaguirre/" ><LinkedInIcon className={classes.Icons} /></a>
 <a href="https://www.instagram.com/yidahaguirre/" ><InstagramIcon className={classes.Icons} /></a>
 <a href="https://www.facebook.com/yidah.aguirre" ><FacebookIcon className={classes.Icons} /></a>
 <a href="https://twitter.com/Yidah8" ><TwitterIcon className={classes.Icons} /></a>
 <a href="https://github.com/yidah" ><GitHubIcon className={classes.Icons} /></a>
    </div>
  );
};

export default media;
