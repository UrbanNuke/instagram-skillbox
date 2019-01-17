import React from 'react';

const Photo = ({photo}) => {

  return (
    <div className="photo-wrap">
      <div className="photo-wrap__header">
        <div className="author-img">
          <img src={photo.user.profile_image.small}></img>
        </div>
        <div className="author"><a href={photo.user.links.self}>{photo.user.username}</a></div>
      </div>
      <hr></hr>
      <div className="photo-item">
        <img src={photo.urls.small}></img>
      </div>
      <div className="count-likes">Likes: {photo.likes}</div>
    </div>
  )
}

export default Photo;