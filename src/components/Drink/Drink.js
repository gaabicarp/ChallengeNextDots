import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, ImgContainer, TextContainer, DrinkImg} from './styles';
import PropTypes from 'prop-types';

export default class Drink extends Component {
  static PropTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const {imageUrl, name} = this.props;
    return (
      <Card>
        <ImgContainer>
          <DrinkImg source={{uri: imageUrl}} />
        </ImgContainer>
        <TextContainer>
          <Text>{name}</Text>
        </TextContainer>
      </Card>
    );
  }
}
