import {View, Image} from 'react-native';
import styled from 'styled-components';

export const Card = styled(View)({
  margin: 20,
  marginBottom: 5,
  height: 120,
  width: '85%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  shadowColor: 'black',
  shadowOpacity: 0.5,
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 8,
  elevation: 5,
  borderRadius: 10,
  backgroundColor: 'white',
});

export const ImgContainer = styled(View)({
  height: '80%',
  width: '30%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  overflow: 'hidden',
});

export const DrinkImg = styled(Image)({
  width: '100%',
  height: '100%',
});

export const TextContainer = styled(View)({
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
});
