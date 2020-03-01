import styled from 'styled-components';
import {Container as _Container} from '../../components/';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(_Container)({
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeaderContainer = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  height: 70,
  width: '100%',
  backgroundColor: '#EDEDED',
});

export const ContainerActivity = styled(View)({
  flex: 2,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  height: '100%',
});

export const TextError = styled(Text)({
  color: 'white',
  fontSize: 25,
  textAlign: 'center',
});

export const BtnContainer = styled(View)({
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Background = styled(LinearGradient)({
  flex: 2,
  height: '100%',
  width: '100%',
});
