import React, { Component } from 'react';
import '../assets/stylesheets/contactScreen.css';

class ContactScreen extends Component {
  render() {
    return(
      <div className="contact-screen-container">
        <h1 className="contact-screen-title">Contact</h1>
        <div className="contact-screen-info">
          <Information />
          <SocialIcons />
        </div>
      </div>
    )
  }
}

class Information extends Component {
  render() {
    return(
      <div className="contact-screen-info-container">
        <p>Feel free to shoot me an email, or you can find me through another medium: </p>
      </div>
    )
  }
}

class SocialIcons extends Component {
  render() {
    return(
      <div className="contact-screen-social-icons">
        <span class="fas fa-envelope"></span>
        <span class="fas fa-github-square"></span>
        <span class="fas fa-linkedin"></span>
        <span class="fas fa-facebook"></span>
      </div>
    )
  }
}

export default ContactScreen;
