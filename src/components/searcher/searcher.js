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
    return (
      <SearcherContainer>
        <IconContainer>
          <Icon name="search" size={28} color="red" />
        </IconContainer>
        <InputContainer>
          <Input
            placeholder="Search your favourite cocktail"
            placeholderTextColor="grey"
            onFocus={this.props.funOnFocus}
            onChangeText={this.props.funChangeText}
            value={this.props.inputValue}
            autoFocus={this.props.focus}
          />
        </InputContainer>
      </SearcherContainer>
    );
  }
}
