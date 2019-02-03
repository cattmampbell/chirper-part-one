import React, { Component } from 'react';
import Navbar from './Navbar';
import Stats from './Stats';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Stats />
      </React.Fragment>
    )
  }
}

export default App;