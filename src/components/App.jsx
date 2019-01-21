import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Stats from './Stats';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Header />
        <Stats />
      </div>
    )
  }
}

export default App;