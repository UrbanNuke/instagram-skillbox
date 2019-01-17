import React from 'react';
import Header from '../components/header';
import {setToken, unsplash, getUser, getPhotos} from '../unsplash/unsplash';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    const {loadUserInfo} = props;
    const getUserData = async () => {
      if (!localStorage.getItem('token')) {
        let token = await this.setAuthToken();
      }
      let data = await getUser(unsplash);
      loadUserInfo(data);
      let photos = await getPhotos(unsplash);
      loadUserPhotos(photos);
    }
    getUserData();
  }
  
  componentDidMount() {
    // getUser(unsplash)
    //   .then( resp => {
      //     loadUserInfo(resp);
    //   });
  }
  
  setAuthToken() {
    setToken(unsplash);
  }
  
  render() {
    const {user, photos, currentPhoto} = this.props.store;
    console.log(this.props)
    return(
      <div className="auth-page">
        <Header user={user}/>
        <Photos photos={photos} />
      </div>
    )
  }

}

export default Auth;