import React from 'react';
import '../css/Avatar.css';

const Avatar = () => {
  return(
    <React.Fragment>
    {/* <!-- START Avatar.jsx --> */}

      <div className="container">
        {/* <!-- User Avatar Container --> */}
        <div id="userAvatarDiv" className="position-relative">
          {/* <!-- User Avatar --> */}
          <div id="userAvatar" className="position-relative"></div>
        </div>
      </div>

    {/* <!-- END Avatar.jsx --> */}
    </React.Fragment>
  )
}

export default Avatar;