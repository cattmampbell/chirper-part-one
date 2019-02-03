import React, { Component } from 'react';
import '../css/Stats.css';

class Stats extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <!-- START Stats.jsx --> */}
      
        <nav id="userStatsNav" className="navbar navbar-light py-0 px-0">
          <div className="container px-0">
            <div id="rowDiv" className="row align-items-center">
              {/* <!-- Empty Column --> */}
              <div className="col-3"></div>
              {/* <!-- User Stats --> */}
              <div className="col-7">
                <ul id="userStatsUnorderedList" className="list-group d-inline-block">
                  {/* <!-- Tweets --> */}
                  <li id="tweetsListItem" className="nav-item list-group-item d-inline-block stats-list-item">
                    <a href="http://www.chirper.com/cattmampbell/" className="d-inline-block align-middle">
                      <span className="d-block text-center user-stats-top">Tweets</span>
                      <span id="tweetsSpan" className="d-block text-center user-stats-bottom">50</span>
                    </a>
                  </li>
                  {/* <!-- Following --> */}
                  <li id="followingListItem" className="nav-item list-group-item d-inline-block stats-list-item">
                    <a href="http://www.chirper.com/cattmampbell/following/" className="d-inline-block align-middle">
                      <span className="d-block text-center user-stats-top">Following</span>
                      <span className="d-block text-center user-stats-bottom">314</span>
                    </a>
                  </li>
                  {/* <!-- Followers --> */}
                  <li id="followersListItem" className="nav-item list-group-item d-inline-block stats-list-item">
                    <a href="http://www.chirper.com/cattmampbell/followers/" className="d-inline-block align-middle">
                      <span className="d-block text-center user-stats-top">Followers</span>
                      <span className="d-block text-center user-stats-bottom">157</span>
                    </a>
                  </li>
                  {/* <!-- Likes --> */}
                  <li id="likesListItem" className="nav-item list-group-item d-inline-block stats-list-item">
                    <a href="http://www.chirper.com/cattmampbell/likes/" className="d-inline-block align-middle">
                      <span className="d-block text-center user-stats-top">Likes</span>
                      <span className="d-block text-center user-stats-bottom">42</span>
                    </a>
                  </li>
                  {/* <!-- Moments --> */}
                  <li id="momentsListItem" className="nav-item list-group-item d-inline-block stats-list-item">
                    <a href="http://www.chirper.com/cattmampbell/moments/" className="d-inline-block align-middle">
                      <span className="d-block text-center user-stats-top">Moments</span>
                      <span className="d-block text-center user-stats-bottom">7</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                <button id="followBtn" className="btn btn-outline-primary d-inline-block position-relative" type="submit">Follow</button>
              </div>
            </div>
          </div>
        </nav>
      
      {/* <!-- END Stats.jsx --> */}
      </React.Fragment>
    )
  }
}

export default Stats;