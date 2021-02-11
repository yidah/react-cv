import React, { Component } from 'react';
import classes from './Contact.module.css';
// import Media from '../../components/Contact/Media/Media';

class Contact extends Component {
  render() {
    return (
      <>
      <div className={classes.EnvelopeContainer}>
      <div className={classes.Envelope} >
          <div className={classes.Back}></div>
          <form className={classes.Letter}>
            <p>
              <label>Name:</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>Enter Email:</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Your Message:</label>
              <textarea></textarea>
            </p>
            <input className={classes.Button} type="submit" value="Send" />
          </form>
        </div>
      </div>

      </>
    );
  }
}

export default Contact;
