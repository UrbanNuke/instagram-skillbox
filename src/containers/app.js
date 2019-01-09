import React from 'react';
import Unsplash from 'unsplash-js';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Index from '../components';

class App extends React.Component {

  render() {

    return(
      <div>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/auth" />
        </div>
      </div>
    )
  }
}

export default App;