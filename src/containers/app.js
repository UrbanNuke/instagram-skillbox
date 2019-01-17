import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from "react-redux";
import Index from '../components';
import Auth from './auth';

import {loadUserInfo} from '../actions/index';


class App extends React.Component {

  render() {
    const {store, loadUserInfo, loadUserPhotos} = this.props;
    return(
      <div className="container">
        <Route 
          path="/" 
          exact 
          render={() => <Index />}
        />
        <Route 
          path="/auth"
          render={() => <Auth loadUserInfo={loadUserInfo} loadUserPhotos={loadUserPhotos} store={store} />} 
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    store: store,
    user: store.user,
    photos: store.photos,
    currentPhoto: store.currentPhoto,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserInfo: (res) => dispatch(loadUserInfo(res)),
    loadUserPhotos: (res) => dispatch(loadUserPhotos(res))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);