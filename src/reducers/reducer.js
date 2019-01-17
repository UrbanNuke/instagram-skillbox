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
      let userPhotos = {
        photos: [action.items]
      }
      console.log('userPhotos: loaded');
      return {...state, photos: userPhotos}
    default:
      return state;
  }
}
