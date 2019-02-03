import React, { Component } from 'react';
import '../css/Main.css';
import User from './User';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <!-- START Main.jsx --> */}
      
        <div id="mainDiv">
          <div className="container">
            <div className="row">
              <div className="col-3">
                {/* USER COMPONENT */}
                <User />
              </div>
            </div>
          </div>
        </div>

      {/* <!-- END Main.jsx --> */}
      </React.Fragment>
    )
  }
}

export default Main;