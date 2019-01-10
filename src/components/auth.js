import React from 'react';

class Auth extends React.Component {


  render() {

    return(
      <div className="container">
        <section id="header">
          <div className="row">
            <div className="col-md-12">
              <div className="auth-logo">
                <img src="build/logo.png"></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="auth-avatar">
                <img src="#"></img>
              </div>
              <p className="auth-username">
                userName
              </p>
            </div>
            <div className="col-md-9">
              <div className="auth-description"></div>
            </div>
          </div>
        </section>
        <section id="photos-block"></section>
        <div className="row">
          <div className="photos">photos</div>
        </div>
      </div>
    )
  }

}

export default Auth;