import React, { Component } from 'react';
import Navbar from './Navbar';
import Stats from './Stats';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Stats />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;