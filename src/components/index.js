import React from 'react';
import Unsplash from 'unsplash-js';
import { authenticationUnsplash } from '../unsplash/unsplash';

class Index extends React.Component {
  authorize() {
    authenticationUnsplash();
  }

  render() {

    return(
      <div className="container">
        <img src="build/images/logo.png" className="index-logo"></img>
        <div className="authorize-block text-center">
          <p>For start application skillboxgram you'l be a authorized in unsplash.com</p>
          <div className="authorize-button">
            <button className="btn btn-success" onClick={this.authorize}>Authorize</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Index;