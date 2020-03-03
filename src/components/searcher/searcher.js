import React, {Component} from 'react';
import {
  InputContainer,
  IconContainer,
  SearcherContainer,
  Icon,
  Input,
} from './styles';
import PropTypes from 'prop-types';

export default class Searcher extends Component {
  static defaultProps = {
    funOnFocus: () => {},
    funChangeText: () => {},
    focus: false,
  };

  static PropTypes = {
    funOnFocus: PropTypes.func,
    funChangeText: PropTypes.func,
    inputValue: PropTypes.string,
    focus: PropTypes.bool,
  };

  render() {
    const {funOnFocus, funChangeText, inputValue, focus} = this.props;
    return (
      <SearcherContainer>
        <IconContainer>
          <Icon name="search" size={28} color="red" />
        </IconContainer>
        <InputContainer>
          <Input
            placeholder="Search your favourite cocktail"
            placeholderTextColor="grey"
            onFocus={funOnFocus}
            onChangeText={funChangeText}
            value={inputValue}
            autoFocus={focus}
          />
        </InputContainer>
      </SearcherContainer>
    );
  }
}
