import React from 'react';
import '../css/Avatar.css';

const Avatar = () => {
  return(
    <React.Fragment>
      <div className="container">
        {/* User Avatar Container */}
        <div id="userAvatarDiv" class="position-relative">
          {/* User Avatar Image */}
          <div id="userAvatar">

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Avatar;