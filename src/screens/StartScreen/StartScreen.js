import React from 'react';
import {Container, Background} from './Styles';
import Colors from '../../constant/Color';
import {Logo, Searcher} from '../../components';

const StartScreen = props => {
  const onFocusHandler = () => {
    props.navigation.navigate('ListDrinks');
  };

  return (
    <Background colors={[Colors.Primary, Colors.Accent]}>
      <Container>
        <Logo />
        <Searcher funOnFocus={onFocusHandler} />
      </Container>
    </Background>
  );
};

export default StartScreen;
