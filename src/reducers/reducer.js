export const initialState = {
  user: {},
  photos: [],
  currentPhoto: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USER_INFO':
      let userInfo = {
        id: action.id,
        nickname: action.nickname,
        link: action.link,
        firstName: action.firstName,
        lastName: action.lastName,
        image: action.image,
        email: action.email,
        total_likes: action.total_likes,
        total_photos: action.total_photos,
        bio: action.bio
      }
      console.log('userInfo: loaded');
      return {...state, user: userInfo}

    case 'LOAD_USER_PHOTOS':
      console.log('userPhotos: loaded');
      return {...state, photos: action.items}
      
    // case 'LIKE_PHOTO':
    //   console.log('liked');
    //   return 

    default:
      return state;
  }
}
