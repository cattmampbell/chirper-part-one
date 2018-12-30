import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1"> 
        <img className="d-inline-block align-top" src="../assets/twitter-social-icon-rounded-square-color.svg" width="30" height="30" alt="" />
        Chirper
      </span>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">    
        <form className="form-inline">
          <input className="form-control mr-sm-2" style={{ borderRadius: 20, width: 225 }} type="search" placeholder="Search Chirper" aria-label="Search Chirper" />
        </form>

        <div className="nav-item dropdown ml-0 mr-5" style={{ cursor: 'pointer' }}>
          <span className="nav-link dropdown-toggle" style={{ marginRght: 40 }} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <small>Have an account? <b>Log in</b></small>
          </span>

          <div className="dropdown-menu justify-content-center" aria-labelledby="navbarDropdownMenuLink">
            <div className="navbar-text mx-4">
              <p>Have an account?</p>
              <form className="form-inline mb-3">
                <input className="form-control mr-sm-2" style={{ width: 225 }} type="text" placeholder="Phone, email or username" aria-label="Phone, email or username" />
              </form>
              <form className="form-inline">
                <input className="form-control mr-sm-2" style={{ width: 225 }} type="text" placeholder="Password" aria-label="Password" />
              </form>
            </div>

            <label className="mt-0 mx-3">
              <input className="mx-1" type="checkbox" value="1" />
              <span className="navbar-text mx-1">
                <small>Remember me</small>
                <small> ∙ </small>
                <span className="text-primary" style={{ cursor: 'pointer' }}>
                  <small>Forget password?</small>
                </span>
              </span>
            </label>

            <button className="btn btn-primary ml-4" style={{ borderRadius: 20, width: 225 }}>Login</button>
            <hr className="mb-1" style={{ width: 215 }} />
            <div className="navbar-text mx-4 mt-0 mb-0">
              <p className="mt-0 mb-2">New to Chirper?</p>
            </div>
            <button className="btn btn-outline-primary ml-4 mb-3" style={{ borderRadius: 20, width: 225 }}>Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;