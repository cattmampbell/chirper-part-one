import React from 'react';
import '../css/Stats.css';

const Stats = () => {
  return (
    <React.Fragment>
      {/* User Stats */}
      <nav id="userStatsNav" className="navbar navbar-light py-1">
        <div class="container">
          <div class="row">
            <div class="col">

            </div>

            <div class="col-6">
              <ul id="userStatsUnorderedList" class="list-group m-0 p-0">
                {/* Tweets */}
                <li id="tweetsListItem" class="list-group-item d-inline-block">
                  <a href="" class="d-block">
                    <span>Tweets</span>
                    <span>50</span>
                  </a>
                </li>
                {/* Following */}
                <li id="followingListItem" class="list-group-item d-inline-block">
                  <a href="" class="d-block">
                    <span>Following</span>
                    <span>314</span>
                  </a>
                </li>
                {/* Followers */}
                <li id="followersListItem" class="list-group-item d-inline-block">
                  <a href="" class="d-block">
                    <span>Followers</span>
                    <span>157</span>
                  </a>
                </li>
                {/* Likes */}
                <li id="likesListItem" class="list-group-item d-inline-block">
                  <a href="" class="d-block">
                    <span>Likes</span>
                    <span>42</span>
                  </a>
                </li>
                {/* Moments */}
                <li id="momentsListItem" class="list-group-item d-inline-block">
                  <a href="" class="d-block">
                    <span>Moments</span>
                    <span>7</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Stats;