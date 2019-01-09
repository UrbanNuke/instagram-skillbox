import Unsplash from 'unsplash-js';

export const authenticationUnsplash = () => {
  // Создаем экземпляр объекта для доступа к API
  const unsplash = new Unsplash({
  // Application ID из настроек вашего приложения
  applicationId: "7d41504d04401d096f6a5a6d1eac2e96a3b3de904afbdcc7fa0ef011bb438d99",
  // Application Secret из настроек вашего приложения
  secret: "5e971e8c77988af183e6dada91a2fb9cddecaf22dbe1fc37de49d07e00b40ba3",
  // Полный адрес страницы авторизации приложения (Redirect URI)
  // Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers
  callbackUrl: "http://instagram.urbanalex.ru/auth"
  });
  
  // Генерируем адрес страницы аутентификации на unsplash.com
  // и указываем требуемые разрешения (permissions)
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
  ]);
  
  // Отправляем пользователя по этому адресу
  location.assign(authenticationUrl);
}
