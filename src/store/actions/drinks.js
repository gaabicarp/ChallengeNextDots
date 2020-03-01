import Drink from '../../models/drinks';

export const SET_DRINKS = 'SET_DRINKS';
export const CLEAR_DRINKS = 'CLEAR_DRINKS';

export const fetchDrinks = drinkName => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`,
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      let resData = await response.json();
      resData = resData.drinks;

      if (resData === null) {
        throw new Error('That drink was not found');
      }

      const loadedDrinks = [];

      // eslint-disable-next-line no-unused-vars
      for (const key in resData) {
        loadedDrinks.push(
          new Drink(
            resData[key].idDrink,
            resData[key].strDrinkThumb,
            resData[key].strDrink,
          ),
        );
      }

      dispatch({type: SET_DRINKS, drinks: loadedDrinks});
    } catch (err) {
      throw err;
    }
  };
};

export const clearDrinks = () => {
  return {type: CLEAR_DRINKS};
};
