import React, {Component} from 'react';
import {TextContainer, TextBold, NormalText, Icon, Container} from './Styles';

export default class Logo extends Component {
  render() {
    return (
      <Container>
        <Icon name="local-bar" size={90} color="white" />
        <TextContainer>
          <TextBold>Cocktail</TextBold>
          <NormalText>Finder</NormalText>
        </TextContainer>
      </Container>
    );
  }
}
