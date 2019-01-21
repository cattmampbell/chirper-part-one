import React from 'react';
import Avatar from './Avatar';
import '../css/Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <main>
        {/* User Header Background Image */}
        <div id="userHeaderBackground" className="row" alt="Image courtesy of Elijah M. Henderson (@elijahhenderson) on Unsplash. More info here: https://unsplash.com/@elijahhenderson">
          <Avatar />
        </div>
      </main>
    </React.Fragment>
  )
}

export default Header;