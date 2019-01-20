import Unsplash, {toJson} from 'unsplash-js';

  // Создаем экземпляр объекта для доступа к API
export const unsplash = new Unsplash({
  // Application ID из настроек вашего приложения
  applicationId: "7d41504d04401d096f6a5a6d1eac2e96a3b3de904afbdcc7fa0ef011bb438d99",
  // Application Secret из настроек вашего приложения
  secret: "5e971e8c77988af183e6dada91a2fb9cddecaf22dbe1fc37de49d07e00b40ba3",
  // Полный адрес страницы авторизации приложения (Redirect URI)
  // Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers
  callbackUrl: "http://instagram.urbanalex.ru/auth"
});

export const authenticationUnsplash = (unsplash) => {
  // Генерируем адрес страницы аутентификации на unsplash.com
  // и указываем требуемые разрешения (permissions)
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
  ]);
  
  // Отправляем пользователя по этому адресу
  location.assign(authenticationUrl);
}

export const getToken = (unsplash) => {
    if (localStorage.getItem('token')) {
      return unsplash.auth.setBearerToken(localStorage.getItem('token'));
      
    };
    const code = location.search.split('code=')[1];
    if (code) {
      return unsplash.auth.userAuthentication(code)
        .then(toJson)
        .then(resp => {
          localStorage.setItem('token', resp.access_token);
          unsplash.auth.setBearerToken(resp.access_token);
        });
    }
}

export const getUser = (unsplash) => {
  return unsplash.currentUser.profile()
    .then(toJson)
    .then(resp => resp)
}

export const getPhotos = (unsplash) => {
  return (
    unsplash.photos.listPhotos(1, 9 , 'latest')
      .then(toJson)
      .then(resp => resp)
  )
}

export const likePhoto = (unsplash, id) => {
  return (
    unsplash.photos.likePhoto(id)
      .then(toJson)
      .then(resp => resp)
  )
}

export const unlikePhoto = (unsplash, id) => {
  return (
    unsplash.photos.unlikePhoto(id)
      .then(toJson)
      .then(resp => resp)
  )
}
