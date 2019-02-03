import React from 'react';
import Header from './Header';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <React.Fragment>
    {/* <!-- START Navbar.jsx --> */}

      <nav id="topNav" className="navbar navbar-light fixed-top py-0 px-0">
        <div className="container px-0">
          <div className="justify-content-start align-items-center">
            {/* <!-- Home --> */}
            <div id="homeDiv" className="nav-item d-inline-block mx-1 px-2">
              <a id="homeAnchor" className="text-center align-middle" href="https://www.chirper.com/">
                <svg id="homeSVG" className="inline-flex align-text-center" xmlns="http://www.w3.org/2000/svg/" viewBox="0 0 400 400">
                  <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
                </svg>
              Home
              </a>
            </div>
            {/* <!-- Moments --> */}
            <div id="momentsDiv" className="nav-item d-inline-block mx-1 px-2">
              <a id="momentsAnchor" className="text-center align-middle" href="https://www.chirper.com/">
                <svg id="momentsSVG" className="inline-flex mr-1" xmlns="http://www.w3.org/2000/svg/" viewBox="0 0 10 16">
                  <path d="M10 7H6l3-7-9 9h4l-3 7 9-9z" />
                </svg>
                Moments
              </a>
            </div>
          </div>
          <div className="justify-content-end align-items-center">
            {/* <!-- Search Chirper --> */}
            <div id="searchDiv" className="nav-item align-middle d-inline-block">
              <form id="searchForm" className="form-group my-0" role="search">
                <div className="input-group">
                  <input id="searchInput" className="form-control form-control-sm border-right-0 align-middle" type="text" placeholder="Search Chirper" aria-label="Search Chirper" aria-describedby="basic-addon2" />
                  <span className="input-group-btn input-group-append">
                    <button id="searchBtn" className="btn-sm btn-outline-secondary border-left-0" type="button">
                      <svg id="searchSVG" className="d-inline-block" xmlns="http://www.w3.org/2000/svg/" viewBox="0 0 16 16">
                        <path d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" />
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* <!-- Have an account? Login --> */}
            <div className="nav-item dropdown d-inline-block">
              <span id="navbarDropdownMenuLink" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <a className="text-secondary" href="https://www.chirper.com/">
                  <small>Have an account? <strong>Login</strong></small>
                </a>
              </span>
              {/* <!-- Dropdown --> */}
              <form className="dropdown-menu dropdown-menu-right p-4">
                <p className="text-secondary mb-2">Have an account?</p>
                <div className="form-group">
                  <input id="emailInput" className="form-control form-control-sm" type="email" placeholder="Phone, email or username" aria-label="Phone, email or username" />
                </div>
                <div className="form-group mb-1">
                  <input id="passwordInput" className="form-control form-control-sm " type="password" placeholder="Password" aria-label="Password" />
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input position-static mr-1" type="checkbox" value="" id="rememberMeCheck" />
                  <span className="navbar-text form-control-sm text-secondary px-0">
                    <small>Remember me? ∙ <a className="text-primary" href="https://www.chirper.com/">Forget password?</a></small>
                  </span>
                </div>
                <button id="dropdownLoginBtn" className="btn btn-primary" type="submit">Log In</button>
                <hr className="mt-3 mb-2" />
                <p className="text-secondary mb-2">New to Chirper?</p>
                <button id="dropdownSignUpBtn" className="btn btn-outline-primary" type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* HEADER COMPONENT */}
      <Header />

    {/* <!-- END Navbar.jsx --> */}
    </React.Fragment>
  )
}

export default Navbar;