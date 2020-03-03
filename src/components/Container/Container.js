import React, {Component} from 'react';
import {viewContainer} from './Styles';
import PropTypes from 'prop-types';

export default class Container extends Component {
  static PropTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
  };

  render() {
    return (
      <viewContainer style={this.props.style}>{this.props.children}</viewContainer>
    );
  }
}
