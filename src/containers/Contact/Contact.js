import React, { Component } from 'react';
import classes from './Contact.module.css';
import Media from '../../components/Contact/Media/Media';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div className={classes.ContactContainer}>
          <Media />

          <div className={classes.EnvelopeContainer}>
            <div className={classes.Envelope}>
              <div className={classes.Back}></div>
              <form className={classes.Letter}>
                <p>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    value={this.state.name}
                  />
                </p>
                <p>
                  <label>Enter Email:</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.changeHandler}
                    value={this.state.email}
                  />
                </p>
                <p>
                  <label>Your Message:</label>
                  <textarea
                    name="message"
                    onChange={this.changeHandler}
                    value={this.state.message}
                  ></textarea>
                </p>
                <button
                  className={classes.Button}
                  type="submit"
                  value="send"
                  onClick={this.sendHandler}
                >SEND</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
