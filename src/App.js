import React, { Component } from 'react';
import './assets/stylesheets/App.css';
import NavScreen from './components/nav-screen.js';
import ContactScreen from './components/contact-screen.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        { /*<NavScreen /> */}
        <ContactScreen />
      </div>
    );
  }
}

export default App;
