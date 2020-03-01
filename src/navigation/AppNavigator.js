import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StartScreen, ListDrinkScreen} from '../screens';

const noHeader = {headerShown: false};

const stack = {
  Start: {
    screen: StartScreen,
    navigationOptions: noHeader,
  },
  ListDrinks: {
    screen: ListDrinkScreen,
    navigationOptions: noHeader,
  },
};

const MainStack = createStackNavigator(stack);

export default createAppContainer(MainStack);
