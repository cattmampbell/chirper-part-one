import React from 'react';
import '../css/Stats.css';

const Stats = () => {
  return (
    <React.Fragment>
      {/* <!-- START Stats.jsx --> */}
      <nav id="userStatsNav" className="navbar navbar-light py-1">
        <div className="container">
          <div className="row align-items-center" style={{width: 1040}}>
            <div className="col-3">

            </div>
            {/* <!-- User Stats --> */}
            <div className="col-8">
              <ul id="userStatsUnorderedList" className="list-group d-inline-block">
                {/* <!-- Tweets --> */}
                <li id="tweetsListItem" className="nav-item list-group-item d-inline-block">
                  <a href="#" className="d-inline-block text-center align-middle">
                    <span className="user-stats-top">Tweets</span>
                    <br />
                    <span id="tweetsSpan" className="user-stats-bottom">50</span>
                  </a>
                </li>
                {/* <!-- Following --> */}
                <li id="followingListItem" className="nav-item list-group-item d-inline-block">
                  <a href="#" className="d-inline-block text-center align-middle">
                    <span className="user-stats-top">Following</span>
                    <br />
                    <span className="user-stats-bottom">314</span>
                  </a>
                </li>
                {/* <!-- Followers --> */}
                <li id="followersListItem" className="nav-item list-group-item d-inline-block">
                  <a href="#" className="d-inline-block text-center align-middle">
                    <span className="user-stats-top">Followers</span>
                    <br />
                    <span className="user-stats-bottom">157</span>
                  </a>
                </li>
                {/* <!-- Likes --> */}
                <li id="likesListItem" className="nav-item list-group-item d-inline-block">
                  <a href="#" className="d-inline-block text-center align-middle">
                    <span className="user-stats-top">Likes</span>
                    <br />
                    <span className="user-stats-bottom">42</span>
                  </a>
                </li>
                {/* <!-- Moments --> */}
                <li id="momentsListItem" className="nav-item list-group-item d-inline-block">
                  <a href="#" className="d-inline-block text-center align-middle">
                    <span className="user-stats-top">Moments</span>
                    <br />
                    <span className="user-stats-bottom">7</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <button id="followBtn" class="btn btn-outline-primary " type="button">Follow</button>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Stats.jsx END --> */}
    </React.Fragment>
  )
}

export default Stats;