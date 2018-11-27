import React, { Component } from 'react';
import '../assets/stylesheets/navScreen.css';


class NavScreen extends Component {
  render() {
    return(
      <div className="nav-screen-container">
        <TopBar />
        <div className="nav-items-container">
          <MenuItem name="About" />
          <MenuItem name="Work" />
          <MenuItem name="Contact" />
        </div>
      </div>
    )
  }
}

class MenuItem extends Component {
  render() {
    return(
      <h2>{this.props.name}</h2>
    )
  }
}

class TopBar extends Component {
  render() {
    return(
      <div className="nav-screen-top-bar">
        <h2 className="top-bar-logo">Jesse Davda</h2>
        <span className="fas fa-bars"></span>
      </div>
    )
  }
}

export default NavScreen;
