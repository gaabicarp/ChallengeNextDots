import Drink from '../../models/drinks';
import ServiceApp from '../../provider/APIrequest';

export const SET_DRINKS = 'SET_DRINKS';
export const CLEAR_DRINKS = 'CLEAR_DRINKS';
export const SET_ERROR = 'SET_ERROR';

export const fetchDrinks = drinkName => {
  return async dispatch => {
    try {
      const response = await ServiceApp.fetchAPI(drinkName);
      let resData = await response.json();
      resData = resData.drinks;

      if (resData === null) {
        const error = 'That drink was not found';
        dispatch({type: SET_ERROR, payload: error});
      } else {
        const loadedDrinks = resData.map(item => {
          const drink = new Drink(
            item.idDrink,
            item.strDrinkThumb,
            item.strDrink,
          );
          return drink;
        });

        dispatch({type: SET_DRINKS, payload: loadedDrinks});
      }
    } catch (err) {
      if (err) {
        dispatch({type: SET_ERROR, payload: err.message});
      }
    }
  };
};

export const clearDrinks = () => {
  return {type: CLEAR_DRINKS};
};
