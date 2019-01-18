import React from 'react';
import Header from '../components/header';
import Photos from '../components/photos';
import {getToken, unsplash, getUser, getPhotos, likePhoto} from '../unsplash/unsplash';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    const {loadUserInfo, loadUserPhotos} = props;
    const getUserData = async () => {
      await getToken(unsplash);
      let data = await getUser(unsplash);
      await loadUserInfo(data);
      let photos = await getPhotos(unsplash);
      await loadUserPhotos(photos);
    }
    getUserData();
  }

  likedPhoto(id) {
    console.log('work');
    let like = likePhoto(unsplash, id);
    console.log(like, id);
    return like;
  }

  render() {
    const {user, photos, currentPhoto} = this.props.store;
    console.log(this.props)
    return(
      <div className="auth-page">
        <Header user={user}/>
        <Photos photos={photos} likePhoto={this.likedPhoto.bind(this)}/>
      </div>
    )
  }

}

export default Auth;