import React from 'react';
import '../css/User.css';

const User = () => {
  return(
    <React.Fragment>
    {/* <!-- START User.jsx --> */}


      <div id="userDiv" className="position-relative">
        <div id="userNameDiv">
          {/* <!-- User Name --> */}
          <a id="nameAnchor" href="http://www.chirper.com/cattmampbell/">
            <h4 id="nameHeader" className="h4 d-inline-block align-middle my-0 ml-0 mr-1">Matthew Campbell</h4>
          </a>
          {/* <!-- Verified --> */}
          <a id="verifiedAnchor" href="http://www.chirper.com/help/verified/">
            <svg id="verifiedSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path id="verifiedSVGPath" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zm-9.164 4.936L3.008 8.505l1.5-1.5 1.998 2 4.997-4.998 1.499 1.55-6.496 6.445z"/>
            </svg>
          </a>
        </div>
        <div id="userHandleDiv">
          {/* <!-- User Handle --> */}
          <a id="handleAnchor" href="http://www.chirper.com/cattmampbell/">
            <h5 id="handleHeader" className="h5 d-inline-block align-middle my-0 mx-0 font-weight-light text-muted">@cattampbell</h5>
          </a>
        </div>
        <div id="userBioDiv" className="my-3">
          {/* <!-- User Bio --> */}
          <h6 id="bioHeader" className="h6 d-inline-block align-middle my-0 mx-0 font-weight-light">Aspiring web developer.</h6>
        </div>
        <div id="userLocationDiv">
          {/* <!-- User Location --> */}
          <span id="locationSpan" className="mr-2">
            <svg id="locationSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
              <path id="locationSVGPath" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>
            </svg>
          </span>
          <h6 id="locationHeader" className="h6 d-inline-block align-middle my-0 mx-0 font-weight-light text-muted">Chattanooga, TN</h6>
        </div>
        <div id="userLinkDiv">
          {/* <!-- User Link --> */}
          <span id="linkSpan" className="mr-2">
            <svg id="linkSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path id="linkSVGPath" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/>
            </svg>
          </span>
          <a id="linkAnchor" href="http://www.instagram.com/cattmampbell/">
            <h6 id="linkHeader" className="h6 d-inline-block align-middle mx-0 my-0 font-weight-light">instagram.com/cattmampbell</h6>
          </a>
        </div>
        <div id="userJoinedDiv">
          {/* <!-- User Joined --> */}
          <span id="joinedSpan" className="mr-2">
            <svg id="joinedSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
              <path id="joinedSVGPath" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"/>
            </svg>
          </span>
          <h6 id="joinedHeader" className="h6 d-inline-block align-middle mx-0 my-0 font-weight-light text-muted">Joined Jan 2018</h6>
        </div>
        <div id="userMediaDiv" className="my-3">
          {/* <!-- User Media --> */}
          <span id="mediaSpan" className="mr-2">
            <svg id="mediaSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
              <path id="mediaSVGPath" d="M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5 2 4 2-2 3 3V5z"/>
            </svg>
          </span>
          <a id="mediaAnchor" href="http://www.chirper.com/cattmampbell/media/">
            <h6 id="mediaHeader" className="h6 d-inline-block align-middle mx-0 my-0 font-weight-light">Photos and videos</h6>
          </a>
          <div id="userPhotosAndVideos" className="my-2">
            <div id="photo1" className="user-photo d-inline-block"></div>
            <div id="photo2" className="user-photo d-inline-block"></div>
            <div id="photo3" className="user-photo d-inline-block"></div>
            <div id="photo4" className="user-photo d-inline-block"></div>
            <div id="photo5" className="user-photo d-inline-block"></div>
            <div id="photo6" className="user-photo d-inline-block"></div>
          </div>
        </div>
      </div>



    {/* <!-- END User.jsx --> */}
    </React.Fragment>
  )
}

export default User;