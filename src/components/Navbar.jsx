import React from 'react';

const Navbar = () => {
  return (
    <div id="navBar">
      <nav className="navbar navbar-light bg-light fixed-top row my-0 py-0">
        {/* <!-- home --> */}
        <a className="navbar text-secondary" href="https://www.chirper.com/">
          <svg className="d-inline-block" width="30" heigh="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <path style={{fill: 'rgb(29, 161, 242)'}} d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" />
          </svg>
        <strong>Home</strong>
        </a>
        {/* <!-- moments --> */}
        <a className="navbar text-secondary" href="https://www.chirper.com/">
          <svg className="d-inline-block align-text-bottom mr-1" width="14" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16">
            <path style={{fill: 'rgb(108, 117, 125)'}} d="M10 7H6l3-7-9 9h4l-3 7 9-9z" />
          </svg>
          <strong>Moment</strong>
        </a>
        {/* <!-- search --> */}
        <form className="form-group mb-0" role="search">
          <div className="input-group">
            <input className="form-control form-control-sm border-secondary" style={{borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderRightWidth: 0, backgroundColor: 'rgb(255, 255, 255)!important'}} type="text" placeholder="Search Chirper" aria-label="Search Chirper" aria-describedby="basic-addon2" />
            <div className="input-group-btn input-group-append">
              <button class="btn-sm btn-outline-secondary border-left-0" style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'rgb(255, 255, 255)!important'}} type="button">
                <svg className="d-inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path style={{fill: 'rgb(108, 117, 125)'}} fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a className="text-secondary" href="https://www.chirper.com">
              <small>Have an account? <strong>Login</strong></small>
            </a>
          </span>
          {/* <!-- dropdown --> */}
          <form className="dropdown-menu p-4">
            <p className="text-secondary mb-1">Have an account?</p>
            <div className="form-group">
              {/* <!-- phone, email or username --> */}
              <input className="form-control form-control-sm" style={{width: 210}} type="email" placeholder="Phone, email or username" aria-label="Phone, email or username" />
            </div>
            <div className="form-group mb-1">
              {/* <!-- password --> */}
              <input className="form-control form-control-sm " style={{width: 210}} type="password" placeholder="Password" aria-label="Password" />
            </div>
            <div class="form-check mb-3">
              {/* <!-- checkbox --> */}
              <input class="form-check-input position-static mr-1" type="checkbox" value="" id="rememberMeCheck" />
              <span className="navbar-text form-control-sm text-secondary px-0">
                <small>Remember me? ∙ <a className="text-primary" href="https://www.chirper.com">Forget password?</a></small>
              </span>
            </div>
            <button className="btn btn-primary" style={{borderRadius: 20, width: 205}} type="submit">Log In</button>
            <hr />
            <p className="text-secondary mb-1">New to Chirper?</p>
            <button className="btn btn-outline-primary" style={{borderRadius: 20, width: 205}} type="submit">Sign Up</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;