import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ActivityIndicator, Button} from 'react-native';
import {
  Container,
  HeaderContainer,
  Background,
  BtnContainer,
  ContainerActivity,
  TextError,
} from './styles';
import {Searcher, DrinkList, ArrowBack} from '../../components/';

import Colors from '../../constant/Color';

import * as drinksActions from '../../store/actions/drinks';

const ListDrinkScreen = props => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [drinkName, setDrinkName] = useState('');

  const dispatch = useDispatch();

  let drinklist = useSelector(state => state.drinks.drinks);

  const setDrinks = async () => {
    setError('');
    if (drinkName.length >= 3) {
      setIsLoading(true);
      try {
        await dispatch(drinksActions.fetchDrinks(drinkName));
      } catch (err) {
        setError(err.message);
        dispatch(drinksActions.clearDrinks());
      }
      setIsLoading(false);
    }

    if (drinkName.length === 2) {
      dispatch(drinksActions.clearDrinks());
    }
  };

  const onCancelhandler = () => {
    setDrinkName('');
    dispatch(drinksActions.clearDrinks());
  };

  const onChangeHandler = text => {
    setDrinkName(text);
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    setDrinks();
  }, [drinkName]);

  return (
    <Container>
      <HeaderContainer>
        <ArrowBack onPress={goBack} />
        <Searcher
          funChangeText={onChangeHandler}
          inputValue={drinkName}
          focus={true}
        />
        <BtnContainer>
          <Button
            title="Cancel"
            color={Colors.Primary}
            onPress={onCancelhandler}
          />
        </BtnContainer>
      </HeaderContainer>
      <Background colors={[Colors.Primary, Colors.Accent]}>
        <ContainerActivity>
          {error ? <TextError>{error}</TextError> : null}
          {isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <DrinkList data={drinklist} />
          )}
        </ContainerActivity>
      </Background>
    </Container>
  );
};

export default ListDrinkScreen;
