/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import drinksReducer from './src/store/reducer/drinks';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  drinks: drinksReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = props => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
