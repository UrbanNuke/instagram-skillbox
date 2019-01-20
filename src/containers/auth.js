import React from 'react';
import Header from '../components/header';
import Photos from '../components/photos';
import {getToken, unsplash, getUser, getPhotos, likePhoto, unlikePhoto} from '../unsplash/unsplash';

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
    const {likePhotoAction} = this.props;
    likePhoto(unsplash, id);
    likePhotoAction(id);
  }

  unlikedPhoto(id) {
    const {unlikePhotoAction} = this.props;
    unlikePhoto(unsplash, id);
    unlikePhotoAction(id);
  }

  render() {
    const {user, photos, currentPhoto} = this.props.store;
    console.log(this.props)
    return(
      <div className="auth-page">
        <Header user={user}/>
        <Photos photos={photos} likePhoto={this.likedPhoto.bind(this)} unlikePhoto={this.unlikedPhoto.bind(this)}/>
      </div>
    )
  }

}

export default Auth;