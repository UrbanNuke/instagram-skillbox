import React from 'react';
import Photo from './photo';

const Photos = ({photos, likePhoto, unlikePhoto}) => {
  return (
    <section id="photos">
      <div className="col-md-12">
        <div className="photos-block">
          {
            photos.map((photo, index) => {
              return (
                <Photo 
                  photo={photo}
                  key={index}
                  likePhoto={likePhoto.bind(this)}
                  unlikePhoto={unlikePhoto.bind(this)}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Photos;