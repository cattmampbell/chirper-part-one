import React from 'react';
import Avatar from './Avatar';
import '../css/Header.css';

const Header = () => {
  return (
    <React.Fragment>
    {/* <!-- START Header.jsx --> */}

      {/* <!-- User Header Background --> */}
      <div id="userHeaderBackground" className="row mx-0" alt="Image courtesy of Elijah M. Henderson (@elijahhenderson) on Unsplash. More info here: https://unsplash.com/@elijahhenderson">
        {/* AVATAR COMPONENT */}
        <Avatar />
      </div>

    {/* <!-- END Header.jsx --> */}
    </React.Fragment>
  )
}

export default Header;