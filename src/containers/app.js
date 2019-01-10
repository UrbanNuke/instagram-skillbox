import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Index from '../components';
import Auth from '../components';

class App extends React.Component {

  render() {

    return(
      <div>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/auth" component={Auth} />
        </div>
      </div>
    )
  }
}

export default App;