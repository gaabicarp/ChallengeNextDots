import config from '../../config';

export default class ServiceApp {
  static fetchAPI(drinkName) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          config.API_URL + 'search.php?s=' + drinkName,
        );
        if (response.ok) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
