import React from 'react';
import Photo from './photo';

const Photos = ({photos}) => {
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