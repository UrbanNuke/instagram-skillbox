import React from 'react';
import logo from '../assets/logo.png';
import { authenticationUnsplash, unsplash } from '../unsplash/unsplash';

class Index extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="col-md-8 offset-md-4">
          <img src={logo} className="index-logo"></img>
          <div className="authorize-block text-center">
            <p>For start application skillboxgram you'l be a authorized in unsplash.com</p>
            <div className="authorize-button">
              <button className="btn btn-success" onClick={ev => {authenticationUnsplash(unsplash)}}>Authorize</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Index;