import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Stats from './Stats';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Stats />
      </React.Fragment>
    )
  }
}

export default App;