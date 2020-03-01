import {View, TextInput} from 'react-native';
import styled from 'styled-components';
import icon from 'react-native-vector-icons/MaterialIcons';

export const SearcherContainer = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 10,
  width: '60%',
  maxHeight: 40,
});

export const IconContainer = styled(View)({
  width: '10%',
  alignItems: 'center',
});

export const InputContainer = styled(View)({
  width: '85%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Icon = styled(icon)(p => ({
  color: p.color,
  fontSize: p.size,
}));

export const Input = styled(TextInput)({
  padding: 7,
});
